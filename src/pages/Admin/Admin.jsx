import React, { useEffect, useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import "./Admin.css";
import HotelCard from "../../components/Search/HotelCard/HotelCard";
import CityCard from "../../components/Search/CityDetails/CityDetails";
import { Modal } from "../../components/App/Modal/Modal";
import { SecureDelete } from "../../components/App/secureDelete/secureDelete";
import { useDispatch, useSelector } from "react-redux";
import { setCitysAction, setHutsAction } from "../../redux/actions/actions";
import { CityForm } from "../../components/App/CityForm/CityForm";
import { HutForm } from "../../components/App/HutForm/HutForm";

const Admin = () => {
  const cityState = useSelector((state) => state.citys);
  const hutState = useSelector((state) => state.huts);
  const dispatch = useDispatch();
  const [cities, setCities] = useState([]);
  const [huts, setHuts] = useState([]);
  const [isOpenDeleteHut, setIsOpenDeleteHut] = useState(false);
  const [isOpenDeleteCity, setIsOpenDeleteCity] = useState(false);
  const [isOpenCreateCity, setIsOpenCreateCity] = useState(false);

  const fetchCities = () => {
    const cities = db.collection("cities");
    cities
      .get()
      .then((data) => {
        const citiesArray = [];
        data.docs.forEach((element) => {
          const city = { ...element.data() };
          citiesArray.push(city);
        });
        setCities(citiesArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchHuts = () => {
    const huts = db.collection("huts");
    huts
      .get()
      .then((data) => {
        const hutsArray = [];
        data.docs.forEach((element) => {
          const hut = { ...element.data() };
          hutsArray.push(hut);
        });
        setHuts(hutsArray);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleModalDeleteHut = (name) => {
    dispatch(setHutsAction({ name: name }));
    setIsOpenDeleteHut(true);
  };

  const handleModalDeleteCity = (name) => {
    dispatch(setCitysAction({ name: name }));
    setIsOpenDeleteCity(true);
  };

  const handleModalCreateCity = () => {
    setIsOpenCreateCity(true);
  };

  useEffect(() => {
    fetchCities();
    fetchHuts();
  }, []);

  const deleteHut = (hutName) => {
    db.collection("huts").where("name", "==", hutName).get()
    .then(response => {
        response.docs[0].ref.delete();
    });
    // fetchHuts();

    console.log(hutName);
  };

  const deleteCity = (cityName) => {
    //Delete city
    db.collection("cities")
      .where("name", "==", cityName)
      .get()
      .then((response) => {
        response.docs[0].ref.delete();
      });

    //Delete huts with city name
    db.collection("huts")
      .where("city", "==", cityName)
      .get()
      .then((response) => {
        response.forEach((doc) => {
          doc.ref.delete();
        });
      });

    // fetchCities();
    // fetchHuts();
  };

  return (
    <div className="admin-page-container">
      <div className="Ciudades">
        <button className="add-city-button" onClick={handleModalCreateCity}>
          +
        </button>
        {isOpenCreateCity ? (
          <Modal>
            <CityForm />
          </Modal>
        ) : null}
        {cities.map((city) => (
          <React.Fragment>
            <CityCard
              key={city.name}
              nombre={city.name}
              descripcion={city.about}
              urlimagen={city.photos[0]}
            />
            <span
              className="Icon Icon-delete"
              id={city.name}
              onClick={() => handleModalDeleteCity(city.name)}
            >
              🗑️
            </span>
          </React.Fragment>
        ))}
      </div>
      <div className="Posadas">
        <button className="add-hut-button">+</button>
        {huts.map((hut) => (
          <React.Fragment>
            <HotelCard
              key={hut.name}
              hut={hut}
              nombre={hut.name}
              ciudad={hut.city}
              urlimagen={hut.photos[0]}
              popularidad={" 8.3"}
            />
            <span
              className="Icon Icon-delete"
              id={hut.name}
              onClick={() => handleModalDeleteHut(hut.name)}
            >
              🗑️
            </span>
            {isOpenDeleteHut ? (
              <Modal>
                <SecureDelete
                  deleteHut={(prueba) => deleteHut(prueba)}
                  onClose={() => setIsOpenDeleteHut(false)}
                  type={hutState}
                />
              </Modal>
            ) : null}
            {isOpenDeleteCity ? (
              <Modal>
                <SecureDelete
                  deleteHut={(prueba) => deleteCity(prueba)}
                  onClose={() => setIsOpenDeleteCity(false)}
                  type={cityState}
                />
              </Modal>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export { Admin };
