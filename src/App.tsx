import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PlayerVersusPage from './components/PlayerVersusPage';
import { TestPlayerPage } from './components/TestPlayerPage';
import { RootLayout } from './RootLayout';

function App() {

   return (
      <Routes>
         <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/user/:identifier" element={<PlayerVersusPage />} />
            <Route path="/test" element={<TestPlayerPage />} />
         </Route>
      </Routes>
   )
}

export default App
