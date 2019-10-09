import React, {Component} from 'react';

class TemperatureInput extends Component {
    render() {
        return (
            <fieldset>
                <legend>enter temperature in { this.props.scale === 'c' ?  'Celsius' : 'Fahrenheit'}</legend>
                <input onChange={(e) => this.props.onTemperatureChange(e.target.value)} value={this.props.temperature}/>
            </fieldset>
        );
    }
}

export default TemperatureInput;