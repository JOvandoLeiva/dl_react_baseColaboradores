import { useState } from "react";

const DocumentForm = ({ onSubmit, setAlert }) => {
  const [collaborator, setCollaborator] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const inputHandle = (evento) => {
    setCollaborator({
      ...collaborator,
      [evento.target.name]: evento.target.value,
    });
    setAlert({
      error: false,
      message: false,
    });
  };

  const validateNumber = (value) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const saveCollaborator = (evento) => {
    evento.preventDefault();
    setAlert({
      error: true,
      message: "Solo se pueden ingresar números en el campo edad y teléfono",
      color: "danger",
    });

    if (
      !collaborator.nombre.trim() ||
      !collaborator.correo.trim() ||
      !collaborator.edad.trim() ||
      !collaborator.cargo.trim() ||
      !collaborator.telefono.trim()
    ) {
      setAlert({
        error: true,
        message: "Todos los campos deben estar completos y con datos correctos",
        color: "danger",
      });
      return;
    }

    if (
      validateNumber(collaborator.edad) &&
      validateNumber(collaborator.telefono)
    ) {
      onSubmit(collaborator);
      setAlert({ error: false });
      setAlert({
        message: "Colaborador agregado correctamente",
        color: "success",
      });
      setCollaborator({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={saveCollaborator}>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Nombre Colaborador"
            className="form-control"
            name="nombre"
            onChange={inputHandle}
            value={collaborator.nombre}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            placeholder="Correo del colaborador"
            name="correo"
            className="form-control"
            onChange={inputHandle}
            value={collaborator.correo}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Edad del colaborador"
            name="edad"
            className="form-control"
            onChange={inputHandle}
            value={collaborator.edad}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Cargo del colaborador"
            name="cargo"
            className="form-control"
            onChange={inputHandle}
            value={collaborator.cargo}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Teléfono del colaborador"
            name="telefono"
            className="form-control"
            onChange={inputHandle}
            value={collaborator.telefono}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
};

export default DocumentForm;