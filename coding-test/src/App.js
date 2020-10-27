import React from "react";
import Navbar from "./components/Common/Navbar/Navbar";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/PageComponent";
import RecentlyReviewed from "./components/RecentlyReviewed/PageComponent";
import OrderStatus from "./pages/Order Status/containers/OrderStatus";
import SavedItems from "./components/SavedItems/PageComponent";
import HomeContainer from "./pages/Home/containers/HomeContainer";
// import store from './store'

import configureStore from "./configureStore";
import history from "./utils/history";

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

var cors = require("cors");

// const express = require("express")
//   app = express();

// app.use(cors());

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        {/* <HomeContainer /> */}
        <Switch>
          <Route path="/" exact component={HomeContainer} />
          <Route path="/recently-reviewed" component={RecentlyReviewed} />
          <Route path="/order-status" component={OrderStatus} />
          <Route path="/saved-items" component={SavedItems} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
