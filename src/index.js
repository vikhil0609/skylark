import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "../src/assests/styles/Home/business.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Home"
import NavBar from "./components/Navbar";
import ContactPage from './pages/Contact';
import Global from "./components/Home/global"
import Carousell from "./components/Home/carousel"
import AboutUs from './pages/AboutUs'
ReactDOM.render(
    <div>
    <BrowserRouter>
      <Switch>
      <Route exact path="/" >
        <HomePage />
      </Route>
        <Route exact path="/contact">
          <ContactPage />
        </Route>
      <Route exact path="/about" >
        <AboutUs />
      </Route>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
