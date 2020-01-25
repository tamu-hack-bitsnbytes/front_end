import React, { useState, useEffect } from "react";
import axios from "axios"

import FlightCard from "./FlightCard"

const GetFlights = () => {

    const [data, setData] = useState(null)

    // useEffect(()=>{
    //     axios
            // .get('api endpoint here')
            // .then( res => {
                // console.log("data structure", res);
                // setData(newData);
            // })
            // .catch(err => {
            //     console.error("error fetching data", err);
            // })
    // },[])

    if (data === null) {
        return (
            <h1>Loading...</h1>
        );
    }
    return (
        <div>
            <h3>GetFlights</h3>
            <FlightCard/>
        </div>
    )
}

export default GetFlights;