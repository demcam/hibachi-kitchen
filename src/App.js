import React from "react";
import "./App.css";

import Header from "./Header/Header";
import MainSection from "./MainSection/MainSection";
import FindUsSection from "./FindUs/FindUsSection";
import About from "./About/About";

import Menu from "./Menu/Menu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/">
            {/* Header */}
            <Header />
            <section>
              {/* Main Section */}
              <MainSection />
            </section>

            <section id="findUsScroll">
              <FindUsSection />
              {/* Find Us Section */}
            </section>

            <section id="aboutScroll">
              <About />
              {/* About Section */}
            </section>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
