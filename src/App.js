import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import Test from './components/Test';
import ReactHlsPlayer from 'react-hls-player';
import Header from './icons/Header'
import { Route, Routes, Router, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import About from './components/About'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route exact path='/' element={<Body />} />
        <Route path='/cams/:city' element={<Test />} />

      </Routes>
      </AnimatePresence>
     
     <About />
   

    </div>
  );
}

export default App;

/*

<div className="App">
       <ReactHlsPlayer
      src="http://162.210.14.137:1935/rtplive/CAM115/playlist.m3u8"
      autoPlay={true}
      controls={true}
      width="100%"
      height="auto"
    />

    */