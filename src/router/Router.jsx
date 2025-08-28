import { Routes, Route } from 'react-router-dom';
import {Layout} from '../layout/Layout';
import {Home} from '../pages/Home';
import {About} from '../pages/About';
import {Logement} from '../pages/Logement';
import {Erreur} from '../pages/Erreur';

export function Router() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Erreur />} />
      </Route>
    </Routes>
  );
}


