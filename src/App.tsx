import './App.css';
import React from 'react';
import Body from './components/body/Body';
import About from './components/about/About';
import Footer from './components/footer/footer';
import QualityCards from './components/qualityCards/QualityCard';


function App() {
  return (
    <div className="App" >
    <Body />
     <About />
    <QualityCards />
   <Footer />
    </div>
  );
}

export default App;
