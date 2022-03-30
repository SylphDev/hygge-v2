import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import smallLogo from "../../../assets/logos/logo-small-black.png";
import { setReserveAction } from "../../../redux/actions/actions";
import "./ReserveForm.css";

const ReserveForm = ({ hut }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [entryDate, setEntryDate] = useState('');
  const [leaveDate, setLeaveDate] = useState('');
  const [chosenRoom, setChosenRoom] = useState('');
  const [totalPrice, setTotalPrice] = useState("0.00");
  const [room, setRoom] = useState("");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const getLeaveDate = (event) => {
    const date = new Date(event.target.value);
    const today = new Date()
    if (date > today) {
      setLeaveDate(date);
    }
  }
  const getEntryDate = (event) => {
    const date = new Date(event.target.value);
    const today = new Date()
    if (date > today) {
      setEntryDate(date);
    }
  }
  const getChosenRoom = (event) => {
    console.log(event.target.value);
    setChosenRoom(event.target.value)
  }

  const calculateTotalPrice = (event) => {
    const diffInMs = (Date.parse(leaveDate) - Date.parse(entryDate));
    setRoom(chosenRoom);
    if ((entryDate && leaveDate && chosenRoom) && (diffInMs > 0)) {
      const differenceInDates = (diffInMs / (1000 * 3600 * 24));
      const roomPrice = chosenRoom.split("$")[1];
      setTotalPrice(roomPrice * differenceInDates);
    } else {
      setTotalPrice(0)
    }
  }

  const onReserve = () => {
    if (entryDate && leaveDate && totalPrice && room) {
      const reservation = {
        hut: hut,
        entry: entryDate,
        leave: leaveDate,
        room: room.split(' $')[0],
        price: totalPrice,
        rate: false
      };
      dispatch(setReserveAction(reservation));
      navigate('/payment')
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
              {/* <input {...register("room")} id="room-type" list="rooms" onChange={getChosenRoom} /> */}
              <select id="rooms room-type" {...register("room")} list="rooms" onChange={getChosenRoom}>
                {hut.rooms.map(room =>
                  <React.Fragment>
                    <option value={room.name + " $" + room.price}>{room.name + " $" + room.price}</option>
                  </React.Fragment>
                )}
              </select>
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
            <button onClick={calculateTotalPrice} className="calc-button" type="button">Calcular</button>
          </div>
          <div className="ReserveForm-button">
            <figure className="Logo-small">
              <img src={smallLogo} alt="Logo" />
            </figure>
            <button type="submit" onClick={onReserve}>Reservar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { ReserveForm };
