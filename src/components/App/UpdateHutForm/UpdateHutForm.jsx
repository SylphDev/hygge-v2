import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";

const UpdateHutForm = ({ type }) => {
  const { register, handleSubmit } = useForm();
  const hutName = type.name;
  let hutAbout, hutRooms, hutCity;

  db.collection("huts")
    .where("name", "==", hutName)
    .get()
    .then((response) => {
      hutAbout = response.docs[0].data().about;
      hutRooms = response.docs[0].data().rooms;
      hutCity = response.docs[0].data().city;
    });

  const updateHut = async (data) => {
    const myHut = await db
      .collection("huts")
      .where("name", "==", hutName)
      .get();
    const docID = myHut.docs[0].id;
    await db.collection("huts").doc(docID).update({
      name: data.name,
      about: data.about,
      city: data.city,
      rooms: data.rooms,
    });
  };
  return (
    <div className="hut-form-container">
      <div className="hut-form-info">
        <form className="hut-form" onSubmit={handleSubmit(updateHut)}>
          <label htmlFor="hut-name">Nombre: </label>
          <input
            {...register("name")}
            type="text"
            id="hut-name"
            value={hutName}
          />
          <label htmlFor="hut-about">Descripcion: </label>
          <input
            {...register("about")}
            type="text"
            id="hut-about"
            value={hutAbout}
          />
          <label htmlFor="hut-city">Ciudad: </label>
          <input
            {...register("city")}
            type="text"
            id="hut-city"
            value={hutCity}
          />
          <label htmlFor="hut-rooms">Habitaciones: </label>
          {hutRooms.map((room) => (
            <React.Fragment>
              <label htmlFor={room.name}>Nombre: </label>
              <input
                {...register("room-name" + room.name)}
                type="text"
                value={room.name}
              />
              <label htmlFor={room.price}>Precio: </label>
              <input
                {...register("room-price" + room.price)}
                type="text"
                value={room.price}
              />
            </React.Fragment>
          ))}
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export { UpdateHutForm };
