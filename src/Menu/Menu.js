import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

import Header from "../Header/Header";

import "./Menu.css";

function Menu() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const menu = {
    appetizers: {
      sushi: [
        {
          type: "Tuna Roll",
          price: 7.99,
        },
        {
          type: "Salmon Roll",
          price: 5.99,
        },
      ],
      salads: [
        {
          type: "House Salad",
          price: 5.99,
        },
        {
          type: "Bonsai Salad",
          price: 10.99,
        },
      ],
    },
    "Lunch Specials": {
      "Poke Bowl": [
        {
          type: "Tuna Poke Bowl",
          price: 12.99,
        },
        {
          type: "Salmon Poke Bowl",
          price: 15,
        },
      ],
      "Chef Special": [
        {
          type: "Crab Roll",
          price: 15.99,
        },
        {
          type: "Steak and Lobster",
          price: 20.0,
        },
      ],
    },
    beverages: {
      beverages: [
        {
          type: "Coke",
          price: 2.99,
        },
        {
          type: "Water",
          price: 1.29,
        },
      ],
      wine: [
        {
          type: "BLUE NUN, DE",
          price: 20.0,
        },
        {
          type: "RUFFINO, IT",
          price: 30,
        },
      ],
    },
  };

  return (
    <div className="menu__container">
      <Header />
      <div className="menu__imageContainer">
        <img
          className="menu__image"
          // src="https://www.10wallpaper.com/wallpaper/3840x2400/1712/Delicious_Japanese_food_sushi_2017_4K_High_Quality_3840x2400.jpg"
          alt=""
          srcset=""
        />
      </div>
      <div className="our_menu">
        <h1 className="red_word">Our</h1>&nbsp;&nbsp;
        <h1>Menu</h1>
      </div>

      <div className="menu">
        <div className="menu__center">
          {Object.entries(menu).map(([key, value]) => (
            <List className="menu__item">
              <ListItem button onClick={handleClick}>
                <ListItemText primary={key} className="menu__menuSelection" />
                {open ? <IndeterminateCheckBoxIcon /> : <AddBoxIcon />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <div className="menu__items">
                  {Object.entries(value).map((key, value) => (
                    <div className="menu__food">
                      <h1>{key[0]}</h1>
                      <hr />
                      {key[1].map((item) => (
                        <div className="menu__itemAndPrice">
                          <p>{item.type}</p>
                          <p>&nbsp;${item.price}</p>
                        </div>
                      ))}
                    </div>
                  ))}

                  {Object.entries(value).map((key, value) => {
                    key[1].map((item) => (
                      <div className="menu__itemAndPrice">
                        <p>{item.type}</p>
                        <p>${item.price}</p>
                      </div>
                    ));
                  })}
                </div>
              </Collapse>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
