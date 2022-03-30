import React, { useEffect, useState } from "react";
import HotelCard from "../../components/Search/HotelCard/HotelCard";
import "./Search.css";
import { db } from "../../firebase/firebaseConfig";
import { SearchBar } from "../../components/App/SearchBar/SearchBar";
import CityCard from "../../components/Search/CityDetails/CityDetails";
import { NoCity } from "../../components/Search/NoCity/NoCity";

const Search = () => {
  const [cities, setCities] = useState([]);
  const [huts, setHuts] = useState([]);
  const [initCity, setInitCity] = useState("");
  const [hut, setHut] = useState("");
  const [cityDetail, setCityDetail] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchCities = () => {
    const cities = db.collection("cities");
    cities.get()
      .then((data) => {
        const citiesArray = [];
        data.docs.forEach((element) => {
          const city = { ...element.data() };
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
          const hut = { ...element.data() };
          hutsArray.push(hut);
        })
        if (initCity !== "") {
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

  if (!searchValue.length >= 1) {
    searchedHuts = huts;
  } else {
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
          <div className="cities-container-filters" key={city.name}>
            <input type="radio" name="city" value={city.name} onChange={handleChange} />
            <label htmlFor={city.name}>{city.name}</label>
          </div>
        )}
      </div>

      {initCity === "" ?
        <NoCity />
        : null}

      {initCity !== "" ?
        <div className="Posadas">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          {searchedHuts.map(hut =>
            <HotelCard key={hut.name} hut={hut} nombre={hut.name} ciudad={hut.city} urlimagen={hut.photos[0]} popularidad={" 8.3"} eventHandler={handleClick} />
          )}
        </div>
        : null}

      {initCity !== "" ?
        <div className="Ciudades">
          <CityCard key={cityDetail[0].name}
            nombre={cityDetail[0].name} descripcion={cityDetail[0].about} urlimagen={cityDetail[0].photos[0]} ></CityCard>
        </div>
        : null}
    </div>
  );
};

export { Search };
