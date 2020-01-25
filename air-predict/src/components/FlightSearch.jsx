import React, {useState} from "react";

import styled from 'styled-components'

const FlightSearch = (props) => {
    console.log('props from app', props);

    const [search, setSearch] = useState({
        destination: '', 
        departure_location: '',
        departure_date: '',
        departure_time: ''
    })
    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value })
      }

    const SubmitForm = e => {
        e.preventDefault()
        props.history.push('/flightresults')
        // axios 
        // .post("endpoint goes here", search)
        //     .then(res => {
        //         console.log('response from post request', res.data)
        //         setSearch({...search})
        //         props.history.push('endpoint route goes here')

        //     })
        //     .catch(err => {
        //         console.error(err)
        //     })
    }
    
    return (
        <div>
            <h3>FlightSearch</h3>
            <form onSubmit={SubmitForm}>
                <div>
                    <input
                        type="text"
                        name="destination"
                        placeholder="enter destination"
                        value={search.destination}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="departure_location"
                        placeholder="Enter Departure Location"
                        value={search.departure_location}
                        onChange={handleChange}
                    />
                     <input
                        type="date"
                        name="departure_date"
                        placeholder="Enter departure Date"
                        value={search.departure_date}
                        onChange={handleChange}
                    />
                    <input
                        type="time"
                        name="departure_time"
                        placeholder="enter departure time"
                        value={search.departure_time}
                        onChange={handleChange}
                    />
                </div>
                <button>Search Flights</button>
            </form>
        </div>
    )
}

export default FlightSearch;



