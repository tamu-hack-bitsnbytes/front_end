import React,{useState} from "react";

import {ItemData1} from "../utils/ItemData"

const MoreInfo = (props) => {

    console.log('moreInfo', props)

    const id = props.match.params.id;
    
    const [info] = useState({
        id: id
    })
    const [data]=useState(ItemData1)

  
    return (
        <div>
            <h2>Coming from Flight Number: {info.id}</h2>
            {data.map(e => {
                return (
                    <div>
                      <p>Item Name: {e.name}</p>
                      <p>Number of Units:{e.units}</p>
                      <p>Weight:{e.weight}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default MoreInfo;