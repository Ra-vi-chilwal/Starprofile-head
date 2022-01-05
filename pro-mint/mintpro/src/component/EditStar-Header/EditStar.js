import React from "react";
import backIcon from "../../images/backIcon.svg";

import UploadImg from "./UploadImg";
import Group34 from "../../images/Group34.png";
function EditStar(){
    return(
        <>

<div className="position-absolute"><img className="img-group34" src={Group34}/></div>
<div className="main-left">
   <div className="d-flex">
   <img className="" src={backIcon}/>
       <h3 className="text-light mint-h3"> Edit Star Profile-Header</h3>
   </div>
       <p className="mint-p5">Edit the header section of your profile page</p>

       <div className="card mint-card-1 pt-3">
       <div className="d-flex pt-3">
       <p className="mint-p2">Short Instruction<span className="star-col">*</span></p>
       <p>(280 character limit)</p>
       </div>
           <div className="card zone p-2">
           <div class="form-group">
    
    <textarea class="form-control  visitors" id="exampleFormControlTextarea1" placeholder="Welcome to fans/Visitors here. " rows="8"></textarea>
  </div>
           </div>
               <UploadImg />
       </div>
      
</div>
        </>
    )
}
export default EditStar;