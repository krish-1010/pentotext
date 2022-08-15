export default function Header(props) {
    return (
      <div className="header">
          <p>{props.heading}</p>
          <p>{props.line}</p>
          <img src={props.svg} alt="svg" />
      </div>
    );
  }