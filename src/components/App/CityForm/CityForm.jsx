import { useForm } from "react-hook-form";
import { db } from "../../../firebase/firebaseConfig";

const CityForm = () => {
    const { createCity, handleSubmit } = useForm();

    // const createNewCity = async (data) => {
    //     await db.collection("cities").add({
    //         about: data.about,
    //         huts: [],
    //         name: data.name,
    //         photos: data.image
    //     })
    //     console.log("Exito");
    // };

    const createNewCity = (data) => {
        console.log(data);
    }

    return(
        <div className="city-form-container">
            <div className="city-form-info">
                <h3 className="city-form-title">Agregue una ciudad: </h3>
                <form className="city-form" onSubmit={handleSubmit(createNewCity)}>
                    <label htmlFor="city-name">Nombre: </label>
                    <input
                    {...createCity("name")} 
                    type="text" 
                    id="city-name" 
                    />
                    <label htmlFor="city-about">Descripcion: </label>
                    <input 
                    {...createCity("about")}
                    type="text" 
                    id="city-about" 
                    />
                    <label htmlFor="city-image">Imagen: </label>
                    <input
                    {...createCity("image")} 
                    type="file" 
                    id="city-image" 
                    accept="image/*"
                    />
                    <button type="submit" onClick={createNewCity}>Crear</button>
                </form>
            </div>
        </div>
    );
}

export { CityForm };