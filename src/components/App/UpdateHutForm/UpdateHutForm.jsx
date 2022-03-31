import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";
import './UpdateHutForm.css'

const UpdateHutForm = ({ type, onClose }) => {
  const { register, handleSubmit } = useForm();
  const hutName = type.name;
  const [hutAbout, sethutAbout] = useState('')
  const [hutRooms, sethutRooms] = useState([])
  const [hutCity, sethutCity] = useState('')

  const fetchHuts = () => {
    db.collection("huts")
      .where("name", "==", hutName)
      .get()
      .then((data) => {
        data.docs.forEach((element) => {
          sethutAbout(element.data().about)
          sethutCity(element.data().city)
          sethutRooms(element.data().rooms)
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateHut = async (data) => {
    const roomsArray = [];
    for (const item in data.room) {
      const room = { name: item, price: data.room[item] }
      roomsArray.push(room)
    }
    const myHut = await db
      .collection("huts")
      .where("name", "==", hutName)
      .get();
    const docID = myHut.docs[0].id;
    await db.collection("huts").doc(docID).update({
      name: data.name,
      about: data.about,
      city: data.city,
      rooms: roomsArray,
    });
    onClose();
  };

  useEffect(() => {
    fetchHuts();
  }, [])

  return (
    <div className="hut-form-container">
      <div className="hut-form-info">
        <form className="hut-form" onSubmit={handleSubmit(updateHut)}>
          <div className="hut-form-input-container">
            <label htmlFor="hut-name">Nombre: </label>
            <input
              {...register("name")}
              type="text"
              id="hut-name"
              defaultValue={hutName}
            />
          </div>
          <div className="hut-form-input-container">
            <label htmlFor="hut-about">Descripcion: </label>
            <input
              {...register("about")}
              type="text"
              id="hut-about"
              defaultValue={hutAbout}
            />
          </div>
          <div className="hut-form-input-container">
            <label htmlFor="hut-city">Ciudad: </label>
            <input
              {...register("city")}
              type="text"
              id="hut-city"
              defaultValue={hutCity}
            />
          </div>
          <div className="hut-form-rooms-container">
            <h3 htmlFor="hut-rooms">Habitaciones: </h3>
            {hutRooms.map((room) => (
              <div key={room.name} className="hut-form-rooms-input">
                <label htmlFor={room.name}>Nombre: </label>
                <input
                  type="text"
                  defaultValue={room.name}
                />
                <label htmlFor={room.price}>Precio: </label>
                <input
                  {...register(`room.${room.name}`)}
                  type="text"
                  defaultValue={room.price}
                />
              </div>
            ))}
          </div>
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export { UpdateHutForm };
