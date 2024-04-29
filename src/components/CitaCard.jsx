import React from "react";

const CitaCard = ({ cita, eliminarCita }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Mascota: {cita.nombreMascota}</h5>
        <p className="card-text ">Dueño: {cita.nombreDueño}</p>
        <p className="card-text bg-light">Fecha: {cita.fecha}</p>
        <p className="card-text bg-light">Síntomas: {cita.sintomas}</p>
        <button className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>Borrar</button>
      </div>
    </div>
  );
};

export default CitaCard;
