import React,{ useState } from 'react'
import Vehiculo from './Vehiculo';
import VehiculoForm from './VehiculoForm';

const App = () => {
    const [vehicles, setVehicles] = useState([]);
    const addVehicle = (vehicle) => {
        setVehicles([...vehicles, vehicle]);
      };
    

  return (
    <div lassName="container mt-5">
       <h1 className="mb-4 text-center">Registro de Vehículos</h1>
       <div className="row mb-4 justify-content-center">
       <div className="col-md-6">
       <div className="card p-4 shadow-sm">
        <VehiculoForm addVehicle={addVehicle} />
        <Vehiculo vehicles={vehicles} />
        </div>
        </div>
        </div>
    </div>
  )
}

export default App
