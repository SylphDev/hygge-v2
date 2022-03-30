import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";

const HutForm = () => {
  const { register, handleSubmit } = useForm();

  const createNewHut = async (data) => {
    try {
      const myCity = await db
        .collection("cities")
        .where("name", "==", data.city)
        .get();
      const docID = myCity.docs[0].id;
      let responseCityHuts = myCity.docs[0].data().huts;
      responseCityHuts.push(data.name);
      await db.collection("huts").add({
        about: data.about,
        city: data.city,
        name: data.name,
        rooms: [],
      });
      await db
        .collection("cities")
        .doc(docID)
        .update({ huts: responseCityHuts });
    } catch {
      alert(
        "Para crear una posada, la ciudad debe existir en la base de datos."
      );
    }
  };

  return (
    <div className="hut-form-container">
      <div className="hut-form-info">
        <h3 className="hut-form-title">Agregue una posada: </h3>
        <form className="hut-form" onSubmit={handleSubmit(createNewHut)}>
          <label htmlFor="hut-name">Nombre: </label>
          <input type="text" id="hut-name" {...register("name")} />
          <label htmlFor="hut-city">Ciudad: </label>
          <input type="text" id="hut-name" {...register("city")} />
          <label htmlFor="hut-about">Descripcion: </label>
          <input type="text" id="hut-about" {...register("about")} />
          <label htmlFor="hut-image">Imagenes: </label>
          <input
            type="file"
            id="hut-image"
            {...register("images")}
            accept="image/*"
            multiple
          />
          <button type="submit">Crear</button>
        </form>
      </div>
    </div>
  );
};

export { HutForm };
