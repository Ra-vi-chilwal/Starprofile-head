import React from "react";
import "./Rside.scss";
import Scr11 from "../images/Scr11.png";
import Leftside from "./Leftside";
function Rside() {
  return (
    <>
      <div className="main-top">
        <div className="row g-0">
          <div className="col-xl-8 col-12">
    <Leftside />
          </div>
          <div className="col-xl-4 col-12">
            <div className="mint-d1">
              <p className="mint-p2">Instructions</p>
              <p className="mint-p3">Please read the following Instruction:</p>
            </div>
            <div className="mint-d2">
              <p className="mint-p2">Short Instruction:</p>
              <p className="mint-p3">
                Write s short introduction in the heasder area of your Star
                Profile page. This serves as a good place to welcome your
                fans/visitors ans instruct them to check out your protfolio
                below.
              </p>
              <div className="mint-d3">
                <p className="mint-p2">Header Images:</p>
                <p className="mint-p3">
                  Uplaod your Star Profile header image using a 6:7 aspect ratio
                  to avoid cropping.
                </p>
                <div className="mint-d3">
                  <img src={Scr11} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Rside;
