import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Group2 from "../../images/Group(2).png";
function UploadImg() {
  const [files, setFiles] = useState([]);
const [show ,setShow] = useState(true);
const [del ,setdel] = useState(true);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  
    const images = files.map((file) => (
     <div key={file.name}>
       
       <div className="d-flex" onClick={()=>setdel(false)}>
      <div>
      { del? <img src={file.preview} style={{ width: "200px" }} />:null}
        </div> 
        
        
      
    
       <div className="progress-bar w-25 progress-w" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

        </div>
        <div className="delete-img" >
      <img onClick={()=>setShow(true)} src={Group2} alt=""/>
        </div>
        
      </div>
      <div>
        <p className="upload-img">uplaod component</p></div>
    </div>
  ));

  return (
    <>
      <div className="App">
        <div className="pt-1">
          <p className="mint-p2">
            Header Image <span className="star-col">*</span>
          </p>
          {show?
          <div className="d-flex mt-3">
          
            <label htmlFor="filePicker" className="mint-7">
              uplaod
            </label>
            <p className="use6">* Use 6:7 ratioto avoid cropping</p>
          </div>:null}
        </div>
        
        <input
          id="filePicker"
          style={{ visibility: "hidden" }}
          type={"file"}
          {...getInputProps()}
          onClick={()=>setShow(false)}
        />
      </div>
     <div >{images}</div>

      {/* 
      
       <button type="button" className="btn btn-primary mint-7"></button>
       
       */}
    </>
  );
}
export default UploadImg;
