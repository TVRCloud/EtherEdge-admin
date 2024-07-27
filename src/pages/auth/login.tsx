import { useState } from "react";
import './login.scss'

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = () => {
    console.log(email, password);
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
          <form className="loginForm">
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
              <button
                type="submit"
                className="loginButton"
                onClick={() => handleLogin}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* <div className="lInfo">
          {loginCarrdData.map((data, index) => (
            <div className="lCard" key={index}>
              <div className="limg-div">
                <img src={data.image} alt={data.name} />
              </div>
              <div className="lc-contents">
                <i>"{data.quote}"</i>
                <h3>{data.name}</h3>
                <p>{data.designation}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Login;
