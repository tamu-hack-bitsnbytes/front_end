// import React from "react"
// import "rbx/index.css"
// import {
//     Card, List, Container
// } from "rbx"
// export default (props) => {

//     console.log('should see flight info here',props);

//     return (
//         <Container>
//             <Card>
//                 <Card.Header>
//                     <Card.Header.Title>Flight: AA-01</Card.Header.Title>
//                 </Card.Header>
//                 <Card.Body>
//                     <List>
//                         <List.Item>T Shirts x 500</List.Item>
//                         <List.Item>Corn Meal x 100Lbs</List.Item>
//                     </List>
//                 </Card.Body>
//                 <Card.Footer>Arrival : 2020-02-01 12:38:00</Card.Footer>
//             </Card>
//         </Container>
//     )
// }

import React from "react";

// import MoreInfo from ""

const RecepientInfo = (props) => {
    const id = props.flight


   const NextCard = () => {
       props.history.push(`/recepientflight/${id}`)
   }
    return (
        <div>
            <h3>flight: {props.flight}</h3>
            <p>Destination: {props.arrival}</p>
            <p>Origin:{props.from}</p>
            <button onClick={NextCard}>More Info</button>
        </div>
    )
}

export default RecepientInfo;

// const FlightCard = (props) => {
//     console.log('please render', props)

//     const number = props.flight

//    const NextCard = () => {
//        props.history.push(`/flight/${number}`)
//    }
//     return (
//         <Card>
            
//             <h5>Flight Number: {props.flight}</h5>
//             <h5>Origin City: {props.origin}</h5>
//             <h5>Destination City: {props.destination}</h5>
//             <h5>Departure Time: {props.departure}</h5>
//             <Button onClick={NextCard}>Add Shipment Information</Button>

//         </Card>
//     )
// }

