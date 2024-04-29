import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioCita from "./FormularioCita.jsx";
import CitaCard from "./CitaCard.jsx";

const Formulario = () => {
  const [citas, setCitas] = useState([]);

  const agregarCita = (nuevaCita) => {
    setCitas([...citas, nuevaCita]);
  };

  const eliminarCita = (id) => {
    setCitas(citas.filter((cita) => cita.id !== id));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Llenar el formulario para crear una cita</h1>
          <FormularioCita agregarCita={agregarCita} />
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <h2 className="text-center">Citas Agendadas</h2>
          {citas.length === 0 ? (
            <p className="text-center">No hay citas agendadas</p>
          ) : (
            citas.map((cita) => (
              <div key={cita.id} className="mb-3 ">
                <CitaCard cita={cita} eliminarCita={eliminarCita} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Formulario;
