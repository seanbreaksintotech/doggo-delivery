import React, { useState } from "react";
import "../navbar.css";

function Navbar() {
  const [active, setActive] = useState("navMenu");
  const navToggler = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");
  };

  const [modal, setModal] = useState(0);
  const modalToggle = (index) => {
    setModal(index);
  };

  return (
    <nav className="nav">
      <a href="#" className="doggo">
        {" "}
        Doggo Delivery <i class="fa-solid fa-dog"></i>
      </a>
      <ul className={active}>
        <li className="name">
          {" "}
          <a href="#" className="link">
            About
          </a>
        </li>
        <li className="name">
          {" "}
          <a href="#" className="link">
            Contact
          </a>
        </li>
        <button onClick={() => modalToggle(1)} className="signUp">
          Sign Up
        </button>
      </ul>
      <div onClick={navToggler} className="navToggle">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>

      <div className={modal === 1 ? "modal2 active" : "modal2"}>
        <div
          onClick={() => modalToggle(0)}
          className={modal === 1 ? "overlay2 active" : "overlay2"}
        ></div>
        <div className="modal-content2">
          <h2>Sign Up</h2>
          <form>
            <div className="inputs">
              <input type="text" placeholder="email" required></input>
            </div>
            <div className="inputs">
              <input type="text" placeholder="password" required></input>
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="confrim password"
                required
              ></input>
            </div>
            <div className="inputs">
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
