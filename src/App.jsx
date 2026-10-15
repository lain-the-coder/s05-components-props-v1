import "./index.css";
import Header from "./Header";
import MetricCard from "./MetricCard";
import ServiceTile from "./ServiceTile";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="dashboard">
      <Header environment="Production" region="me-central-1" />
      <div className="metrics-panel">
        <MetricCard label="CPU Usage" value={42} unit="%" />
        <MetricCard label="Active DB Pool" value={18} unit="conns" />
        <MetricCard label="P99 Latency" value={124} unit="ms" />
      </div>
      <div className="services-list">
        <ServiceTile
          name="Auth Service"
          endpoint="/api/v1/auth"
          version="2.4.1"
          isProduction={true}
          errorRate={0.01}
        />
        <ServiceTile
          name="Billing Engine"
          endpoint="/api/v1/billing"
          version="1.9.0"
          isProduction={true}
          errorRate={0.08}
        />
        <ServiceTile
          name="Notification Worker"
          endpoint="/api/v1/notify"
          version="3.0.0-rc1"
          isProduction={false}
          errorRate={0.0}
        />
      </div>
      <Footer author="Ehab" refreshInterval={30} />
    </div>
  );
}
