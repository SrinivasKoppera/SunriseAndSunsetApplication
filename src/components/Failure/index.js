import { Link } from "react-router-dom";
import "./index.css";

const FailureView = () => (
  <div className="failure-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
      alt="failure view"
      className="failure-image"
    />
    <h1 className="failure-heading">Oops! Something Went Wrong</h1>
    <p className="failure-description">
      we cannot seem to find the page you are looking for
    </p>
    <Link to="/">
      <button
        type="button"
        data-testid="button"
        className="jobs-failure-button"
      >
        Retry
      </button>
    </Link>
  </div>
);

export default FailureView;
