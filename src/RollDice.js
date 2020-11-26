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
        // returns random num from 0 - 5
        return Math.floor(Math.random() * 6);
    }

    roll() {
        // generate random numbers for all dice
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
        const dieArr = [];
        const isRolling = this.state.rolling;
        this.state.dice.forEach(die => dieArr.push(<Die roll={die} rolling={isRolling} />))
        const btnText = (isRolling ? "Rolling...": "Roll");

        return(
            <div className="dice-container">
                {dieArr}
                <button onClick={this.roll} disabled={isRolling}>{btnText}</button>
            </div>
        )
    }
}

export default RollDice;
