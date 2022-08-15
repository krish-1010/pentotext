import Card from "./Card";

export default function Header() {
  return (
    <div className="Input-Container">
      <div className="Flex-1">
        <div className="Input-box">
          <span className="heading">
            <p>Online OCR Converter</p>
          </span>
          <button>Select File</button>
          <span>
            <p>or drop files here</p>
          </span>
        </div>
      </div>
      <div className="Flex-2"></div>
      <Card
        heading="private processing"
        line="Your data isn't stored with us"
        svg={
          "https://pdf.online/img/helper-side/private.svg"
        }
      ></Card>
      <Card
        heading="Quick and simple"
        line="No registration. 
        Convert your file within seconds."
        svg={
          "https://pdf.online/img/helper-side/fast.svg"
        }
      ></Card>
      <Card
        heading="Quick and simple"
        line="No registration. 
        Convert your file within seconds."
        svg={
          "https://pdf.online/img/helper-side/share.svg "
        }
      ></Card>
    </div>
  );
}
