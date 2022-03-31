import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import greyImage from "../../assets/images/grey.jpeg";
import { ReserveCards } from "../../components/App/ReserveCards/ReserveCards";
import "./Profile.css";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.user);
  const editProfile = () => {
    const inputs = document.getElementsByClassName("input");
    const inputsArray = [...inputs];
    const button = document.getElementById("edit-button");
    inputsArray.map((input) => {
      if (input.disabled === true) {
        input.disabled = false;
        button.innerText = "Enviar";
      } else {
        input.disabled = true;
        button.innerText = "Enviar";
      }
    });
  };

  return (
    <div className="Profile-container">
      <div className="Profile-info">
        <p>Tu perfil</p>
        <figure className="Profile-picture">
          <img src={user.photoUrl != null ? user.photoUrl : greyImage} alt="Profile" />
        </figure>
      </div>
      <form className="Profile-form">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          className="input Name-input"
          placeholder={`${user.name}`}
          disabled
        />
        <label htmlFor="name">Apellido</label>
        <input
          type="text"
          id="lastName"
          className="input Name-input"
          placeholder={`${user.lastName}`}
          disabled
        />
        <label htmlFor="country">País</label>
        <input
          type="text"
          id="country"
          className="input Country-input"
          placeholder={`${user.country}`}
          disabled
        />
        <label htmlFor="city">Ciudad</label>
        <input
          type="text"
          id="city"
          className="input City-input"
          placeholder={`${user.city}`}
          disabled
        />
        <label htmlFor="phone">Telefóno</label>
        <input
          type="number"
          id="phone"
          className="input Phone-input"
          placeholder={`${user.phone}`}
          disabled
        />
        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          className="input Email-input"
          placeholder={`${user.email}`}
          disabled
        />
      </form>
      {/* <button onClick={editProfile} id="edit-button" type="button">
        Editar perfil
      </button> */}
      {user.reserves.active[0] != null ?
        <div className="Reserves">
          <p className="Reserves-title">Reservas</p>
          <div className="Reserve-cards">
            {user.reserves.active.map(reserve => (
              <ReserveCards key={reserve.price} reservation={reserve} />
            ))}
          </div>
        </div>
        : null}
    </div>
  );
};

export { Profile };
