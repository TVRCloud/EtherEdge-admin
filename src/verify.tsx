import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "./redux/userRedux";
import Landing from "./pages/landing/landing";
import App from "./App";
import Login from "./pages/auth/login";
import { useEffect } from "react";

interface User {
  userInfo: User[];
  accessToken: string;
  state: string;
  type: string;
}

const Verify = () => {
  const reduxData = useSelector(
    (state: { user: User }) => state.user.userInfo[0]
  );
  const token = reduxData?.accessToken;
  const dispatch = useDispatch();

  useEffect(() => {
    const validateToken = () => {
      if (token) {
        // Decode the token to get expiration time (assuming it contains an 'exp' claim)
        const decodedToken = atob(token.split(".")[1]);
        const { exp } = JSON.parse(decodedToken);

        // Check if the token is expired
        if (exp && exp * 1000 < Date.now()) {
          // Token is expired, logout the user
          dispatch(logoutUser());
        }
      }
    };

    validateToken();
  }, [token, dispatch]);

  let content;
  if (reduxData) {
    const state = reduxData.state;
    const type = reduxData.type;

    if (state === "banned") {
      alert("You are Banned");
      dispatch(logoutUser());
      sessionStorage.clear();
      content = <Landing />;
    } else {
      if (token) {
        if (type === "admin") {
          content = <App />;
        } else {
          content = <Landing />;
        }
      } else {
        content = <Login />;
      }
    }
  } else {
    content = <Login />;
  }

  return content;
};

export default Verify;
