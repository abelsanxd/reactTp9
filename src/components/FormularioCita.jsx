import React from "react";
import { useForm } from "react-hook-form";

const FormularioCita = ({ agregarCita }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    agregarCita(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-light">
        <div className="mb-3">
          <label htmlFor="nombreMascota" className="form-label">
            Nombre Mascota:
          </label>
          <input
            type="text"
            id="nombreMascota"
            {...register("nombreMascota", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            className={`form-control ${
              errors.nombreMascota ? "is-invalid" : ""
            }`}
          />
          {errors.nombreMascota && (
            <div className="invalid-feedback">Ingrese un nombre válido</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="nombreDueño" className="form-label">
            Nombre Dueño:
          </label>
          <input
            type="text"
            id="nombreDueño"
            {...register("nombreDueño", {
              required: true,
              pattern: /^[A-Za-z]+$/i,
            })}
            className={`form-control ${errors.nombreDueño ? "is-invalid" : ""}`}
          />
          {errors.nombreDueño && (
            <div className="invalid-feedback">Ingrese un nombre válido</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="fecha" className="form-label">
            Fecha:
          </label>
          <input
            type="date"
            id="fecha"
            {...register("fecha", { required: true })}
            className={`form-control ${errors.fecha ? "is-invalid" : ""}`}
          />
          {errors.fecha && (
            <div className="invalid-feedback">Campo requerido</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="form-label">
            Síntomas:
          </label>
          <textarea
            id="sintomas"
            {...register("sintomas", { required: true })}
            className={`form-control ${errors.sintomas ? "is-invalid" : ""}`}
          ></textarea>
          {errors.sintomas && (
            <div className="invalid-feedback">Campo requerido</div>
          )}
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-shadow">
          Agregar nueva cita
        </button>
      </div>
    </form>
  );
};

export default FormularioCita;
