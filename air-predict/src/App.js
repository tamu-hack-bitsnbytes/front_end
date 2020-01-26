import React from 'react';
import { Route, Switch } from "react-router-dom";

import FlightSearch from "./components/FlightSearch"
import GetFlights from "./components/GetFlights"
import RecepientForm from './components/RecepientForm';
// import RecepientInfo from './components/RecepientInfo';

import MoreInfo from "./components/MoreInfo"
import FlightForm from "./components/FlightForm"

import styled from 'styled-components'


function App() {
  return (
    <Main>
      <Switch>
      <Route path = "/flightsearch" component={FlightSearch} />
      <Route path = "/flightresults" component={GetFlights} />
      <Route path = "/flight/:number" component={FlightForm} />
      <Route path = "/incomingflights" component={RecepientForm} />
      <Route path = "/recepientflight/:id" component={MoreInfo} /> 
      <Route path = "/flightresultsnow" component={FlightForm} />
      </Switch>
    </Main>
  );
}

export default App;

const Main = styled.div`
font-family: 'Noto Sans', sans-serif;

`


