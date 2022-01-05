import React from "react";

function WatchTutorial(){
    return (
      
        <div className="container-wrap pt-xl-5 pt-md-3 pt-3 Mint-sec1">
<div className="d-flex flex-wrap justify-content-between Mint-sec2">
    <div className="d-flex ml-4">
    <div className="btn-col-3 rounded-pill ">
            <span className="btn-mint1" aria-current="page">
              Watch Tutorial 
            </span>
           <span className="play-span"><i className="fas fa-play ply-2"></i></span> 
          </div>
   <a className="a-link-mint min1" href="_blank">Return to main</a>
    </div>
    <div className="d-flex ">
    <a className="a-link-mint min2" href="_blank">Preview Page</a>
    <button type="button" className="btn btn-primary btn-mint-2 ">Save And Continue</button>
    </div>
</div>
        </div>
    )
}
export default WatchTutorial;