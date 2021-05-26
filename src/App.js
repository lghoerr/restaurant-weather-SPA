import React, { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  Redirect,
  useHistory,
} from "react-router-dom";

import RestaurantFinder from "./components/restaurant/RestaurantFinder";
import Form from "./components/weather/Form";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoordsProvider from "./contexts/coordsContext";

function App() {
  return (
    <CoordsProvider>
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/restaurant" component={RestaurantFinder} />
            <Route path="/weather" component={Form} />
          </Switch>
        </main>
      </BrowserRouter>
    </CoordsProvider>
  );
}

export default App;
