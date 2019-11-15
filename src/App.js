import React from 'react';
import './App.css';
import data from './Data'
import DataComponent from './DataComponent'

class App extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
        people: data,
        i: 0
    }
  }

  handleNext = (e) => {
    if(this.state.i === this.state.people.length - 1){
      this.setState({
          i: 0
      })
    } else {
      this.setState({
        i: this.state.i + 1
      })
    }
  }

  handlePrev = (e) => {
    if(this.state.i === 0){
      this.setState({
          i: 24
      })
    } else {
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
          <DataComponent person={this.state.people[this.state.i]}>
            
          </DataComponent>
          <span className='counter'> {this.state.i + 1}/25 </span>
          <div className='Button-div'>
            <button className='App-button' name="next" onClick={this.handleNext}> Next &#62; </button>
            <button className='App-button' name="previous" onClick={this.handlePrev}> &#60; Previous</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
