import React, {useState} from "react";
import styled from 'styled-components'
import axios from "axios"
import GetFlights from "./GetFlights"
const FlightSearch = (props) => {
    console.log('props from app', props);
    const [search, setSearch] = useState({
        dest: '', 
        source: '',
        date: ''
    })
    const [data, setData] = useState({})
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
                setData(dataRes)
                props.history.push('/flightresults')
            })
            .catch(err => {
                console.log('error from post',err)
            })
    }
    console.log('porfavore', data)
    return (
        <Main>
            <h3>Search For Flights</h3>
            <FormContainer>
            <form onSubmit={SubmitForm}>
                    <input
                        type="text"
                        name="dest"
                        placeholder="enter destination"
                        value={search.dest}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="source"
                        placeholder="Enter Departure Location"
                        value={search.source}
                        onChange={handleChange}
                    />
                     <input
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