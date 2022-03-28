import React, { useState } from "react";
import { useForm } from "react-hook-form";
import smallLogo from "../../../assets/logos/logo-small-black.png";
import "./ReserveForm.css";

const ReserveForm = ({ hut }) => {
  const [entryDate, setEntryDate] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [totalPrice, setTotalPrice] = useState("0.00");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  const getLeaveDate = (event) => {
    const date = event.target.value;
    setLeaveDate(Date.parse(date));
  }

  const getEntryDate = (event) => {
    const date = event.target.value;
    setEntryDate(Date.parse(date));
  }

  const calculateTotalPrice = (event) => {
    const diffInMs = Math.abs(leaveDate - entryDate);
    const chosenRoom = event.target.value;
    if (entryDate && leaveDate && chosenRoom) {
      const differenceInDates = (diffInMs / (1000 * 3600 * 24));
      const roomPrice = chosenRoom.split("$")[1];
      setTotalPrice(roomPrice * differenceInDates);
      console.log('entrada:', entryDate);
      console.log('salida:', leaveDate);
      console.log('precio:', roomPrice);
    } else {
      setTotalPrice(0)
    }
  }

  return (
    <div className="ReserveForm-container">
      <div className="ReserveForm-info-container">
        <p className="Reserve-title">
          <b>Información de la reserva</b>
        </p>
        <form className="ReserveForm-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Reserve-form-inputs">
            <div className="Reserve-form-dates">
              <div className="Reserve-form-dates-entry">
                <label htmlFor="entry-date">Fecha de llegada</label>
                <input
                  {...register("entry-date")}
                  id="entry-date"
                  type={"date"}
                  onChange={getEntryDate}
                />
              </div>
              <div className="Reserve-form-dates-leave">
                <label htmlFor="leave-date">Fecha de salida</label>
                <input
                  {...register("leave-date")}
                  id="leave-date"
                  type={"date"}
                  onChange={getLeaveDate}
                />
              </div>
            </div>
            <div className="Reserve-form-room">
              <label htmlFor="room-type">Tipo de habitacion</label>
              <input {...register("room")} id="room-type" list="rooms" onChange={calculateTotalPrice} />
              <datalist id="rooms">
                {hut.rooms.map(room =>
                  <React.Fragment>
                    <option value={room.name + " $" + room.price} />
                  </React.Fragment>
                )}
              </datalist>
            </div>
            <div className="Reserve-form-cost">
              <p>Costo:</p>
              <input
                {...register("price")}
                type="text"
                disabled
                placeholder={"$0.00"}
                value={"$" + totalPrice}
              />
            </div>
          </div>
          <div className="ReserveForm-button">
            <figure className="Logo-small">
              <img src={smallLogo} alt="Logo" />
            </figure>
            <button type="submit">Reservar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ReserveForm };
