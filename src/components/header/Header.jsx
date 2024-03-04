import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [showModel, Setmodel] = useState(false);

  const handleModel = () => {
    Setmodel(true);
  };
  return (
    <header>
      <button className="menu icon-th-menu" onClick={handleModel}></button>
      <div></div>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode">
        <span className=" icon-moon-o"></span>
      </button>

      {showModel && (
        <div className="parent ">
          <ul className="modal">
            <li>
              <button className="icon-cross" onClick={() => {Setmodel(false);}}></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
