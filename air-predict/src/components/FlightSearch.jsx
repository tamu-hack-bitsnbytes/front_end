import React, {useState} from "react";

import styled from 'styled-components'
import axios from "axios"

// import GetFlights from "./GetFlights"

const FlightSearch = (props) => {
    console.log('props from app', props);

    const [search, setSearch] = useState({
        dest: '', 
        source: '',
        date: ''
    })
    
    const handleChange = e => {
        setSearch({ ...search, [e.target.name]: e.target.value })
      }
    console.log('after post', search)

    const SubmitForm = e => {
        e.preventDefault()
        axios 
        .post("http://10.237.213.78:8000/airline/get_flights/", search)
            .then(res => {
                const dataRes = res.data;
                console.log('response from post request', dataRes)
                setSearch({...search})
                sessionStorage.setItem('response', res.data)
                props.history.push('/flightresults')

            })
            .catch(err => {
                console.log('error from post',err)
            })
    }
    
    return (
        <Main>
            <h3>Search For Flights</h3>
            <FormContainer>
            <form onSubmit={SubmitForm}>
                    <Input
                        type="text"
                        name="dest"
                        placeholder="enter destination"
                        value={search.dest}
                        onChange={handleChange}
                    />
                    <Input
                        type="text"
                        name="source"
                        placeholder="Enter Departure Location"
                        value={search.source}
                        onChange={handleChange}
                    />
                     <Input
                        type="date"
                        name="date"
                        placeholder="Enter departure Date"
                        value={search.date}
                        onChange={handleChange}
                    />
                <button>Search Flights</button>
            
            </form>
            </FormContainer>
            {/* <GetFlights
            data={data}
            /> */}
        </Main>
    )
}

export default FlightSearch;


const Main = styled.div`
height: 99vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;



`

const FormContainer = styled.div`
padding: 2%;
background-color:#4169E1;
box-shadow: 8px 5px 5px black;

`

const Input = styled.input`

`