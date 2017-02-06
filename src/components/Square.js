/**
 * Created by Alvaro on 01/02/2017.
 */
import React, { Component } from 'react';


class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mid: props.mid,
            msg: ""
        }
    };


    hited =()=>{
        console.log(this.state);
    };

    render() {
        return (
            <button className="Square" onClick={this.hited}>X</button>
        );
    };
}

export default Square;
