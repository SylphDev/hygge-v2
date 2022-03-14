import React from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  return (
    <div className="Search-container">
      <p>Aqui va la pagina de busqueda</p>
      <Link to={"/reserve"}>
        <button>VIVE EN UNA PINA DEBAJO DEL MAAAAAAAR</button>
      </Link>
    </div>
  );
};

export { Search };
