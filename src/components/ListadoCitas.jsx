import React from "react";
import CitaCard from "./CitaCard.jsx";

const ListadoCitas = ({ citas, eliminarCita }) => {
  return (
    <div>
      <h2 className="text-center">Administrar Citas</h2>
      {citas.length === 0 ? (
        <p className="text-center">No hay citas registradas</p>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {citas.map((cita) => (
            <div className="col" key={cita.id}>
              <CitaCard cita={cita} eliminarCita={eliminarCita} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListadoCitas;
