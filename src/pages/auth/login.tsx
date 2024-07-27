import { FormEvent, useState } from "react";
import "./login.scss";
import { signInData } from "../../apiCalls";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);

    try {
      signInData({ email, password }, dispatch);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Login">
      <div className="messageContainer">
        <img src="/main/arch.svg" alt="" />
        <div className="loginOverlay">
          <h2>Experience the</h2>
          <h2 style={{ color: "#8900c4" }}>Power of K-Admin</h2>

          <span className="button">
            <button>Login</button>
          </span>
        </div>
      </div>
      <div className="LoginContainer">
        <div className="containerL">
          <form onSubmit={handleLogin} className="loginForm">
            <h2>Login</h2>
            <div className="formGroup">
              <label>Email</label>
              <input
                type="mail"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                title="Enter your email"
              />
            </div>
            <div className="formGroup">
              <label>Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                title="Enter your password"
              />
            </div>
            <div className="lbtn-div">
              <button type="submit" className="loginButton">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
