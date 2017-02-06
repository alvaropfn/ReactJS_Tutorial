/**
 * Created by Alvaro on 01/02/2017.
 */
import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor(){
        super()
        this.state = {
            squares:[null,null,null,
                    null,null,null,
                    null,null,null]
        }
    }

    render() {
        return (
            <div className="Board">
                <div className="board-row">
                    <Square mid="0"/>
                    <Square mid="1"/>
                    <Square mid="2"/>
                </div>
                <div className="board-row">
                    <Square mid="3"/>
                    <Square mid="4"/>
                    <Square mid="5"/>
                </div>
                <div className="board-row">
                    <Square mid="6"/>
                    <Square mid="7"/>
                    <Square mid="8"/>
                </div>
            </div>
        );
    }
}

export default Board;

