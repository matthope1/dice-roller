import React, { Component } from 'react';

class Die extends Component{
    static defaultProps = {
        faces: ["one", "two", "three", "four", "five", "six"],
    }

    render() {
        // let cName= `fas fa-dice-one fa-5x`;
        let cName= `fas fa-dice-${this.props.faces[this.props.roll]} fa-5x`;
        
        if (this.props.rolling)  {
            cName = cName + "move";
        }

        return(
            <div className="Die">
                <i className={cName}></i>
                {/* <h1>{this.props.faces}</h1> */}
            </div>
        )
    }
}

export default Die;
