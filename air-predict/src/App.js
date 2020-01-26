import React from 'react';
import { Route, Switch } from "react-router-dom";

import FlightSearch from "./components/FlightSearch"
import GetFlights from "./components/GetFlights"
import RecepientForm from './components/RecepientForm';


function App() {
  return (
    <div>
      <Switch>
      <Route path = "/flightsearch" component={FlightSearch} />
      <Route path = "/flightresults" component={GetFlights} />
      <Route path = "/incomingflights" component={RecepientForm} />
      </Switch>
    </div>
  );
}

export default App;

