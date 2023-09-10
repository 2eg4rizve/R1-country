import { useState } from 'react';
import './Country.css'

const Country = ({ country , handleVisitedCountry }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited)
    }

    console.log(handleVisitedCountry);

    return (
        <div className={`Country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ?'red': 'blue' }}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p>Code : {cca3}</p>
            <button onClick={() => handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}>{visited ? "Visited" : "Going"}</button>
            {
                visited ? "I visited This Country" : "I Want to Visit"
            }

        </div>
    );
};

export default Country;