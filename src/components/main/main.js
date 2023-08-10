import "./main.css";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import NotificationPopUp from "../notification-pop-up/notification-pop-up";

function Main({ theme }) {
  const [mainClass, setMainClass] = useState("main-container");
  useEffect(() => {
    setMainClass(`main-container ${theme}`);
  }, [theme]);

  return (
    <div className="App">
      <div className="nav-container">
        <Link to={"/"} className="link">
          <div className="nav-item">
            <h1>TastyDejvit.com</h1>
          </div>
        </Link>
        <Link to={"/cakes"} className="link">
          <div className="nav-item">
            <p>Cakes</p>
          </div>
        </Link>
        <Link to={"/vegan-food"} className="link">
          <div className="nav-item">
            <p>Vegan Food</p>
          </div>
        </Link>
        <Link to={"/mexican-food"} className="link">
          <div className="nav-item">
            <p>Mexican Food</p>
          </div>
        </Link>
        <Link to={"/chinese-food"} className="link">
          <div className="nav-item">
            <p>Chinese Food</p>
          </div>
        </Link>
        <Link to={"/cocktails"} className="link">
          <div className="nav-item">
            <p>Cocktails</p>
          </div>
        </Link>
      </div>
      <div className={mainClass}>
        <Outlet />
      </div>
      <NotificationPopUp />
    </div>
  );
}
export default Main;
