import React from 'react';
import './App.css';
import data from './Components/Data'
import DataComponent from './Components/DataComponent'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        people: data,
        i: 0
    }
  }

  handleClick = (e) => {
    if(e.target.name === 'next'){
        this.setState({
            i: this.state.i + 1
        })
    }   else {
        this.setState({
            i: this.state.i - 1
        })
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          Home
        </header>
        <div className='App-main'>
          {<DataComponent person={this.state.people[this.state.i]} />}
          <div className='Button-div'>
            <button className='App-button' name="next" onClick={this.handleClick}> Next &#62; </button>
            <span className='counter'> {this.state.i + 1}/25 </span>
            <button className='App-button' name="previous" onClick={this.handleClick}> &#60; Previous</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
