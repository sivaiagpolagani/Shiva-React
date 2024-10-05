import { useEffect, useState } from "react";
import { LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Header = () => {

  const [authenticate, setLoginHeader] = useState("Login");

  // if no dependency array => use effect called on every render
  // if dependency array is empty => useEffect calls on intial render just once.
  //if dependency array has [authenticate] => whenever dependency array value(authenticate) changed or updated useEffect is called.
  useEffect(() => {
    console.log("useEffect Called");
  },[authenticate])

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex">
      <div className="logo-container">
        <img className="logo" src={ LOGO_URL } />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus ? "✅" : "🛑" }
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <li className="login-btn">
            <button 
              className="login" 
              onClick={() => {
                authenticate === "Login" ? setLoginHeader("Logout") : setLoginHeader("Login")
              }}>
                {authenticate}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header;