import React, { Component } from 'react';

class SimpleEvent extends Component {
    constructor(props) {
        super(props);
        this.state={toggleStatus:true}

        this.handleClick=this.handleClick.bind(this)
}

handleClick() {
    this.setState(state => ({toggleStatus: !state.toggleStatus}))
    console.log(this.state.toggleStatus);
}

    render() { 
        return (   
        <div>
            <img alt='' className={!this.state.toggleStatus ? 'imgon' : 'imgoff'}  src={require('../images/indi1.jpg')} />  
            <button onClick={this.handleClick}>
            {this.state.toggleStatus ? 'ON' : 'OFF'}
            </button>
        </div>  
        );
    }
}

export default SimpleEvent;