import React, {useState} from "react"

import styled from 'styled-components'

const FlightForm = () => {
    const [items, setItems] = useState({
        item_name: '',
        item_weight: '',
        quantity: ''
    })

    const [printed, setPrinted] = useState(false)

    const handleChange = e => {
        setItems({ ...items, [e.target.name]: e.target.value })
  
      }

      const totalWeight = () => {
        const multipliedItems = Math.round(`${items.item_weight}` * `${items.quantity}`)
        return multipliedItems;
    }
    
    const callConversion= totalWeight();

    const Printed = e => {
        e.preventDefault()
        setPrinted(true)
    }

    if (printed === false){

        return (
            <Container>
                <h2>Enter Your Shipment Details</h2>
                <form >
                        <input
                            type="text"
                            name="item_name"
                            placeholder="enter item name"
                            value={items.item_name}
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="item_weight"
                            placeholder="Enter weight in lbs"
                            value={items.item_weight}
                            onChange={handleChange}
                        />
                         <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity of Item"
                            value={items.quantity}
                            onChange={handleChange}
                        />
                    <button onClick={Printed}>Submit Items</button>
                </form>
                <h5>Total Weight: {callConversion} lbs</h5>
            </Container>
        )
    } else {
        return (
            <Main><h4>Thank you for submitting your form. </h4></Main>
        )
    }
    

    }

    
export default FlightForm;


const Main = styled.div`
height: 99vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const Container = styled.div`
border:1px solid black;
height: 99vh;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;

`