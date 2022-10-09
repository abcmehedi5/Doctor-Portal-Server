import React from 'react';
import './App.css'

import PatientManagment from './Componets/PatientManagment/PatientManagment';
import GetPost from './Componets/ReducerComponets/GetPost/GetPost';
import RedicerCout from './Componets/ReducerCount/RedicerCout';
const App = () => {
  return (
    <div className='App'>
      <h1>Use Reducer</h1>
      <hr />
      <hr />
      <RedicerCout></RedicerCout>
      <PatientManagment></PatientManagment>
      <GetPost></GetPost>
    </div>
  );
};

export default App;