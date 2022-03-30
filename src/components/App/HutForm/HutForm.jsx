import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";

const HutForm = () => {
  const { register, handleSubmit } = useForm();

  // const createNewHut = async (data) => {
  //     const hutImages = [];
  //     data.images.map(image => hutImages.push(image)) //Esto es asumiendo que varias imagenes vienen en un array, honestamente no se como vienen porque no he podido probar
  //     await db.collection("huts").add({
  //         about: data.about,
  //         city: data.city,
  //         name: data.name,
  //         photos: hutImages,
  //         rooms: []
  //     })
  //     //Me traigo la ciudad del hut que estamos agregando
  //     db.collection("cities").where("name", "==", data.city).get()
  //     .then(response => {
  //         //Agarro los huts que ya existen en esa ciudad
  //         let responseCityHuts = response.docs[0].huts;
  //         //Pusheo el hut nuevo
  //         responseCityHuts.push(data.name);
  //     });
  //     //Me traigo la ciudad
  //     db.collection("cities").where("name", "==", data.city).get()
  //     .then(response => {
  //         //Updateo huts
  //         response.docs[0].update({huts: responseCityHuts})
  //     })
  //     console.log("Exito");
  // };

  const createNewHut = (data) => {
    console.log(data);
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
          <button type="submit" onClick={createNewHut}>
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export { HutForm };
