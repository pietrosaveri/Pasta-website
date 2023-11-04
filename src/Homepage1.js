import React from 'react';
import './Homepage2.css';
import { AiFillQuestionCircle } from 'react-icons/ai';
import './aboutUs01.css'

const Homepage = ({ onButtonClick, onButton2Click, openAboutUs }) => {

    return (
        <div className="homepage">
            <h1>Welcome pasta eaters</h1>
            <div className='paragaph-text'>
                <p>Pasta Converter is your ultimate kitchen assistant, simplifying the art of cooking pasta. 
                    Wondering how much pasta to cook for your guests? We've got you covered. 
                    Just tell us the number of flat plates or soup plates you're serving, and we'll instantly calculate the perfect grams of pasta for your meal. 
                    Say goodbye to guesswork and hello to precision in your pasta portions.<br></br>
                    Buon appetito!</p>
            </div>
            <div className="button-container">
                {/* Plates to grams */}
                <button className="hover-button_Plates" onClick={onButtonClick}></button> 
                {/* grams to plates */}
                <button className="hover-button_Grams" onClick={onButton2Click}></button>
            </div>

            <button className='buttonUS' onClick={openAboutUs}>
                <AiFillQuestionCircle className='question-mark '/>
                </button>
        </div>
    );
};

export default Homepage;
