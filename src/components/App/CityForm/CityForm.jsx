import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";

const CityForm = () => {
  const { register, handleSubmit } = useForm();

  const createNewCity = async (data) => {
      await db.collection("cities").add({
          about: data.about,
          huts: [],
          name: data.name,
          photos: "https://zonadeprensard.com/wp-content/uploads/2022/01/Demon-Slayer-Rengoku-1-1200x675.jpg"
      })
      console.log("Exito");
  };

  return (
    <div className="city-form-container">
      <div className="city-form-info">
        <h3 className="city-form-title">Agregue una ciudad: </h3>
        <form className="city-form" onSubmit={handleSubmit(createNewCity)}>
          <label htmlFor="city-name">Nombre: </label>
          <input {...register("name")} type="text" id="city-name" />
          <label htmlFor="city-about">Descripcion: </label>
          <input {...register("about")} type="text" id="city-about" />
          <label htmlFor="city-image">Imagen: </label>
          <input
            {...register("image")}
            type="file"
            id="city-image"
            accept="image/*"
          />
          <button type="submit">
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export { CityForm };
