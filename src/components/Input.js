import Card from "./Card";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Axios from "axios";
// import imgSvg from "./../images/pngSvg.png";

export default function Header() {
  const onDrop = useCallback((e) => {
    console.log(e); 
    const data = new FormData();
    data.append("Session", "string");
    data.append("srcImg", e[0]);

    const options = {
      method: "POST",
      url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
      headers: {
        "X-RapidAPI-Key": "a4cc8d1f58msh22c107700a1831cp14911ajsnf7a42e73205b",
        "X-RapidAPI-Host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
      },
      data: data,
    };

    Axios.request(options)
      .then(function (response) {
        console.log(response.data);
        const message = response.data.value;
        const errMessage = "Please upload a valid image file";
        if (message === undefined){
          console.log(errMessage);
        }
        else{
          console.log(message);
        }
        
        
      })
      .catch(function (error) {
        console.error(error);
      });

    console.log("yes callback");

    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
  });
  const onFileChange = (e) => {
    console.log(e);
    const data = new FormData();
    data.append("Session", "string");
    data.append("srcImg",e.target.files[0]);

    const options = {
      method: "POST",
      url: "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/",
      headers: {
        "X-RapidAPI-Key": "a1ff5939fdmsh6fd5caf34fdda29p1c3008jsn06840a170855",
        "X-RapidAPI-Host": "pen-to-print-handwriting-ocr.p.rapidapi.com",
      },
      data: data,
    };

    Axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        const message = response.data.value;
        const errMessage = "Please upload a valid image file";
        if (message === undefined){
          console.log(errMessage);
        }
        else{
          console.log(message);
        }
      })
      .catch(function (error) {
        console.error(error);
        console.log("file error");
      });
  };

  const SumbitFileData = () => {
    console.log("yes");
  };
  return (
    <div className="Input-Container">
      <div className="Flex-1">
        <span className="heading">
          <p>Online OCR Converter</p>
        </span>
        <div className="Input-box" {...getRootProps()}>
          <input
            {...getInputProps()}
            type="file"
            name="file_upload"
            onChange={onFileChange}
            accept="image/*"
          />
          <div className="disp">
            <div className="first-box">
              <img
                src="https://pdf.online/img/icons/png-ocr-color.svg"
                alt="svg"
                width="50px"
                height="50px"
                className="inline"
              />
              <span className="h22">Online OCR Converter</span>
            </div>

            <div className="applyCenter">
              Quick and easy way to extract text from image
              
            </div>

            <div className="applyCenter">
              <button className="btn" type="button" onClick={open}>
                Select File
              </button>
            </div>
            <div className="applyCenter">
              <p>or drop files here</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Flex-2">
        <div className="Flex-2-1">
          <Card
            heading="Private Processing"
            line="Your data isn't stored with us"
            svg={"https://pdf.online/img/helper-side/private.svg"}
            width={"100px"}
            height={"100px"}
          ></Card>
          <Card
            heading="Quick and simple"
            line="No registration. Convert your file within seconds."
            svg={"https://pdf.online/img/helper-side/fast.svg"}
            width={"100px"}
            height={"100px"}
          ></Card>
          <Card
            heading="Platform Friendly"
            line="Our service works on Windows and Android"
            svg={"https://pdf.online/img/helper-side/share.svg "}
          ></Card>
        </div>
      </div>
    </div>
  );
}
