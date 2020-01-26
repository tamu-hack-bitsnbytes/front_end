import React, {useState} from "react"

const FlightForm = (props) => {
    const [items, setItems] = useState({
        item_name: '',
        item_weight: '',
        quantity: ''
    })

    const handleChange = e => {
        setItems({ ...items, [e.target.name]: e.target.value })
      }

      const totalWeight = () => {
        const multipliedItems = Math.round(`${items.item_weight}` * `${items.quantity}`)
        return multipliedItems;
    }
    
    const callConversion= totalWeight();

    return (
        <div>
            <h1>FlightForm</h1>
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
                <button>Submit Items</button>
            </form>
            <h5>Total Weight: {callConversion} lbs</h5>
        </div>
    )
}

export default FlightForm;