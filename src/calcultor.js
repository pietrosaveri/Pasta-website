import React, { Component } from 'react';
import './input.css';

class Calcultor extends Component {

    constructor() {
        super();
        this.state = {
            inputValue: '',
            result: '',
        }
    };

    errorMessage = 'Mamma mia enter a valid number please'

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleMultiply = (value) => {
        const inputValue = parseFloat(this.state.inputValue);
        const { plateType } = this.props; 

        if (!isNaN(inputValue)) {
            this.setState({ result: inputValue + ' ' + plateType + ' plates correspond to ' + inputValue * value + ' grams'});
        } else {
            this.setState({ result: this.errorMessage })
        }
    };

    handleMultiplyGrams = (value) => {
        const inputValue = parseFloat(this.state.inputValue);
        const { plateType } = this.props;
        const numberOfPlates = (inputValue / value).toFixed(1);

        if (!isNaN(inputValue)) {
            this.setState({ result: inputValue + ' grams correspond to ' + numberOfPlates +' '+ plateType +' plates'});
        } else {
            this.setState({ result: this.errorMessage })
        }
    };

    handleKeyPress = (e) => {
        const { plateType } = this.props;
        const { page } = this.props;

        let value = 0
        if (e.key === 'Enter') {

            if (page === 'platesToGrams'){
                if (plateType === 'flat') {
                    value = 95;
                }

                if (plateType === 'soup') {
                    value = 120;
                }
                this.handleMultiply(value);
            }

            if (page === 'gramsToPlates'){
                if (plateType === 'flat') {
                    value = 95;
                }

                if (plateType === 'soup') {
                    value = 120;
                }
                this.handleMultiplyGrams(value)

            }

        }
    };

    render() {
        const resultClassName = this.state.result === this.errorMessage ? 'erorr-message' : 'resultText';

        return(
            <div className='backgound-input'>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleKeyPress}
                    className='input-section '
                />
                <p className={resultClassName}> {this.state.result}</p>
            </div>
        );
    }

}

export default Calcultor;
