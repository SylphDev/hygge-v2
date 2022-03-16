import React from "react";
import { Slider } from "../../components/App/Slider/Slider";
import sp1 from "../../assets/testImages/bikiniBottom.png";
import sp2 from "../../assets/testImages/bikiniBottom2.jpeg";
import sp3 from "../../assets/testImages/bikiniBottom3.jpeg";
import { ReserveForm } from "../../components/App/ReserveForm/ReserveForm";
import "./Reserve.css";

const Reserve = () => {
  const images = [sp1, sp2, sp3];
  const hut = {
    name: "Fondo de Bikini",
    description:
      "hermosa y pequeña posada con vista al océano. Vecinos muy amigables, aunque disfrutan de tocar clarinete a las 7:00am, Muy cerca del campo de medusas de la localidad",
    benefits:
      "arquitectura vanguardista inspirada en frutas tropicales. Amplio espacio con varios cuartos y baños. Se aceptan caracoles de mascota",
    rooms:
      "apartamento de 4 cuartos y 3 baños. Cocina último modelo y mucha agua",
    location: "Océano aventurero",
  };
  return (
    <div className="Reserve-container">
      <div className="Reserve-hut-info">
        <div className="Slider-hut">
          <Slider images={images} />
        </div>
        <div className="Hut-info">
          <p className="Hut-info-name">{hut.name}</p>
          <p className="Hut-info-description">
            <b>Descripcion: </b>
            {hut.description}
          </p>
          <p className="Hut-info-benefits">
            <b>Beneficios: </b>
            {hut.benefits}
          </p>
          <p className="Hut-info-rooms">
            <b>Tipos de habitación: </b>
            {hut.rooms}
          </p>
          <p className="Hut-info-location">
            <b>Tipo de locación: </b>
            {hut.location}
          </p>
        </div>
      </div>
      <div className="Reserve-info">
        <ReserveForm hut={hut} />
      </div>
    </div>
  );
};

export { Reserve };
