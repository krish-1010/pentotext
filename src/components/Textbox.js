import { useState } from "react";

export default function Textbox({ message }) {

    const [copy, setCopy] = useState("Copy");
    // const [loading, setLoading] = useState(true);

    function copyText(){
        navigator.clipboard.writeText(message)
        setCopy("Copied")
    }
  

  return (
    <div className="Input-box">
      <div className="disp">
        <button onClick={copyText} className="copy">
          {copy}
        </button>
        <div className="first-box" id="text">
          {message}
        </div>
        <button onClick={() => window.location.reload()} className="refresh">
          Convert another Image
        </button>
      </div>
    </div>
  );
}
