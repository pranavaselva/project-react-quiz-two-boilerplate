import React, { useState } from "react";


class Quiz extends React.Component{
    constructor(props){
        super(props);
        console.log(props.value)
        this.state = {
            currentIndex:0,
        };
    }

    prevQuestion = () =>{
        if(this.state.currentIndex==0){
            this.setState(0);
        }else{
            this.setState((prev) => ({
                currentIndex:prev.currentIndex-1,
            }));
        }
    };

    nextQuesiton = () => {
        if(this.state.currentIndex==9){
            this.setState(9);
        }else{
            this.setState( (next) => ({
                currentIndex:next.currentIndex+1,
            }))
        }
    };

    quitGame = () => {
        alert ("Are you sure you want to quit ?")
    }

    render() {
        let data = this.props.value
        let curQuestion = this.state.currentIndex;

            return(
                <div className="container">
                    <h1 className="heading">Quesiton</h1>
                    <h6 className="number">1 of 10</h6> 
                    <h4 className="question" >{data[curQuestion].quesiton}</h4>
        
                    <ul className="options">
                        <li>{data[curQuestion].optionA}</li>
                        <li>{data[curQuestion].optionB}</li>
                        <li>{data[curQuestion].optionC}</li>
                        <li>{data[curQuestion].optionD}</li>
                    </ul>
                    <div className="buttons">
                        <button onClick={this.prevQuestion} className="prev" >Previous</button>
                        <button onClick={this.nextQuesiton} className="next" >Next</button>
                        <button onClick={this.quitGame} className="quit" >Quit</button>
                    </div>
                </div>
            )
        }
        
}



export default Quiz; 