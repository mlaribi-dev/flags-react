import React from 'react';

// Props qui affichera les pays à partir de country
const Card = (props) => {
    const {country} = props;

    // Permet de mettre un séparateur entre le nombre d'habitants et la capitale
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      };

    // Le return affichera les pays avec leurs caractéristiques
    return (
        <li className="card">
            <img src={country.flag} alt="flag"></img>
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>Capital : {country.capital}</li>
                    <li>Population : {numberFormat(country.population)}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;