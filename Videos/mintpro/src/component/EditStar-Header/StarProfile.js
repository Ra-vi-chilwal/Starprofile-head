import React from "react";
import "./EditStarHeader.scss";
import WatchTutorial from "./WatchTutorial";
import Navhead from "../Navbar/Navhead";
import Instruction from "./Instruction";
function StarProfile(){
    return(
<>
<Navhead />
    <WatchTutorial />
    <Instruction />
</>
    )
}
export default StarProfile;