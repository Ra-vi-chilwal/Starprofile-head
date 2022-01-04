import React from "react";
import backIcon from "../images/backIcon.svg";
import "./Leftside.scss";
import Dropzone from "./Dropzone";
function Leftside(){
    return(
        <>

<div className="main-left">

   <div className="d-flex">
   <img className="" src={backIcon}/>
       <h3 className="text-light mint-h3"> Edit Star Profile-Header</h3>
   </div>
       <p className="mint-p5">Edit the header section of your profile page</p>

       <div className="card mint-card-1">
       <div className="d-flex">
       <p>Short Instruction<span>*</span></p>
       <p>(280 character limit)</p>
       </div>
           <div className="card">
               <Dropzone />
           </div>
       </div>
</div>
        </>
    )
}
export default Leftside;