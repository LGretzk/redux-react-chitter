import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from '../routes/Home/Home'
import Peeps from '../routes/Peeps/Peeps'
import PeepDetails from '../routes/PeepDetails/PeepDetails';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/peeps" element={<Peeps/>} />
        <Route path="/peeps/:peepId" element={<PeepDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
