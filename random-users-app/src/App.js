import React, {Component} from 'react';
import './App.css';
import Users from './Components/Users'

class App extends Component {

    state = {
      show: false
    }

    handleClick =()=>{
      this.setState({show: !this.setState.show})
    }

  render(){
    return(
      <div className="backdrop">
      {this.state.show ? (
          <Users />
      ) : (
        <p>Manage Current Users</p>
      )}
      <button onClick={this.handleClick}>Show Users</button>
      </div>
    )
  }
}

export default App;

