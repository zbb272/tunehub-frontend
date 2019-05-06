import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './containers/project';
import NavBar from './components/navBar';
import Dashboard from './containers/dashboard';
import ReactDOM from 'react-dom';

const URL = "http://localhost:3000/api/v1/users/25/";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
    }
  }

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          currentUser: data,
        })
      })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        {this.state.currentUser === null ? null : <Dashboard userObj={this.state.currentUser} />}


      </div>
    );
  }

}
//<Project />

export default App;
