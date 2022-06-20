import { Link } from "react-router-dom";

// styles
import "./index.css";

const HomePage = () => {
  return (
    <div className="page">
      <Link to="/about">about</Link>
      <div>HomePage, It'fast...</div>
    </div>
  );
};

export default HomePage;
