import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from "./components/Navbar.js";
import Home  from "./components/Home/Home.js";
import Business from "./components/Home/Business"
import Contact from "./components/Home/contact.js"
import "../src/assests/styles/Home/business.css"

ReactDOM.render(
    <div>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" >
        <div>
        <div className="home">
        <NavBar color={"white"} isimage={false} />
        <Home />
        </div>
        <Business />
        </div>
        </Route>
        <Route exact path="/contact">
        <NavBar color={"green"} isimage={true} />
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
