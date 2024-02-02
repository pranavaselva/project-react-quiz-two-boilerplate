import React from "react";
import Quiz from "./Componenet/Quiz";
import Question from  "./question.json";
import  "./index.css";



class App extends React.Component{
  constructor(){
    super();
    this.state={
      index:0,
    }
  }

  render(){
    return (
      <div>
        <Quiz value={Question}/>
      </div>
    )
  }
}

export default App;