import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, SetCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => SetCountries(data));


    }, [])

    const handleVisitedCountry = country => {
        console.log("handleVisitedCountry Add this to your visited country");
        console.log(country);
        const newVisitedCountries = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
        
    }

    return (
        <div >

            <h1>All Countries</h1>
            <h1>Countries : {countries.length}</h1>
            <div>
                <h1>Visited Countries : {visitedCountries.length}</h1>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name?.common}</li>)
                    }

                </ul>
            </div>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}>

                    </Country>)
                }
            </div>

        </div>
    );
};

export default Countries;