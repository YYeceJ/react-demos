import React, {Component} from 'react';
const FancyButton = React.forwardRef((props, ref) => (
    <input ref={ref}  placeholder='hello' />

))
class Parent extends Component {
    constructor(props, context) {
        super(props, context);
        this.r = React.createRef()
}

    handleClick(){
        this.r.current.placeholder= 'Clicked'
        this.r.current.focus()
    }

    render() {
        return (
            <div >
                <FancyButton ref={this.r} >Click me!</FancyButton>
                <button onClick={() => this.handleClick()}>点击</button>
            </div>
        );
    }
}

export default Parent;