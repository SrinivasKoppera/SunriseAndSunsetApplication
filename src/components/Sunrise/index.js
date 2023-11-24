// import { RotatingTriangles } from "react-loader-spinner";
import sunriseImage from "../../Images/sunrise-5.svg";
import sunsetImage from "../../Images/sunset-5.svg";
import Failure from "../Failure";
import "./index.css";

const Sunrise = (props) => {
  const day = props.day;
  const { sunriseData, date, city, sunriseOrSunset, futureOrPast } = props;
  const { results } = sunriseData;
  const sunriseOrSunsetImage = sunriseOrSunset ? sunriseImage : sunsetImage;
  if (results === undefined) {
    return <Failure />;
  }

  const renderSunriseData = () => {
    const { sunrise, dawn, solar_noon, day_length, timezone } = results;
    return (
      <div className="sunrise-container">
        <div className="sunrise-content-container sunrise-background">
          <p className="timezone">TimeZone: {timezone}</p>
          <h5 className="day-heading">{day}</h5>
          <p className="date">{date}</p>
          <h5 className="day-type-heading">Sunrise</h5>
          <img
            src={sunriseOrSunsetImage}
            alt="sunImage"
            className="sun-image"
          />
          <p className="day-type-time">{sunrise}</p>
          <p className="first-day-type-time">dawn: {dawn}</p>
          <p className="day-type-description">
            Sunrise {day} in <span>{city}</span> {futureOrPast} {sunrise} IST
          </p>
          <div className="day-length-solar-container">
            <p className="day-length">Day length: {day_length}</p>
            <p className="solar-noon">Solar Noon: {solar_noon}</p>
          </div>
        </div>
      </div>
    );
  };

  const renderSunsetData = () => {
    const { sunset, dusk, solar_noon, day_length, timezone } = results;
    return (
      <div className="sunrise-container">
        <div className="sunrise-content-container sunset-background">
          <p className="timezone">TimeZone: {timezone}</p>
          <h5 className="day-heading">{day}</h5>
          <p className="date">{date}</p>
          <h5 className="day-type-heading">Sunset</h5>
          <img
            src={sunriseOrSunsetImage}
            alt="sunImage"
            className="sun-image"
          />
          <p className="day-type-time">{sunset}</p>
          <p className="first-day-type-time">dusk: {dusk}</p>
          <p className="day-type-description">
            Sunset {day} in <span>{city}</span> will be at {sunset} IST
          </p>
          <div className="day-length-solar-container">
            <p className="day-length">Day length: {day_length}</p>
            <p className="solar-noon">Solar Noon: {solar_noon}</p>
          </div>
        </div>
      </div>
    );
  };
  return sunriseOrSunset ? renderSunriseData() : renderSunsetData();
};

export default Sunrise;
