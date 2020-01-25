import React from "react";

const FlightSearch = () => {
    return (
        <div>
            <h3>FlightSearch</h3>
            <form>
                <div>
                    <input
                        type="text"
                        name="destination"
                        placeholder="enter destination"
                        // value=
                        // onChange=
                    />
                    <input
                        type="text"
                        name="departure_location"
                        placeholder="Enter Departure Location"
                        // value=
                        // onChange=
                    />
                     <input
                        type="date"
                        name="departure_date"
                        placeholder="Enter departure Date"
                        // value=
                        // onChange=
                    />
                    <input
                        type="time"
                        name="departure_time"
                        placeholder="enter departure time"
                        // value=
                        // onChange=
                    />
                </div>
                <button>Search Flights</button>
            </form>
        </div>
    )
}

export default FlightSearch;

