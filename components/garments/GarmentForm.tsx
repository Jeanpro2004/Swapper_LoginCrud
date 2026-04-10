"use client";

export default function GarmentForm() {
  return (
    <form className="garment-form">
      <fieldset>
        <legend>Registrar prenda</legend>

        <div className="form-group">
          <label htmlFor="title">Nombre</label>
          <input id="title" type="text" placeholder="Chaqueta denim" />
        </div>

        <div className="form-group">
          <label htmlFor="description">Descripción</label>
          <textarea id="description" rows={4} placeholder="Describe la prenda" />
        </div>

        <div className="form-group">
          <label htmlFor="size">Talla</label>
          <input id="size" type="text" placeholder="M" />
        </div>

        <div className="form-group">
          <label htmlFor="brand">Marca</label>
          <input id="brand" type="text" placeholder="Zara" />
        </div>

        <div className="form-group">
          <label htmlFor="condition">Estado</label>
          <select id="condition">
            <option value="">Selecciona una opción</option>
            <option value="new">Nuevo</option>
            <option value="almost_new">Casi nuevo</option>
            <option value="used">Usado</option>
          </select>
        </div>

        <button type="submit" className="primary-btn">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}