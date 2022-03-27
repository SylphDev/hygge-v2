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
        citiesArray.push(city.name);
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

  // if(initCity != ""){
  // setCityDetail(cities.filter(city => city.name === initCity));
  // }

  return (
    <div className="Search-container">
      <div className="cities-container">
      {cities.map(city =>
      <React.Fragment>
        <input type="radio" name="city" value={city} onChange={handleChange}/>
        <label htmlFor={city}>{city}</label> 
        </React.Fragment>
      )}
      </div>
      <SearchBar 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <div className="Posadas">
        {searchedHuts.map(hut =>
        <HotelCard nombre={hut.name} ciudad={hut.city} urlimagen={hut.photos[0]} popularidad={" 8.3"} eventHandler={handleClick} />
        // <React.Fragment>
        //   <div className={hut.name} onClick={handleClick}>
        //   <img src={hut.photos[0]} alt="fotico" />
        //   <h1>{hut.name}</h1>
        //   <p>{hut.about}</p>
        //   <p>Estrellitas de rating</p>
        //   </div> 
        //   </React.Fragment>
          )}
      </div>
      {/* {cityDetail.length > 0 ? 
      <div className="city-detail">

          <img src={cityDetail[0].photos[0]} alt="fotico" />
          <h1>{cityDetail[0].name}</h1>
          <p>{cityDetail[0].about}</p>
      </div>
: <React.Fragment></React.Fragment>} */}
      
      
      {/* <div >
        

        <div className="Posadas">
  
        <HotelCard nombre={"Posada linda"} ciudad={" Punto fijo"} urlimagen={"https://hotelesenmargarita.com/images/Posada-Guaicora/Posada-Guaicora-2.jpg"} popularidad={" 8.3"}  />
        </div>

        <div className="Ciudades">
        <CityCard nombre={"Caracas"} descripcion={" Caracas es la ciudad capital de la República Bolivariana de Venezuela, centro de la administración pública central, núcleo financiero, comercial y cultural más importante de la nación. Se encuentra ubicada en la zona centro-norte del país, a unos 15 Km. del Mar Caribe y se sitúa dentro de un valle en el sistema de la Cordillera de la Costa a una altitud promedio de 900 metros sobre el nivel del mar"} urlimagen={"https://ichef.bbci.co.uk/news/640/cpsprodpb/D159/production/_97039535_caracas.jpg"} ></CityCard>
        </div>

      </div> */}
    </div>
  );
};

export { Search };
