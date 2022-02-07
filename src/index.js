import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import "../src/assests/styles/Home/business.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./pages/Home"
import ContactPage from './pages/Contact';
import ProductPage from './pages/product';
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
      <Route exact path="/products" >
        <ProductPage />
      </Route>
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);

reportWebVitals();
