import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import PlayerVersusPage from './components/PlayerVersusPage';

function App() {

   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/:identifier" element={<PlayerVersusPage />} />
      </Routes>
   )
}

export default App
