import React from "react";

import styled from 'styled-components'

const FlightCard = (props) => {
    console.log('please render', props)

    const number = props.flight

   const NextCard = () => {
       props.history.push(`/flight/${number}`)
   }
    return (
        <Card>
            
            <h5>Flight Number: {props.flight}</h5>
            <h5>Origin City: {props.origin}</h5>
            <h5>Destination City: {props.destination}</h5>
            <h5>Departure Time: {props.departure}</h5>
            <Button onClick={NextCard}>Add Shipment Information</Button>

        </Card>
    )
}


export default FlightCard;


const Card = styled.div`
border:1px solid black;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 5%;
padding: 1%;
box-shadow: 8px 5px 5px black;
background-color: #fff;
`

const Button = styled.button`
padding: 0.5%;
background-color: #4169E1;
color: #fff;

`