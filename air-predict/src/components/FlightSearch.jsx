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
        <Main>
            <h3>Search For Flights</h3>
            <FormContainer>
            <form onSubmit={SubmitForm}>
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
                <button>Search Flights</button>
            
            </form>
            </FormContainer>
        </Main>
    )
}

export default FlightSearch;


const Main = styled.div`
border: 1px solid black;
height: 99vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const FormContainer = styled.div`
border: 1px solid black;
padding: 1%;

`

