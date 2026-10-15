import "./index.css";

function MetricCard(props) {
  return (
    <div className="metric-card">
      <div className="metric-title">{props.label}</div>
      <div className="metric-value">
        {props.value} {props.unit}
      </div>
    </div>
  );
}

export default MetricCard;
