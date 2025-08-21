
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreens from './pages/HomeScreens.jsx';
import AboutScreen from './pages/AboutScreen.jsx';


function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      {/* Navegación principal se gestiona en el Navbar, no aquí */}
      <Routes>
        <Route path="/" element={<HomeScreens />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
