export default function Card(props) {
    return (
      <div className="Cards">
          <p>{props.heading}</p>
          <div className="block Card-div">{props.line}</div>
          <img  src={props.svg} width={props.width} alt="svg" />
      </div>
    );
  }