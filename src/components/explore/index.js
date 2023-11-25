import { useEffect, useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import { format } from "date-fns";
import addDays from "date-fns/addDays";
import { useLocation, useNavigate } from "react-router-dom";
import Failure from "../Failure";
import Header from "../Header";
import Sunrise from "../Sunrise";
import Footer from "../Footer";
import SearchContainer from "../SearchContainer";

import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Explore = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const cityName = location.pathname;
  const substringOfCityName = cityName.substring(1, cityName.length);
  // console.log("This is Location Data", location.state);
  const [isShowSunsetSunriseBtn, updateIsShowSunsetSunriseBtn] =
    useState(false);
  const [todaySunriseAndSunsetData, updateTodaySunriseAndSunsetData] =
    useState("");
  const [tomorrowSunriseAndSunsetData, updateTomorrowSunriseAndSunsetData] =
    useState("");
  const [APIStatus, updateAPIStatus] = useState(apiStatusConstants.initial);
  const [sunriseOrSunset, updateSunriseOrSunset] = useState(true);

  const currentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        navigate("/your-location", { state: { latitude, longitude } });
      },
      (error) => {
        navigate("/failure");
      }
    );
  };

  const getTodaySunriseAndSunset = async () => {
    if (location.state === null) {
      navigate("/failure", { replace: true });
    } else {
      const { latitude, longitude } = location.state;
      try {
        updateAPIStatus(apiStatusConstants.inProgress);
        const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}`;
        const option = {
          method: "GET",
        };
        const response = await fetch(url, option);
        const data = await response.json();
        updateTodaySunriseAndSunsetData(data);
        updateAPIStatus(apiStatusConstants.success);
        console.log("This is the API Data", data);
      } catch (error) {
        updateAPIStatus(apiStatusConstants.failure);
      }
    }
  };

  const getTomorrowSunriseAndSunset = async () => {
    const tomorrowDate = addDays(new Date(), 1);
    const formatDate = format(tomorrowDate, "yyyy-MM-dd");

    if (location.state === null) {
      navigate("/failure", { replace: true });
    } else {
      const { latitude, longitude } = location.state;
      try {
        updateAPIStatus(apiStatusConstants.inProgress);
        const url = `https://api.sunrisesunset.io/json?lat=${latitude}&lng=${longitude}&timezone=IST&date=${formatDate}`;
        // console.log(url);
        const option = {
          method: "GET",
        };
        const response = await fetch(url, option);
        const data = await response.json();
        updateTomorrowSunriseAndSunsetData(data);
        updateAPIStatus(apiStatusConstants.success);
        // console.log("This is the API Data", data);
      } catch (error) {
        updateAPIStatus(apiStatusConstants.failure);
      }
    }
  };

  useEffect(() => {
    getTodaySunriseAndSunset();
    getTomorrowSunriseAndSunset();
  }, [location]);

  const formateDate = (dateObj) => {
    const formate = format(dateObj, "eeee, LLLL d, u");
    return formate;
  };

  const loadingComponent = () => (
    <div className="loading-container">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
      />
    </div>
  );

  const getCitySunriseAndSunsetData = () => {
    const todayDate = formateDate(new Date());
    const getTomorrowDate = addDays(new Date(), 1);
    const tomorrowDate = formateDate(getTomorrowDate);
    return (
      <div className="explore-container">
        <div>
          <h3 className="sunrise-sunset-heading">
            What Time is Sunrise and Sunset in
            <span>{` ${substringOfCityName}?`}</span>
          </h3>
          <p className="sunrise-sunset-description">
            Here are today's sunrise and sunset times in
            <span>{` ${substringOfCityName}`}</span>
          </p>
          <div>
            <div className="sunrise-and-sunset-btn-container">
              {isShowSunsetSunriseBtn && (
                <button
                  type="button"
                  className="btn sunrise-btn "
                  onClick={() => {
                    updateSunriseOrSunset(true);
                    updateIsShowSunsetSunriseBtn(!isShowSunsetSunriseBtn);
                  }}
                >
                  Sunrise
                </button>
              )}
              {!isShowSunsetSunriseBtn && (
                <button
                  type="button"
                  className="btn sunset-btn"
                  onClick={() => {
                    updateSunriseOrSunset(false);
                    updateIsShowSunsetSunriseBtn(!isShowSunsetSunriseBtn);
                  }}
                >
                  Sunset
                </button>
              )}
            </div>

            <Sunrise
              sunriseData={todaySunriseAndSunsetData}
              date={todayDate}
              day="Today"
              city={substringOfCityName}
              sunriseOrSunset={sunriseOrSunset}
              futureOrPast="was at"
            />
            <Sunrise
              sunriseData={tomorrowSunriseAndSunsetData}
              date={tomorrowDate}
              day="Tomorrow"
              city={substringOfCityName}
              sunriseOrSunset={sunriseOrSunset}
              futureOrPast="will be at"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderContentToWebpage = () => {
    switch (APIStatus) {
      case apiStatusConstants.inProgress:
        return loadingComponent();
      case apiStatusConstants.success:
        return getCitySunriseAndSunsetData();
      case apiStatusConstants.failure:
        return <Failure />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header currentLocation={currentLocation} />
      <SearchContainer currentLocation={currentLocation} />
      {renderContentToWebpage()}
      <Footer />
    </div>
  );
};

export default Explore;
