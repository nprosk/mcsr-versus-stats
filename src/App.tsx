import { Route, Routes } from 'react-router-dom';
import './App.css'
import { useUserMatches } from './hooks/useUserMatches'
import Home from './components/Home';
import PlayerVersusPage from './components/PlayerVersusPage';

function App() {

   const { data, isLoading, error } = useUserMatches('nprosk');

   console.log("User matches data:", data);
   console.log("Loading state:", isLoading);
   console.log("Error state:", error);

   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/:identifier" element={<PlayerVersusPage />} />
      </Routes>
   )
}

export default App
