import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const SearchContainer = (props) => {
  const { currentLocation } = props;
  const navigate = useNavigate();
  const [city, updateCity] = useState("");

  const onChangeCityName = (event) => {
    updateCity(event.target.value);
  };

  const getLatitudeAndLongitudeOfCity = async () => {
    try {
      const geoLocationURL = `https://geocode.maps.co/search?q=${city}`;
      const response = await fetch(geoLocationURL);
      const data = await response.json();
      // console.log(data);
      if (data.length !== 0) {
        const latitude = data[0].lat;
        const longitude = data[0].lon;
        const lowerCaseLetter = city.toLocaleLowerCase();
        // console.log("This is from Home Geolocation", data);
        navigate(`/${lowerCaseLetter}`, { state: { latitude, longitude } });
      } else {
        navigate("/no-cities", { replace: true });
      }
    } catch (error) {
      navigate("failure", { replace: true });
      console.log("Get Geolocation: ", error);
    }
  };

  const searchCityByEnterKey = (event) => {
    if (event.key === "Enter") {
      getLatitudeAndLongitudeOfCity();
    }
  };

  return (
    <div className="home-bg-container">
      <div className="search-container">
        <h1 className="welcome-heading">Welcome to SunriseSunset</h1>
        <p className="welcome-description">
          The tool to find sunrise and sunset times in your city.
        </p>
        <input
          type="search"
          name="search"
          className="search-box"
          placeholder="Look up sunrise & sunset in your city"
          value={city}
          onChange={onChangeCityName}
          onKeyDown={searchCityByEnterKey}
        />
        <button
          type="button"
          className="search-btn"
          onClick={getLatitudeAndLongitudeOfCity}
        >
          Search
        </button>
        <br />
        <button
          type="button"
          className="find-my-location-btn"
          onClick={() => currentLocation()}
        >
          Find my location
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
