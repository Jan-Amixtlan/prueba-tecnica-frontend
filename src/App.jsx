

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreens from './pages/HomeScreens.jsx';
import AboutScreen from './pages/AboutScreen.jsx';
import ServicesGrid from './pages/ServicesGrid.jsx';
import ServicesList from './pages/ServicesList.jsx';
import ServicesSingle from './pages/ServicesSingle.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services/grid" element={<ServicesGrid />} />
        <Route path="/services/list" element={<ServicesList />} />
        <Route path="/services/single" element={<ServicesSingle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
