import React from "react";
import { useState } from "react";
import "../howitworks.css";
function Howitworks() {
  const [tabState, setTabState] = useState(0);
  const tabToggle = (index) => {
    setTabState(index);
  };

  return (
    <div>
      <div className="deal">
        <h2>Save up to 35% if you sign up for autopay </h2>
        <div>
          <button> Learn More</button>
        </div>
      </div>
      <div className="moving">
        <p>Treats made</p>
        <div className="words">
          <span> simple. </span>
          <span> affordable. </span>
          <span> easy. </span>
          <span> healthy. </span>
        </div>
      </div>
      <section>
        <ul className="toggle">
          <li
            className={
              tabState === 1 ? "active" : "" || tabState === 0 ? "active" : ""
            }
            onClick={() => tabToggle(1)}
          >
            Send A Photo
          </li>
          <li
            className={tabState === 2 ? "active" : ""}
            onClick={() => tabToggle(2)}
          >
            Nutritionist Review
          </li>
          <li
            className={tabState === 3 ? "active" : ""}
            onClick={() => tabToggle(3)}
          >
            {" "}
            Delivery Directly To You
          </li>
        </ul>
        <div className="container">
          <div
            className={tabState === 1 ? "content active" : "content"}
            onClick={() => tabToggle(1)}
          >
            <img src="images/casual-life-3d-woman-taking-a-funny-photo-with-dog-1.png"></img>
            <p>Send a photo of your dog or its breed.</p>
          </div>
          <div
            className={tabState === 2 ? "content active" : "content"}
            onClick={() => tabToggle(2)}
          >
            <img src="images/casual-life-3d-man-working-on-computer.png"></img>
            <p>Our Dog Nutritionist will review your pups plan.</p>
          </div>

          <div
            className={tabState === 3 ? "content active" : "content"}
            onClick={() => tabToggle(3)}
          >
            <img src="images/casual-life-3d-girl-with-a-tablet-sitting-in-a-chair-and-receiving-parcel-from-a-drone.png"></img>
            <p>Dog food just right for your pup sent to you.</p>
          </div>
        </div>
      </section>{" "}
    </div>
  );
}

export default Howitworks;
