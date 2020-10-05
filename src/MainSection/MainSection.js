import React from "react";
import Button from "@material-ui/core/Button";

import { Link } from "react-scroll";
import { Link as LinkTo } from "react-router-dom";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./MainSection.css";

function MainSection() {
  return (
    <div className="main_section">
      <div className="main_section__text">
        <img
          src="https://img.jakpost.net/c/2017/02/28/2017_02_28_22453_1488267265._large.jpg"
          alt=""
          srcset=""
        />
        <div className="hibachi">
          <h1>The</h1>&nbsp; &nbsp;
          <h1>Hibachi</h1>&nbsp; &nbsp;
          <h1 className="red_word"> Kitchen</h1>
        </div>
        <p>Your Source of Authentic Japanese Food</p>
        <div className="main_section__buttons">
          <LinkTo to="/menu" className="link_color">
            <Button
              className="main_section__orderNow"
              variant="outlined"
              color="primary"
            >
              Order Now
            </Button>
          </LinkTo>
          <Button
            className="main_section__reservations"
            variant="outlined"
            color="primary"
          >
            Reservations
          </Button>
        </div>
        <div className="main_section__arrowDiv">
          <Link
            activeClass="active"
            to="findUsScroll"
            id="findUs"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={0}
            isDynamic={true}
          >
            <ExpandMoreIcon className="main_section__arrow" fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
