import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landing from './Home/Landing.jsx';
import Services from './Services.jsx';

export default function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<Landing />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  )
}
