import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import Group2 from "../../images/Group(2).png";
function Imageupload() {

 
  const [files, setFiles] = useState([]);

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
       
       <div className="d-flex">
      <div>
      <img src={file.preview} style={{ width: "200px" }} />
        </div> 
        
        
      
    
       <div className="progress-bar w-25 progress-w" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">

        </div>
        <div className="delete-img" >
      <img  src={Group2} alt=""/>
        </div>
        
      </div>
      <div>
        <p className="upload-img">uplaod component</p></div>
    </div>
  ));

  return (
    <>
      <div className="App">
        <div className="pt-5">
          <p className=" d-flex inft-title">
            Header Image <span className="star-imp">*</span>
          </p>
     
          <div className="d-flex mt-3">
          
            <button htmlFor="filePicker" className="mint-7" >
              uplaod
            </button>
            <p className="use6">* Use 5x3 ratio to avoid cropping </p>
          </div>
      
        </div>
        
        <input
          id="filePicker"
          className="immp"
          type={"file"}
          {...getInputProps()}
         
        />
      </div>
     <div>{images}</div>

      {/* 
      
       <button type="button" className="btn btn-primary mint-7"></button>
       
       */}
    </>
  );
}
export default Imageupload;