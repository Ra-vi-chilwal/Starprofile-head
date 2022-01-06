import React from "react";
import backIcon from "../../images/backIcon.svg";
import CardImage from "./CardImage";
import TitleInft from "./Titleinft";
import Group34 from "../../images/Group34.png";
function Title(){
    return(
        <>
        <div className="position-absolute">
            <img className="img-group34 img-fluid" src={Group34} />
          </div>
     <div className="Title-color">
<div className="container position-relative">

          
<div className="d-flex ">
    <img src={backIcon} alt=""/>
    
        <h3 className="text-light details">General Details</h3>
    
</div>
<div className="row pt-5">
    <div className="col-xl-8 col-12 mob-screen">
<TitleInft />
    </div>
    <div className="col-xl-4 col-12 mob-screen">
       <CardImage /> 
    </div>
</div>

</div>
</div>
        </>
    )
}
export default Title;