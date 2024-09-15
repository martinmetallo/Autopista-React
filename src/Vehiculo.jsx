import React from 'react'
import { useTable } from 'react-table';

const Vehiculo = ({ vehicles }) => {
    return (
      <div className="table-responsive">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th>Patente</th>
              <th>Hora de registro</th>
              <th>Tipo de vehículo</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle, index) => (
              <tr key={index}>
                <td>{vehicle.patente}</td>
                <td>{vehicle.hora}</td>
                <td>{vehicle.tipo}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      );
}

export default Vehiculo
