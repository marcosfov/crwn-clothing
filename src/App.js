import { Routes, Route } from 'react-router-dom'

import Home from "./routes/home/home.component";
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} /> 
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}
