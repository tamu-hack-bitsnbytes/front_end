import React, { useState, useEffect } from "react";

import {TestData} from "../utils/TestData"

import FlightCard from "./FlightCard"

const GetFlights = () => {

    const [data] = useState(TestData)

    return (
        <div>
        {data.map(e =>(
            <FlightCard
            flight={e.flightNumber}
            origin={e.origin.city}
            destination={e.destination.city}

            />
        ))}
        </div>
    )
}

export default GetFlights;