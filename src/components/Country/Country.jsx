import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country);

  const handleVisited = () => {
    // system1
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // system2
    // setVisited(visited ? false : true);
    // system3
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />

      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Capital: {country.capital.capital}</p>
      <p>Region: {country.region.region}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <button className="btn" onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
