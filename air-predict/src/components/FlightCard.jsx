import React from "react";

const FlightCard = (props) => {
    return (
        <div>
            <h3>Flight Number: {props.flight}</h3>
            <h3>Origin City: {props.origin}</h3>
            <h3>Destination City: {props.destination}</h3>

        </div>
    )
}


export default FlightCard;
