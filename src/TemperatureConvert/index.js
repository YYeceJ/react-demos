import React, {Component} from 'react';
import TemperatureInput from './component/TemperatureInput'
import BoilingVerdict from './component/BoilingVerdict'

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(input,convert){
    let temperature = parseFloat(input)
    if(Number.isNaN(temperature)){
        return ''
    }
    let convertResult = convert(temperature)
    let output = Math.round( convertResult * 1000) / 1000
    return output.toString()
}

class Calculator extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            temperature : '',
            scale : ''
        }
    }

        render() {
        let temperature = this.state.temperature
        let scale = this.state.scale
        let celsius = scale === 'c' ?  temperature : tryConvert(temperature,toCelsius)
        let fahrenheit = scale === 'f' ?  temperature : tryConvert(temperature,toFahrenheit)
        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius}  onTemperatureChange={(temperature) => {this.setState({scale : 'c',temperature})}}/>
                <TemperatureInput scale='f' temperature={fahrenheit}  onTemperatureChange={(temperature) => {this.setState({scale : 'f',temperature})}}/>
                <BoilingVerdict celsius={scale === 'c' ? temperature : tryConvert(temperature,toCelsius)}/>
            </div>
        );
    }
}

export default Calculator;