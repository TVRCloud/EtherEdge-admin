import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { signInData } from "../../apiCalls";

const LoginTable = () => {
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
    <div>
      <form onSubmit={handleLogin} className="space-y-6">
        <div className="formGroup">
          <label className="text-gray-300 text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 hover:border-blue-500 placeholder-gray-400"
          />
        </div>
        <div className="formGroup">
          <label className="text-gray-300 text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 hover:border-blue-500 placeholder-gray-400"
          />
        </div>
        <div className="lbtn-div">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginTable;
