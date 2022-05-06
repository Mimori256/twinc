import React from "react";
import { Link } from "react-router-dom";
import "./SideMenu.css";

export const SideMenu: React.FC = () => {
  return (
    <>
      <div id="sideMenu">
        <p className="link">
          <Link to="/">Top</Link>
        </p>
        <p className="link">
          <Link to="#help">Help</Link>
        </p>
        <p className="link">
          <Link to="#about">About</Link>
        </p>
      </div>
    </>
  );
};
