import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClear } from "react-icons/md";
import logo from "../../Images/Sunrise1.png"; //sunrise-sunset-logo.svg
import { useState } from "react";
import "./index.css";

const Header = (props) => {
  // const { currentLocation } = props;
  const navigate = useNavigate();

  const currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        navigate("/your-location", { state: { latitude, longitude } });
      },
      (error) => {
        navigate("/failure");
      }
    );
  };
  const [homeBtn, updateHomeBtnStatus] = useState(false);

  const chnageHomeBtnStatus = () => {
    updateHomeBtnStatus(!homeBtn);
  };
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/">
            <img className="website-logo" src={logo} alt="website logo" />
          </Link>
          <button
            type="button"
            className="nav-mobile-btn"
            onClick={chnageHomeBtnStatus}
          >
            {homeBtn ? <MdClear /> : <RxHamburgerMenu />}
          </button>
        </div>
        <div className="nav-bar-large-container">
          <Link to="/">
            <img className="website-logo" src={logo} alt="website logo" />
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link" onClick={currentLocation}>
                FIND MY LOCATION
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {homeBtn && (
        <div className="nav-menu-mobile">
          <ul className="nav-menu-list-mobile">
            <li className="nav-menu-item-mobile">
              <Link to="/" className="nav-link" onClick={currentLocation}>
                FIND MY LOCATION
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
