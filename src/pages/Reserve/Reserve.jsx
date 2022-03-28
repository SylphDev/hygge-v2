import React, { useEffect } from "react";
import { Slider } from "../../components/App/Slider/Slider";
import sp1 from "../../assets/testImages/bikiniBottom.png";
import sp2 from "../../assets/testImages/bikiniBottom2.jpeg";
import sp3 from "../../assets/testImages/bikiniBottom3.jpeg";
import { ReserveForm } from "../../components/App/ReserveForm/ReserveForm";
import "./Reserve.css";
import { useSelector } from "react-redux";

const Reserve = () => {
  const images = [sp1, sp2, sp3];
  const hut = useSelector(state => state.huts);
  const roomsName = [];
  const rooms = hut.rooms.map(room => {
    roomsName.push(room.name)
  })

  return (
    <div className="Reserve-container">
      <div className="Reserve-hut-info">
        <div className="Slider-hut">
          <Slider images={hut.photos} />
        </div>
        <div className="Hut-info">
          <p className="Hut-info-name">{hut.name}</p>
          <p className="Hut-info-description">
            <b>Descripcion: </b>
            {hut.about}
          </p>
          <p className="Hut-info-benefits">
            <b>Ciudad: </b>
            {hut.city}
          </p>
          <p className="Hut-info-rooms">
            <b>Tipos de habitación: </b>
            {roomsName.join(', ')}
          </p>
          <p className="Hut-info-location">
            <b>Tipo de establecimiento: </b>
            {hut.type}
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
