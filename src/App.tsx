import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PlayerVersusPage from './components/PlayerVersusPage';
import { TestPlayerPage } from './components/TestPlayerPage';

function App() {

   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/user/:identifier" element={<PlayerVersusPage />} />
         <Route path="/test" element={<TestPlayerPage />} />
      </Routes>
   )
}

export default App
