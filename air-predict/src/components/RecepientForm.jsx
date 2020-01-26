import React, {useState} from "react";

import RecepientInfo from "./RecepientInfo";
import styled from 'styled-components'

const RecepientForm = (props) => {
    console.log('checking for props history push', props);

    const flights = [
    { flight: 'AA-01', arrival: '2020-01-31 14:35', from: 'DFW' },
    { flight: 'AA-02', arrival: '2020-02-01 12:01', from: 'LAX' },
    { flight: 'AA-03', arrival: '2020-02-02 06:30', from: 'ORD' }
]

    const [flightInfo] = useState(flights);

    return (
        <div>
            <Title>Incoming Flights</Title>
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

const Title = styled.h2`
text-align:center;
`