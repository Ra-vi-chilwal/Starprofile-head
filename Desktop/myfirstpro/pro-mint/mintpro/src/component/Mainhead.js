import React from "react";
import "./Main.scss";
function Mainhead(){
    return (
        <div className="container-wrap pt-xl-5 pt-md-3 pt-3 Mint-sec1">
<div className="d-flex justify-content-between Mint-sec2">
    <div className="d-flex ml-4">
    <button className="btn-col-3 rounded-pill">
            <span className="btn-mint1" aria-current="page">
              Watch Tutorial <i className="fas fa-play ply-2"></i>
            </span>
          </button>
   <a className="a-link-mint" href="_blank">Return to main</a>
    </div>
    <div className="d-flex ">
    <a className="a-link-mint" href="_blank">Preview Page</a>
    <button type="button" className="btn btn-primary btn-mint-2 ">Save And Continue</button>
    </div>
</div>
        </div>
    )
}
export default Mainhead;