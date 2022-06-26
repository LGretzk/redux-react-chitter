import './App.css';

import {Routes, Route} from 'react-router-dom';
import Home from '../routes/Home/Home'
import Peeps from '../routes/Peeps/Peeps'
import PeepDetails from '../routes/PeepDetails/PeepDetails';
import Header from './Header/Header';
import Register from '../routes/Register/Register';
import Login from '../routes/Login/Login';

function setSessionKey(sessionKey) {
  sessionStorage.setItem('sessionKey', JSON.stringify(sessionKey));
}

function getSessionKey() {
  let keyString = sessionStorage.getItem('sessionKey');
  let userSessionKey = JSON.parse(keyString);
  return userSessionKey?.sessionKey
}

function App() {
  let sessionKey = getSessionKey();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/peeps" element={<Peeps/>} />
        <Route path="/peeps/:peepId" element={<PeepDetails/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login setSessionKey={setSessionKey} />} />
      </Routes>
    </div>
  );
}

export default App;
