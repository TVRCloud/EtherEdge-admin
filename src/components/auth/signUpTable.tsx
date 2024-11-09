import { FormEvent, useState } from "react";
import { signUpData } from "../../apiCalls";
import { toaster } from "../ui/toaster";

const SignUpTable = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [fullName, setFullName] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validatePassword = (password: string) => {
    // Check if password contains at least one letter, one number, and one special character
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(password);
  };

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    if (!validatePassword(password)) {
      setPasswordError(
        "Password must contain at least one letter, one number, and one special character."
      );
      return;
    }
    setPasswordError(""); // Reset error if validation passes

    try {
      signUpData({ email, password });
      toaster.create({
        title: "Toast Title",
        type: "success",
      });
    } catch (error) {
      console.log(error);
    }
    // Add signup logic here
  };

  return (
    <div>
      <form onSubmit={handleSignup} className="space-y-6">
        {/* <div className="formGroup">
          <label className="text-gray-300 text-sm font-medium">Full Name</label>
          <input
            type="text"
            id="signup-fullname"
            name="fullname"
            placeholder="Enter your full name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 hover:border-blue-500 placeholder-gray-400"
          />
        </div> */}
        <div className="formGroup">
          <label className="text-gray-300 text-sm font-medium">Email</label>
          <input
            type="email"
            id="signup-email"
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
            id="signup-password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 hover:border-blue-500 placeholder-gray-400"
          />
        </div>
        <div className="formGroup">
          <label className="text-gray-300 text-sm font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="signup-confirm-password"
            placeholder="Confirm your password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full p-3 bg-transparent border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 hover:border-blue-500 placeholder-gray-400"
          />
        </div>
        {passwordError && (
          <div className="text-red-500 text-sm">{passwordError}</div>
        )}
        <div className="lbtn-div">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200 transform hover:scale-105"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpTable;
