import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

function LogoMobile() {
  const [show, setShow] = useState(false);

  const handleMenu = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="TheLogoCon">
      <div className="moLogoPar">
        <div className="mLogoSub">
          <div onClick={handleMenu} className="MenuBar">
            <div className="Menu"></div>
            <div className="Menu"></div>
            <div className="Menu"></div>
          </div>
        </div>
        <div>
          <img
            className="pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIWNTiq9IDokwKAKD68rWcfvb_790X2MOxIA&usqp=CAU"
            alt=""
          />
        </div>
      </div>
      <hr className="mobileHr" />

      {show && (
        <div onClick={handleMenu} className="selector">
          <div className="coms">
            <img
              style={{ width: "50px" }}
              src="https://i.pinimg.com/736x/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg"
              alt=""
            />
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p style={{ color: "black", textDecoration: "none" }}>
              Summary Dashboard
            </p>
          </div>
          <div className="coms">
            <p style={{ color: "black", fontSize: "20px" }}>|||\</p> &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p style={{ color: "black", textDecoration: "none" }}>
              Attendance Tracking
            </p>
          </div>
          <div className="coms">
            <img
              src="https://e7.pngegg.com/pngimages/644/55/png-clipart-developmental-psychology-applied-behavior-analysis-human-behavior-behaviorism-learning-psychology-miscellaneous-logo-thumbnail.png"
              style={{ width: "50px" }}
              alt=""
            />{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p style={{ color: "black", textDecoration: "none" }}>
              Behavioral Analytics
            </p>
          </div>
          <div className="coms">
            <img
              style={{ width: "50px" }}
              src="https://cdn.iconscout.com/icon/premium/png-512-thumb/test-8114036-6694709.png?f=webp&w=256"
              alt=""
            />{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <p style={{ color: "black", textDecoration: "none" }}>
              Academic Performance Tracking
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoMobile;
