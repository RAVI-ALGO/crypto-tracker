
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Trending from './pages/TrendingPage';
import Favourite from './pages/Favourite';
import CryptoDetail from './components/cryptoDetails';


function App() {
  return (
    <Routes>
    <Route exact path='/' element={<Home />} >
    <Route exact path='/:coinId' element={<CryptoDetail />} />
    </Route>
    <Route exact path='/trending' element={<Trending />} />
    <Route exact path='/faourite' element={<Favourite />} />

    </Routes>
  );
}

export default App;
