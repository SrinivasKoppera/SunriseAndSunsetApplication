import { useState } from "react";
import Header from "../Header";
import { useNavigate } from "react-router-dom";
import SearchContainer from "../SearchContainer";
import Footer from "../Footer";
import "./index.css";

const Home = () => {
  return (
    <div className="bg-container">
      <Header />
      <SearchContainer
      // onChangeCityName={onChangeCityName}
      // currentLocation={currentLocation}
      // searchCityByEnterKey={searchCityByEnterKey}
      // city={city}
      />
      <div className="content-bg-container">
        <div className="content-container">
          <h4 className="content-heading">
            Why would you need to know the sunrise and sunset times?
          </h4>
          <p className="description">
            Have you ever wondered why some people are obsessed with knowing the
            sunrise and sunset times? It might seem like an insignificant piece
            of information, but it can actually be quite useful.
          </p>
          <p className="description">
            Knowing the sunrise and sunset times can be useful for a variety of
            reasons. Here are just a few:
          </p>
          <div className="activities-photography-travel-farming-container">
            <div className="activities-photography-container">
              <div>
                <h4 className="content-heading">Planning Outdoor Activities</h4>
                <p className="description">
                  If you’re planning outdoor activities like hiking, camping, or
                  fishing, knowing the sunrise and sunset times can help you
                  plan your day better. You can start your activities earlier in
                  the day and avoid getting caught in the dark.
                </p>
              </div>
              <div>
                <h4 className="content-heading">Photography</h4>
                <p className="description">
                  For photographers, the time of day can make a big difference
                  in the quality of their photos. Knowing the sunrise and sunset
                  times can help photographers plan their shoots to take
                  advantage of the best lighting.
                </p>
              </div>
            </div>
            <div>
              <div>
                <h4 className="content-heading">Travel</h4>
                <p className="description">
                  When you’re traveling, knowing the sunrise and sunset times
                  can help you plan your itinerary. You can schedule your
                  activities around the best light of the day and capture the
                  best memories of your trip.
                </p>
              </div>
              <div>
                <h4 className="content-heading">Farming and Agriculture</h4>
                <p className="description">
                  For farmers and those involved in agriculture, knowing the
                  sunrise and sunset times can help them plan their workday.
                  They can schedule their planting, harvesting, and other
                  activities around the best times of the day.
                </p>
              </div>
            </div>
          </div>
          <p className="description last-description">
            Knowing the sunrise and sunset times might seem like a small thing,
            but it can actually make a big difference in your daily life.
            Whether you’re planning outdoor activities, taking photos,
            traveling, or working in agriculture, knowing this information can
            help you make the most of your day.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
