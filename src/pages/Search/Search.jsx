import React from "react";
import { Link } from "react-router-dom";
import HotelCard from "../../components/Search/HotelCard/HotelCard";
import "./Search.css";
import styles from "../../components/Search/HotelCard/HotelCard.module.css";
import CityCard from "../../components/Search/CityDetails/CityDetails";



const Search = () => {
  return (
    <div className="Search-container">
      
      
      <div >
        

        <div className="Posadas">
  
        <HotelCard nombre={"Posada linda"} ciudad={" Punto fijo"} urlimagen={"https://hotelesenmargarita.com/images/Posada-Guaicora/Posada-Guaicora-2.jpg"} popularidad={" 8.3"}  />
        </div>

        <div className="Ciudades">
        <CityCard nombre={"Caracas"} descripcion={" Caracas es la ciudad capital de la República Bolivariana de Venezuela, centro de la administración pública central, núcleo financiero, comercial y cultural más importante de la nación. Se encuentra ubicada en la zona centro-norte del país, a unos 15 Km. del Mar Caribe y se sitúa dentro de un valle en el sistema de la Cordillera de la Costa a una altitud promedio de 900 metros sobre el nivel del mar"} urlimagen={"https://ichef.bbci.co.uk/news/640/cpsprodpb/D159/production/_97039535_caracas.jpg"} ></CityCard>
        </div>

      </div>
    </div>
  );
};

export { Search };
