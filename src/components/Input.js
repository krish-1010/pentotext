import Card from "./Card";
// import imgSvg from "./../images/pngSvg.png";

export default function Header() {
  return (
    <div className="Input-Container">
      <div className="Flex-1">
        <span className="heading">
            <p>Online OCR Converter</p>
          </span>
        <div className="Input-box">
          <div className="first-box">
          <img src='https://pdf.online/img/icons/png-ocr-color.svg' 
               alt="svg"
               width='50px'
               height='50px'
               className="inline"/>
          <span className="h22">Online OCR Converter</span>
          </div>
          <span>Quick and easy way to extract text from PDF and image</span>
          <button>Select File</button>
          <span>
            <p>or drop files here</p>
          </span>
        </div>
      </div>
      <div className="Flex-2">
        <div className="Flex-2-1">
        <Card
        heading="Private Processing"
        line="Your data isn't stored with us"
        svg={
          "https://pdf.online/img/helper-side/private.svg"
        }
        width={"100px"}
        height={"100px"}
      ></Card>
      <Card
        heading="Quick and simple"
        line="No registration. Convert your file within seconds."
        svg={
          "https://pdf.online/img/helper-side/fast.svg"
        }
        width={"100px"}
        height={"100px"}
      ></Card>
      <Card
        heading="Platform Friendly"
        line="Our service works on Windows and Android"
        svg={
          "https://pdf.online/img/helper-side/share.svg "
        }
      ></Card>
        </div>
      </div>
    </div>
  );
}
