import "./index.css";

function ServiceTile(props) {
  return (
    <div className="service-card">
      <div className="service-info">
        <h3>
          {props.name} (v{props.version})
        </h3>
        <p>
          {props.endpoint} • Status:
          {props.errorRate > 0.05 ? "DEGRADED" : "HEALTHY"} (Error rate:{" "}
          {props.errorRate})
        </p>
      </div>
      <span
        className={
          props.isProduction ? "badge badge-prod" : "badge badge-staging"
        }
      >
        {props.isProduction ? "PROD" : "STAGING"}
      </span>
    </div>
  );
}

export default ServiceTile;
