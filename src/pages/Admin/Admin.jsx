import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import "./Admin.css";
import HotelCard from "../../components/Search/HotelCard/HotelCard";
import CityCard from "../../components/Search/CityDetails/CityDetails";
import { Modal } from "../../components/App/Modal/Modal";

const Admin = () => {
    const [cities, setCities] = useState([]);
    const [huts, setHuts] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const fetchCities = () => {
        const cities = db.collection("cities");
        cities.get()
          .then((data) => {
            const citiesArray = [];
            data.docs.forEach((element) => {
              const city = { ...element.data() };
              citiesArray.push(city);
            })
            setCities(citiesArray);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      const fetchHuts = () => {
        const huts = db.collection("huts");
        huts.get()
          .then((data) => {
            const hutsArray = [];
            data.docs.forEach((element) => {
              const hut = { ...element.data() };
              hutsArray.push(hut);
            })
            setHuts(hutsArray);
          })
          .catch((error) => {
            console.log(error);
          });
      }

      useEffect(() => {
        fetchCities();
        fetchHuts();
      }, [huts]);

      const deleteHut = (hutName) => {
        // db.collection("huts").where("name", "==", hutName).get()
        // .then(response => {
        //     response.docs[0].ref.delete();
        // });
        // fetchHuts();

        console.log(hutName);
      }

      const deleteCity = (cityName) => {
        //Delete city
        db.collection("cities").where("name", "==", cityName).get()
        .then(response => {
            response.docs[0].ref.delete();
        });

        //Delete huts with city name
        db.collection("huts").where("city", "==", cityName).get()
        .then(response => {
            response.forEach(doc => {
                doc.ref.delete();
            });
        });

        fetchCities();
        fetchHuts();
      }
    
    return(
        <div className="admin-page-container">
            <div className="Ciudades">
        {cities.map(city =>
          <CityCard 
          key={city.name}
          nombre={city.name} 
          descripcion={city.about} 
          urlimagen={city.photos[0]} />
        )}
      </div>
      <div className="Posadas">
          {huts.map(hut =>
          <React.Fragment>
            <HotelCard 
            key={hut.name} 
            hut={hut} 
            nombre={hut.name} 
            ciudad={hut.city} 
            urlimagen={hut.photos[0]} 
            popularidad={" 8.3"} />
            <span className="Icon Icon-delete" id={hut.name} onClick={() => setIsOpen(true)}>
            🗑️
      </span>
      <Modal open={isOpen} deleteHut={deleteHut} onClose={() => setIsOpen(false)} hutName = {hut.name}>
          Seguro que desea borrar?
      </Modal>
      </React.Fragment>
          )}
        </div>

        </div>
    );
}

export { Admin };