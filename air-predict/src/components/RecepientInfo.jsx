import React from "react";

import styled from 'styled-components'

const RecepientInfo = (props) => {
    const id = props.flight


   const NextCard = () => {
       props.history.push(`/recepientflight/${id}`)
   }
    return (
        <div>
        <Card>
            <h3>flight: {props.flight}</h3>
            <p>Destination: {props.arrival}</p>
            <p>Origin:{props.from}</p>
            <Button onClick={NextCard}>More Info</Button>
        </Card>
        </div>
    )
}

export default RecepientInfo;

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