import React, { Component } from 'react';

import Die from './Die'

class RollDice extends Component {
    constructor(){
        super();
        this.state = {
            dice: [1, 1],
            numOfDice: 2,
            rolling: false,
        }
        this.roll = this.roll.bind(this);
        this.rollCompleted = this.rollCompleted.bind(this);
    }

    getRandomNum() {
        return Math.floor(Math.random() * 6);
    }

    roll() {
        // generate random numbers for both dice
        let newDiceArr = this.state.dice.map(this.getRandomNum);
        this.setState({
            dice: newDiceArr,
            rolling: true
        })

        setTimeout(this.rollCompleted,1000);
    }

    rollCompleted() {
        this.setState({
            rolling: false 
        })
    }

    render() {
        // TODO: rename items
        const items = [];

        const isRolling = this.state.rolling;
        this.state.dice.forEach(item => items.push(<Die roll={item} rolling={isRolling} />))
        

        return(
            <div className="dice-container">
                {items}
                <button onClick={this.roll}>Roll</button>
            </div>

        )
    }
}

export default RollDice;