import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./components/Formulario.jsx";

const App = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center">Administrar pacientes de veterinaria</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default App;

