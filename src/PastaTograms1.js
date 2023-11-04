import React, {useState, useRef, useEffect } from 'react';
import './PastaTograms2.css';
import Calcultor from './calcultor'
import { AiFillHome } from 'react-icons/ai';

const PastaToGrams = ({onButtonClick, page}) => {

    const [InsertFlatPlates, setInsertFlatPlates] = useState(false);
    const [plateType, setPlateType]  = useState(null);
    const [InsertSoupPlates, setInsertSoupPlates] = useState(false);
    const [isEnlargedFlat, setIsEnlargedFlat] = useState(false);
    const [isEnlargedSoup, setIsEnlargedSoup] = useState(false);


    const InsertFlatPlatesTrue = () => {
        setInsertSoupPlates(false);
        setInsertFlatPlates(true);
        setPlateType('flat');
    }
    
    const InsertSoupPlatesTrue = () => {
        setIsEnlargedFlat(false);
        setIsEnlargedSoup(true);
        setInsertFlatPlates(false);
        setInsertSoupPlates(true);
        setPlateType('soup');
    }

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

    const button1Actions = () => {
        setIsEnlargedFlat(!isEnlargedFlat);
        setIsEnlargedSoup(false)
        InsertFlatPlatesTrue();
    };


    return (
        <div className='PastaToGrams'>
            <h1>From Plates to grams</h1>
            <div className='text-plates01 '>
                <p>Select the type of plate that you prefer.</p>
            </div>
            <div>

                <button className="hover-goBakcbutton01" onClick={onButtonClick}> 
                    < AiFillHome className='home-icon01'/>
                </button>

            </div>

            <div className='choiche_container01'>
                <button className={`flat_plates01 ${isEnlargedFlat ? 'bigger' : ''}`} onClick={button1Actions}></button>
                <button className={`soup_plates01 ${isEnlargedSoup ? 'bigger' : ''}`} onClick={InsertSoupPlatesTrue}></button>
            </div>

            {InsertFlatPlates && (
            <div className='InsertPlatesTrueTEXT01' ref={textRef}>
                <h1>Insert the amount of flat plates that you would like to eat.</h1>
                <Calcultor plateType={plateType} page={page} />
            </div>
            )}

            {InsertSoupPlates && (
                <div className='InsertPlatesTrueTEXT01' ref={textRef}>
                <h1>Insert the amount of soup plates that you would like to eat.</h1>
                <Calcultor plateType={plateType} page={page} />

            </div>
            )}

        </div>
    );
};

export default PastaToGrams;
