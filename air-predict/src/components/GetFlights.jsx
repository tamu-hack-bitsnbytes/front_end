import React, { useState, useEffect } from "react";

import {TestData} from "../utils/TestData"

import FlightCard from "./FlightCard"

import styled from 'styled-components'

const GetFlights = (props) => {

    const [data] = useState(TestData)

    return (
        <Box>
        {data.map(e =>(
            <FlightCard
            flight={e.flightNumber}
            origin={e.origin.city}
            destination={e.destination.city}
            departure={e.departureTime}
            {...props}

            />
        ))}
        </Box>
    )
}

export default GetFlights;

const Box = styled.div`
border: 1px solid black;
background-color: #4169E1;

`