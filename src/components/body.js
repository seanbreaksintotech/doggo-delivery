import React, { useState } from "react";
import "../body.css";

function Body() {
  const [modal, setModal] = useState(0);
  const modalToggle = (index) => {
    setModal(index);
  };
  return (
    <section className="showcase">
      <video
        src="/videos/pexels-kelly-lacy-5541764(1).mp4"
        autoPlay
        loop
        muted
      />

      <div className="text">
        <h2> Treats Made Simple.</h2>
        <h3> Mans Best Friend Deserves The Best Treats.</h3>
        <h3> Order Now.</h3>
        <button onClick={() => modalToggle(1)}> Place Order</button>
      </div>
      <div className={modal === 1 ? "modal active" : "modal"}>
        <div
          onClick={() => modalToggle(0)}
          className={modal === 1 ? "overlay active" : "overlay"}
        ></div>
        <div className="modal-content">
          <h2>Place Order</h2>
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
    </section>
  );
}

export default Body;
