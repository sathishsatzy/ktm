import './App.css';
import React from "react";


function Time(props){
  return <label>{props.date_time}</label>
};

class App extends React.Component {
  constructor(props){
    super(props)
    this.state =  {dateAndTime :new Date().toString()};
    this.showDT = this.showDT.bind(this);
  }

  showDT() {
    this.setState({ dateAndTime: new Date().toString()});
  }
  render(){
    return(
      <div className="App">
        <div className="App-header">
        <h1>Welcome Sathish</h1>
        <button onClick={this.showDT}>show date</button>
        <br/>
        <Time date_time={this.state.dateAndTime}/>
      </div>
      </div>
    )
  }
}



export default App;
