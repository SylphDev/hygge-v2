import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setErrorAction, setUserAction, setViewAction } from "../../../redux/actions/actions";
import { auth, db } from "../../../firebase/firebaseConfig";
import { pushUser, getUser } from "../../../utils/pushToDB";
import "./Form.css";

const Form = ({ view }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    if (view === 'register') {
      try {
        const response = await auth.createUserWithEmailAndPassword(data.email, data.password);
        const user = {
          name: data.name,
          lastName: data.lastName,
          email: data.email,
          country: data.country,
          city: data.city,
          photoUrl: null,
          phone: data.phone,
          reserves: {
            active: [],
            finished: [],
          },
          admin: false,
          uid: response.user.uid
        }
        dispatch(setUserAction(user));
        dispatch(setViewAction('search'));
        pushUser(user);
        navigate('/search');
      } catch (e) {
        dispatch(setErrorAction({
          state: true,
          message: e.code
        }))
      }
    } else {
      try {
        const response = await auth.signInWithEmailAndPassword(data.email, data.password);
        const user = await getUser(response.user.email)
        dispatch(setUserAction(user));
        dispatch(setViewAction('search'));
        navigate('/search');
      } catch (e) {
        dispatch(setErrorAction({
          state: true,
          message: e.code
        }))
      }
    }
  }

  return (
    <form className="Form-container" onSubmit={handleSubmit(onSubmit)}>
      {view === "register" ? (
        <React.Fragment>
          <div className="Form-container-name double-input">
            <input
              {...register('name')}
              type="text"
              className="input Name-input"
              placeholder="Nombre"
            />
            <input
              {...register('lastName')}
              type="text"
              className="input Name-input"
              placeholder="Apellido"
            />
          </div>
          <div className="Form-container-country double-input">
            <input
              {...register('country')}
              type="text"
              className="input Country-input"
              placeholder="País"
            />
            <input
              {...register('city')}
              type="text"
              className="input City-input"
              placeholder="Ciudad"
            />
          </div>
          <input
            {...register('phone')}
            type="number"
            className="input Phone-input"
            placeholder="Telefóno"
          />
        </React.Fragment>
      ) : null}
      <input
        {...register('email')}
        type="email"
        className="input Email-input"
        placeholder="Correo Electrónico"
      />
      <input
        {...register('password')}
        type="password"
        className="input Password-input"
        placeholder="Contraseña"
      />
      <button type="submit">
        {view === "register" ? "Registrar" : "Ingresar"}
      </button>
    </form>
  );
};

export default Form;
