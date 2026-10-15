import "./index.css";
import Header from "./Header";

export default function App() {
  return (
    <div className="dashboard">
      <Header environment="Production" region="me-central-1" />
    </div>
  );
}
