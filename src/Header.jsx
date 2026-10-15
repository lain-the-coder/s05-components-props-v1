import "./index.css";

function Header(props) {
  let timestamp = new Date().toUTCString();
  return (
    <header className="header">
      <h1>Infrastructure Control Plane</h1>
      <p>
        Environment: <strong>{props.environment}</strong> | Region:{" "}
        <strong>{props.region}</strong> | Evaluated at: {timestamp}
      </p>
    </header>
  );
}

export default Header;
