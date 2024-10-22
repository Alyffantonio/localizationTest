import React from 'react';
import { addGeoPoint } from './services/dataAcess/geoPointAcess';

const App: React.FC = () => {
  const testAddGeoPoint = async () => {
    try {
      const docId = await addGeoPoint(45.697, -223.486);
      console.log('Document written with ID: ', docId);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Chamando a função diretamente aqui
  testAddGeoPoint();

  return (
    <div className="App">
      <h1>Teste de adição de GeoPoint</h1>
    </div>
  );
};

export default  App;