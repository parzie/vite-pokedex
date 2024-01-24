

import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Pokedex from './pages/Pokedex';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  )
}

export default App
