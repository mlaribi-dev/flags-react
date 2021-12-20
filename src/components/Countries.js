import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Countries = () => {
    const[data, setData] = useState([]);
    // Permet de trier les pays
    const[sortedData, setSortedData] = useState([]);
    // Le data doit être joué une seule fois
    const [playOnce, setPlayOnce] = useState(true);
    // Permet de mettre un nombre de pays dynamique
    const[rangeValue, setRangeValue] = useState(40); 
    // Boutons radios par continent
    const[selectedRadio, setSelectedRadio] = useState('');
    const radios = ['Africa', 'America','Asia','Europe','Oceania']

    useEffect(() => {
      if(playOnce) {
        axios
        .get("https://restcountries.com/v2/all")
        .then((res) => setData(res.data)); 
        setPlayOnce(false);
      }

      const sortedCountry = () => {
        // Transforme le array en objet
        const countryObject = Object.keys(data).map((i) => data[i]);
        // Le sortedArray range les pays par population
        const sortedArray = countryObject.sort((a,b)=>{
          return b.population - a.population
        });
       
        sortedArray.length = rangeValue;
        setSortedData(sortedArray);
      };
      sortedCountry();
    }, [data, rangeValue, playOnce]);
    
    return(
      <div className="countries">
        <div className="sort-container">
          {/*Le nombre de pays change en fonction de la position du input range*/}
          <input type="range" min="1" max="250" value={rangeValue} onChange= {(e)=> setRangeValue(e.target.value)}/>
          <ul>
            {radios.map((radio)=> {
              return (
                <li key={radio}>
                  <input type="radio" value={radio} id={radio} checked ={radio === selectedRadio} onChange={(e) => setSelectedRadio(e.target.value)}/>
                  <label htmlFor={radio}>{radio}</label>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="cancel">
          {/* Le bouton annulera la recherche dès qu'on se trouve sur un continent*/}
          {selectedRadio && <h5 onClick={() => setSelectedRadio("") }>Cancel search</h5>}
        </div>
        <ul className="countries-list">
          {sortedData
          // Filtre les pays en fonction de leur continent (region)
          .filter((country) => country.region.includes(selectedRadio)).map((country) => (
            // Avec la props "country", le map affichera les pays au nom de la component Card
            <Card country={country} key={country.name}/>
          ))}
        </ul>
      </div>
    );
};


      
export default Countries;