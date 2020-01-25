import React from 'react';
import { Route, Switch } from "react-router-dom";

import FlightSearch from "./components/FlightSearch"


function App() {
  return (
    <div>
      <Switch>
      <Route path = "/flightsearch" component={FlightSearch} />
      </Switch>
    </div>
  );
}

export default App;
