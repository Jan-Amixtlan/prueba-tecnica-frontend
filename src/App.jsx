
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreens from './pages/HomeScreens.jsx';
import AboutScreen from './pages/AboutScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
