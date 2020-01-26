// import React from "react"
// import "rbx/index.css"
// import axios from 'axios';
// import RecepientInfo from "./RecepientInfo"
// import { Control, Field, Label, Input, Select, Button, Column, Box, Title, Container, Card } from "rbx"
// const flights = [
//     { flight: 'AA-01', arrival: '2020-01-31 14:35', from: 'DFW' },
//     { flight: 'AA-02', arrival: '2020-02-01 12:01', from: 'LAX' },
//     { flight: 'AA-03', arrival: '2020-02-02 06:30', from: 'ORD' }
// ]
// class RecepientForm extends React.Component {
//     constructor(props) {
//         super(props);

//         // This binding is necessary to make `this` work in the callback
//         this.state = {projects: [], searchParam : ''};
//         this.RecepientInfoClicked = this.RecepientInfoClicked.bind(this);
//         }

//         RecepientInfoClicked(){
//         localStorage.setItem("pageData", "Data Retrieved from axios request")
//         // route to new page by changing window.location
//         window.open("/recepient_flight/id", "_blank") //to open new page
//        }
    
// render() {
//     return (
//         <Container>
//             <Column.Group>
//                 <Column size="4">
//                     <Title>Flights</Title>
//                         {flights.map(flight => {
//                             return (
//                                 <Card>
//                                     <Card.Header>
//                                         <Card.Header.Title>Flight: {flight.flight}</Card.Header.Title>
//                                     </Card.Header>
//                                     <Card.Content>
//                                         Source: {flight.from}
//                                         Arrival Time: {flight.arrival}  
//                                     </Card.Content>
//                                     <Card.Footer>
//                                         <Button color="info" size="small" onClick={this.RecepientInfoClicked}>Select</Button>
//                                     </Card.Footer>
//                                 </Card>
//                             )
//                         })}
//                 </Column>
//             </Column.Group>
//         </Container>
//     )
// }
// }
// export default RecepientForm;

import React, {useState} from "react";

import RecepientInfo from "./RecepientInfo";

const RecepientForm = (props) => {
    console.log('checking for props history push', props);

    const flights = [
    { flight: 'AA-01', arrival: '2020-01-31 14:35', from: 'DFW' },
    { flight: 'AA-02', arrival: '2020-02-01 12:01', from: 'LAX' },
    { flight: 'AA-03', arrival: '2020-02-02 06:30', from: 'ORD' }
]

    const [flightInfo] = useState(flights);



    // const NextCard = () => {
    //     props.history.push(`/recepientflight/${flightInfo}`)
    // }

    return (
        <div>
           {flightInfo.map(e =>{
               return (
                   <div>
                       <RecepientInfo
                       flight={e.flight}
                       arrival={e.arrival}
                       from={e.from}
                       {...props}
                       />
                   </div>
               )
           })}
  
        </div>
    )
}

export default RecepientForm;