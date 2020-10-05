import React from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import Map from "../Map";

import "./FindUsSection.css";

function FindUsSection() {
  AOS.init({ duration: 500, offset: 200 });

  return (
    <div className="findUs" data-aos="fade-up">
      <div className="findUs__info">
        <h1>Restaurants</h1>
      </div>
      <div className="findUs__map">
        <Map />
      </div>
      <div className="findUs__locate">
        <div className="findUs__myLocation">
          <p>My Location:</p>

          <SearchIcon className="findUs__searchIcon" />
          <input
            className="myLocation__search"
            type="search"
            name="search"
            id="search"
            placeholder="Enter a state, city, etc..."
          />
        </div>
        <div className="findUs__nearestHibachi">
          <p>Nearest Restaurant:</p>
          <input
            className="myLocation__search"
            type="search"
            name="search"
            id="search"
            disabled="true"
            placeholder="Nearest Restaurant"
          />
        </div>
      </div>
    </div>
  );
}

export default FindUsSection;
