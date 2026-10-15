import "./index.css";

function Footer(props) {
  return (
    <footer className="footer">
      <p>
        System maintained by {props.author} • Telemetry polling interval:{" "}
        {props.refreshInterval}s
      </p>
    </footer>
  );
}

export default Footer;
