import React, {Component} from 'react';

class BoilingVerdict extends Component {
    render() {
        let celsius = this.props.celsius
        if (celsius >= 100){
            return <p>{celsius}——The water would boil.</p>;
        }
        return <p>{celsius}——The water would not boil.</p>;
    }
}

export default BoilingVerdict;