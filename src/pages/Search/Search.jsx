import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HotelCard from "../../components/Search/HotelCard/HotelCard";
import "./Search.css";
import { db } from "../../firebase/firebaseConfig";
import { SearchBar } from "../../components/App/SearchBar/SearchBar";
import styles from "../../components/Search/HotelCard/HotelCard.module.css";
import CityCard from "../../components/Search/CityDetails/CityDetails";



const Search = () => {

  const [cities, setCities] = useState([]);
  const [huts, setHuts] = useState([]);
  const [initCity, setInitCity] = useState("");
  const [hut, setHut] = useState("");
  const [cityDetail, setCityDetail] = useState([]);
  const [searchValue, setSearchValue] = React.useState('');

  const fetchCities = () => {
    const cities = db.collection("cities");
    cities.get()
    .then((data) => {
      const citiesArray = [];
      data.docs.forEach((element) => {
        const city = {...element.data()};
        citiesArray.push(city);
      }) 
      setCities(citiesArray);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const fetchHuts = () => {
    const huts = db.collection("huts");
    huts.get()
    .then((data) => {
      const hutsArray = [];
      data.docs.forEach((element) => {
        const hut = {...element.data()};
        hutsArray.push(hut);
      })
      if(initCity != ""){ 
        let newHuts = [];
        newHuts = hutsArray.filter(hut => hut.city === initCity);
        setHuts(newHuts);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const handleChange = (event) => {   
    setInitCity(event.target.value);
    setCityDetail(cities.filter(city => city.name === event.target.value));
  }

  const handleClick = (event) => {
    setHut(event.target.className);
  }

      //Dinamic search functionality
      let searchedHuts = [];

      if(!searchValue.length >= 1){
          searchedHuts = huts;
      } else{
          searchedHuts = huts.filter(hut => {
          const hutName = hut.name.toLowerCase();
          const searchText = searchValue.toLowerCase();
          
          return hutName.includes(searchText);
      });
      }

  useEffect(() => {
    fetchCities();
    fetchHuts();
  }, [initCity]);

  return (
    <div className="Search-container">
      <div className="cities-container">
      {cities.map(city =>
      <React.Fragment>
        <input type="radio" name="city" value={city.name} onChange={handleChange}/>
        <label htmlFor={city.name}>{city.name}</label> 
        </React.Fragment>
      )}
      </div>
      
      <div className="Posadas">
      <SearchBar 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
        {searchedHuts.map(hut =>
        <HotelCard nombre={hut.name} ciudad={hut.city} urlimagen={hut.photos[0]} popularidad={" 8.3"} eventHandler={handleClick} />
          )}
      </div>
      {initCity != "" ? 
      <div className="Ciudades">
        <CityCard 
        nombre={cityDetail[0].name} descripcion={cityDetail[0].about} urlimagen={cityDetail[0].photos[0]} ></CityCard>
      </div>
: <React.Fragment></React.Fragment>}
    </div>
  );
};

export { Search };
