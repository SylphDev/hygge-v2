import React from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";

const UpdateCityForm = ({ type }) => {
  const { register, handleSubmit } = useForm();
  const cityName = type.name;
  let cityAbout;

  db.collection("cities")
    .where("name", "==", cityName)
    .get()
    .then((response) => {
      cityAbout = response.docs[0].data().about;
    });

  const updateCity = async (data) => {
    console.log(data);
    const myCity = await db
      .collection("cities")
      .where("name", "==", cityName)
      .get();
    const docID = myCity.docs[0].id;
    await db
      .collection("cities")
      .doc(docID)
      .update({ name: data.name, about: data.about });
  };

  return (
    <div className="city-form-container">
      <div className="city-form-info">
        <form className="city-form" onSubmit={handleSubmit(updateCity)}>
          <label htmlFor="city-name">Nombre: </label>
          <input
            {...register("name")}
            type="text"
            id="city-name"
            defaultValue={cityName}
          />
          <label htmlFor="city-about">Descripcion: </label>
          <input
            {...register("about")}
            type="text"
            id="city-about"
            defaultValue={cityAbout}
          />
          <button type="submit">Actualizar</button>
        </form>
      </div>
    </div>
  );
};

export { UpdateCityForm };
