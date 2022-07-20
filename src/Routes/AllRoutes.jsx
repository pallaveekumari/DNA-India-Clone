import React from 'react'
import { Routes,Route } from 'react-router-dom';
import Description from './Description';
import Homepage from './Homepage';
import Latestnews from './Latestnews';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Description" element={<Description/>}/>
      <Route path="/Latestnews" element={<Latestnews/>}/>
    </Routes>
  )
}

export default AllRoutes;
