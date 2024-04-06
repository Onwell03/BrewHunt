import React, {Component, useEffect, useState} from "react";
import {useParams} from "react-router-dom"

const BrewInfo = () => {
    let param = useParams();
    const [details, setDetails] = useState("");

    useEffect(() => {
        const getInfo = async () => {
            try {
                const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${param.id}`);
                const json = await response.json();
                setDetails(json);
            }catch (error) {
                console.error('Error in fetching the Info', error);
            }
        };
        getInfo().catch(console.error);
    }, [param.id])

    return(
        <div className="details">
            <div className="view">
                <h3>Name: {details.name}</h3>
                <h3>Brewery Type: {details.brewery_type}</h3>
                <h3>Street Address: {details.street}</h3>
                <h3>State: {details.state_province}</h3>
                <h3>Postal Code: {details.postal_code}</h3>
                <h3>Country: {details.country}</h3>
                <h3>Phone: {details.phone}</h3>
                <h3>Website url: {details.website_url}</h3>
            </div>
        </div>
    )
};

export default BrewInfo; 