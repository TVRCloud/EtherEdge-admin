import './landing.scss'
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userRedux";

const Landing = () => {
  const dispatch = useDispatch();

  return (
    <div className="Landing">
      <header className="Landing-header">
        <nav className="Landing-navbar">
          <h2 className="logo">
            <a href="#">KAdmin</a>
          </h2>
          <div className="buttons">
            {/* <a className="logout" onClick={() => dispatch(logoutUser())}>Logout</a> */}
            <a className="signup" onClick={() => dispatch(logoutUser())}>
              Logout
            </a>
          </div>
        </nav>
      </header>
      <section className="Landing-hero-section">
        <div className="hero">
          <h2>K Admin Panel</h2>
          <p>
            Explore the power of our admin panel and streamline your operations.
            Manage campaigns, analyze data, and optimize your strategies
            seamlessly.
          </p>
          <div className="buttons">
            <a href="#" className="learn">
              Contact Admin
            </a>
            <a href="#" className="explore">
              Explore Now
            </a>
          </div>
        </div>
        <div className="img">
          <img src="/landing/landingBg.png" alt="admin panel image" />
        </div>
      </section>
    </div>
  );
};

export default Landing;
