import React from "react";
import {Dropdown} from "react-bootstrap";

import Imageupload from "./Imageupload";
function Titleinft(){
    return(
        <>
<div className="card car-box">
<div className="d-flex">
<p className="inft-title d-flex">iNFT Title <span className="star-imp">*</span></p>
<p>(40 characters)</p>
</div>
<div class="form-group">
    <input className="form-control area-cis" id="exampleFormControlTextarea1" placeholder="Let me know Single" rows="1"></input>
    </div>
<div className="d-flex flex-wrap justify-content-between dropdwn-tp">
   <div>

   
   <p className="inft-title d-flex">iNFT Category<span className="star-imp">*</span></p>
    <Dropdown>
  <Dropdown.Toggle  id="dropdown-basic" className="drop-cls">
    Music <i class='fas fa-angle-down ad'></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Music</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Creators</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Experts</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Sports</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Tech</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Arts</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Products</Dropdown.Item>
 
  </Dropdown.Menu>
</Dropdown>
</div> 
<div>
<p className="inft-title d-flex">iNFT Type<span className="star-imp">*</span></p>
    <Dropdown>
  <Dropdown.Toggle id="dropdown-basic" className="drop-cls">
    Song <i className='fas fa-angle-down ad'></i>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Digital art</Dropdown.Item>
    <Dropdown.Item href="#/action-2">photograpgy</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Music</Dropdown.Item>
    <Dropdown.Item href="#/action-1">Video</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Audio</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Likeness</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Publishing</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
</div>
<Imageupload />
<div className="text-l">
  <p className="this-g" >*This general information will be used to identify the iNFT
   in the marketplace and to automatically publish the iNFT card as seen on the right.</p>
</div>
<div className="d-flex pt-5"><button type="button" class="btn btn-save">Save and Continue</button></div>
</div>
        </>
    )
    }
export default Titleinft;