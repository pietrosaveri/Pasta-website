import React from 'react';
import './aboutUs01.css';
import { AiFillHome } from 'react-icons/ai';


const AboutUs = ({ onButtonClickUS }) => {
    return (
        <div className='about-us-container'>

            <div className='text'>
                <div>
                    <button className="hover-goBakcbuttonUS" onClick={onButtonClickUS}>
                        < AiFillHome className='home-iconUS' />
                    </button>
                </div>
                <h1>Welcome to Pasta Converter: Your Ultimate Pasta Portion Calculator!</h1>
                <p>
                    Are you planning a pasta night and wondering how much pasta to cook for your guests? Look no further! The Pasta Converter is your go-to tool for effortlessly determining the perfect pasta portion, tailored to your specific needs.
                </p>

                <h2>How Does It Work?</h2>
                <p>
                    Our site simplifies the process of converting the number of plates of pasta you need into precise grams. We understand that not all plates are created equal, so we've got you covered with two popular plate types: flat plates and soup plates.
                </p>

                <h3>Flat Plates:</h3>
                <ul>
                    <li>Ideal for dishes with a flat surface like spaghetti, fettuccine, or linguine.</li>
                    <li>Simply enter the number of flat plates you'd like to serve, and our converter will calculate the corresponding grams of pasta required.</li>
                </ul>

                <h3>Soup Plates:</h3>
                <ul>
                    <li>Designed for pasta dishes with more depth, such as penne, rigatoni, or maccheroni.</li>
                    <li>Input the number of soup plates needed, and our converter will provide you with the accurate pasta weight.</li>
                </ul>

                <h2>Why Use Pasta Converter?</h2>
                <ul>
                    <li><strong>Precision:</strong> No more guessing or ending up with leftovers. Our tool ensures you cook just the right amount of pasta for your gathering.</li>
                    <li><strong>Versatility:</strong> Whether you're preparing a classic spaghetti al ragù or a healty carbonara, Pasta Converter adapts to your dish.</li>
                    <li><strong>Time-Saver:</strong> Say goodbye to complex calculations. We do the math for you, making meal planning a breeze.</li>
                    <li><strong>User-Friendly:</strong> Our user-friendly interface ensures a seamless experience, whether you're a novice or an experienced cook.</li>
                </ul>

                <p>No more pasta portions gone wrong! Let Pasta Converter be your kitchen companion, and serve up perfect pasta dishes every time.<br></br> 
                    Enjoy your culinary adventures, and remember that the secret to a great meal often starts with getting the pasta portion just right. <br></br>
                    Buon appetito!</p>
            </div>
        </div>
    );
}

export default AboutUs;
