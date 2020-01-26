import React from 'react';
import { Route, Switch } from "react-router-dom";

import FlightSearch from "./components/FlightSearch"
import GetFlights from "./components/GetFlights"
import FlightForm from "./components/FlightForm"

import styled from 'styled-components'


function App() {
  return (
    <Main>
      <Switch>
      <Route path = "/flightsearch" component={FlightSearch} />
      <Route path = "/flightresults" component={GetFlights} />
      <Route path = "/flight/:number" component={FlightForm} />
      </Switch>
    </Main>
  );
}

export default App;

const Main = styled.div`
font-family: 'Noto Sans', sans-serif;

`


