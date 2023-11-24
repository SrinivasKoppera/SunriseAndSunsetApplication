import Header from "../Header";
import { Link } from "react-router-dom";
import noDataImage from "../../Images/no-data.webp";
import "./index.css";

const NoCitiesView = () => {
  return (
    <>
      <Header />
      <div className="no-data-container">
        <img src={noDataImage} alt="noFilesImage" className="no-data-image" />
        <p className="no-data-description">No Cities Found</p>
        <Link to="/">
          <button type="button" className="go-to-upload-btn">
            Go to Search City
          </button>
        </Link>
      </div>
    </>
  );
};

export default NoCitiesView;
