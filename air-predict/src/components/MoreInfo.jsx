import React,{useState} from "react";

import {ItemData1} from "../utils/ItemData"

import styled from 'styled-components'

const MoreInfo = (props) => {

    console.log('moreInfo', props)

    const id = props.match.params.id;
    
    const [info] = useState({
        id: id
    })
    const [data]=useState(ItemData1)

  
    return (
        <Card>
            <h2>Coming from Flight: {info.id}</h2>
            {data.map(e => {
                return (
                    <Border>
                      <p>Item Name: {e.name}</p>
                      <p>Number of Units: {e.units}</p>
                      <p>Weight:{e.weight}</p>
                    </Border>
                )
            })}
        </Card>
    )
}

export default MoreInfo;

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

const Border = styled.div`
 border: 1px solid black;
 margin: 1%;
 padding: 1%;
`