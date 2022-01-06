import React from "react";
import logo1 from "../../images/logo1.png";
import lagy from "../../images/lagy.png";
import stamp2 from "../../images/stamp2.png";
import namemuise from "../../images/namemuise.png";
function CardImage() {
  return (
    <>
      <div>
        <div className="card card-2">
          <div className="d-flex justify-content-between">
            <img className="img-fluid " src={logo1} alt="" />
            <img className="img-fluid " src={namemuise} alt="" />
          </div>

          <img className="img-fluid pt-3" src={lagy} alt="" />

          <div className="d-flex justify-content-between pt-3">
            
              <h6 className="text-l slice text-light">
                Let me Know Song <br className="mpp" /> Single{" "}
                <p className="sheng">Sheng Belmonte</p>
              </h6>
             
            <div>
            <img className="img-fluid stamp-2" src={stamp2} alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <p className="sheng">Category</p>

            <p className="sheng">Type</p>
          </div>
          <div className="d-flex justify-content-between">
            <h5 className="text-light">Music</h5>
            <h5 className="text-light">Song</h5>
          </div>
        </div>
      </div>
    </>
  );
}
export default CardImage;
