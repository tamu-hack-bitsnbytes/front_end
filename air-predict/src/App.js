import React from 'react';
import { Route, Switch } from "react-router-dom";

import FlightSearch from "./components/FlightSearch"
import GetFlights from "./components/GetFlights"
import FlightForm from "./components/FlightForm"


function App() {
  return (
    <div>
      <Switch>
      <Route path = "/flightsearch" component={FlightSearch} />
      <Route path = "/flightresults" component={GetFlights} />
      <Route path = "/flightresultsnow" component={FlightForm} />
      </Switch>
    </div>
  );
}

export default App;

