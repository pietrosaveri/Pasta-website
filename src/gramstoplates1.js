import React, { useState, useRef, useEffect } from 'react';
import './gramstoplates2.css';
import Calcultor from './calcultor'
import { AiFillHome } from 'react-icons/ai';

const GramsToplates = ({ onButtonClick, page}) => {

    const [InsertFlatPlates, setInsertFlatPlates] = useState(false);
    const [InsertSoupPlates, setInsertSoupPlates] = useState(false);
    const [plateType, setPlateType] = useState(null);
    const [isEnlargedFlat, setIsEnlargedFlat] = useState(false);
    const [isEnlargedSoup, setIsEnlargedSoup] = useState(false);

    const textRef = useRef(null);

    useEffect(() => {
        if (InsertFlatPlates || InsertSoupPlates) {
            scrollToText();
        }
    }, [InsertFlatPlates, InsertSoupPlates]);

    const scrollToText = () => {
        if (textRef.current) {
            textRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const InsertFlatPlatesTrue = () => {
        setIsEnlargedFlat(true)
        setIsEnlargedSoup(false)
        setInsertSoupPlates(false);
        setInsertFlatPlates(true);
        setPlateType('flat');
    }

    const InsertSoupPlatesTrue = () => {
        setIsEnlargedFlat(false)
        setIsEnlargedSoup(true)
        setInsertFlatPlates(false);
        setInsertSoupPlates(true);
        setPlateType('soup');
    }

    return (

        <div className='GramsToplates'>
            <h1>From Grams to Plates</h1>
            <div className='text-plates02'>
                <p>Select the type of plate that you prefer.</p>
            </div>
            <div>
                <button className="hover-goBakcbutton02" onClick={onButtonClick}>
                    <AiFillHome className='home-icon02'/>
                </button>
            </div>

            <div className='choiche_container02'>
                <button className={`flat_plates01 ${isEnlargedFlat ? 'bigger' : ''}`} onClick={InsertFlatPlatesTrue}></button>
                <button className={`soup_plates01 ${isEnlargedSoup ? 'bigger' : ''}`} onClick={InsertSoupPlatesTrue}></button>
            </div>

            {InsertFlatPlates && (
                <div className='InsertPlatesTrueTEXT02' ref={textRef}>
                    <h1>Insert the amount of grams that ypu would like to eat in a flat plate.</h1>
                    <Calcultor plateType={plateType} page={page} />

                </div>
            )}

            {InsertSoupPlates && (
                <div className='InsertPlatesTrueTEXT02' ref={textRef}>
                    <h1>Insert the amount of grams that ypu would like to eat in a soup plate.</h1>
                    <Calcultor plateType={plateType} page={page} />


                </div>
            )}
        </div>

    );
};

export default GramsToplates;
