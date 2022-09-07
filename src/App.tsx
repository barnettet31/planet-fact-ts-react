import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/nav-bar/navbar.component';
import planetData from  './data/data.json';
import { PlanetPage } from './routes/planet.route';



function App() {
  return (
  <Routes>
    <Route   element={<NavBar/>}>
      {
        planetData.map((planet, index)=><Route  key={planet.name} path={index === 0 ? "/":`/${planet.name.toLowerCase()}`} element={<PlanetPage planet={planet}/>}/>)
      }
    </Route>
    
  </Routes>
  );
}

export default App;
