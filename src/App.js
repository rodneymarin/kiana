import './App.css';
import Header from './header/header';
import Hero from './hero/hero';
import Products from "./products/products";
import Mission from "./mission/mission";
import History from "./history/history";
import Contact from "./contact/contact";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom';
import Commercials from './Commercials';
import Industrials from './Industrials';

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/comerciales" element={<Commercials/>} />
          <Route path="/industriales" element={<Industrials/>} />
        </Routes>
        <footer>
          ©2023 Kiana. All rights reserved
        </footer>
      </div>
  );
}

export default App;
