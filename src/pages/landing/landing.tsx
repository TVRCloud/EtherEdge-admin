import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userRedux";

export default function Landing() {
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#175d69] via-[#330c43] to-[#330c43]">
      <button
        onClick={() => dispatch(logoutUser())}
        className="text-white text-base px-5 py-2.5 border border-white rounded-md hover:bg-[#47b2e4] transition-colors duration-200"
      >
        Logout
      </button>
    </div>
  );
}
