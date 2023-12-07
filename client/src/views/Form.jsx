import React from "react";

const Form = () => {
  return (
    <div className="p-5">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nombre</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nombre completo"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Celular</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Numero celular"
          />
        </div>
        <div className="form-check"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
