import React, { useState } from 'react';
import './App.css';
import Homepage from './Homepage1';
import PastaToGrams from './PastaTograms1';
import AboutUs from './aboutUs'; 
import GramsToPlates from './gramstoplates1';

function App() {
  const [showPastaToGrams, setShowPastaToGrams] = useState(false);
  const [showGramsToPlates, setShowGramsToPlates] = useState(false);
  const [page, setpage] = useState(null);
  const [showAboutUs, setShowAboutUs] = useState(false);


  const openAboutUs = () => {
    setShowAboutUs(true);

  }

  const handlePastaToGrams = () => {
    setShowPastaToGrams(true);
    setShowGramsToPlates(false);
    setpage('platesToGrams')
  }

  const handleGramsToPlates = () => {
    setShowGramsToPlates(true);
    setShowPastaToGrams(false);
    setpage('gramsToPlates')

  }

  const goBack = () => {
    setShowPastaToGrams(false);
    setShowGramsToPlates(false);
    setShowAboutUs(false);
  }

  return (
    <div className="App">
      {showPastaToGrams && <PastaToGrams onButtonClick={goBack} page={page} />}
      {showGramsToPlates && <GramsToPlates onButtonClick={goBack} page={page} />}
      {showAboutUs && <AboutUs onButtonClickUS={goBack}/>}
      {!showPastaToGrams && !showGramsToPlates && !showAboutUs &&(
        <Homepage onButtonClick={handlePastaToGrams} onButton2Click={handleGramsToPlates} openAboutUs={openAboutUs} />
      )}
    </div>
  );
}

export default App;
