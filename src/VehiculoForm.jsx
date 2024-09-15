import React,{ useState } from 'react'

const VehiculoForm = ({ addVehicle }) => {
    const [patente, setPatente] = useState('');
    const [hora, setHora] = useState('');
    const [tipo, setTipo] = useState('Auto');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addVehicle({ patente, hora, tipo });
      setPatente('');
      setHora('');
      setTipo('Auto');

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Patente:</label>
          <input
            type="text"
            value={patente}
            onChange={(e) => setPatente(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Hora de registro:</label>
          <input
            type="datetime-local"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Tipo de vehículo:</label>
          <select className="form-select" value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="Moto">Moto</option>
            <option value="Auto">Auto</option>
            <option value="Camión">Camión</option>
          </select>
        </div>
        
         <button className="btn btn-primary" type="submit">Agregar Vehículo</button> 
      </form>
    );
}

export default VehiculoForm
