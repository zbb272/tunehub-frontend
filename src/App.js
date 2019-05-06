import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './containers/project';
import NavBar from './components/navBar';
import Dashboard from './containers/dashboard';
import Login from './containers/login';
import ReactDOM from 'react-dom';

const usersURL = "http://localhost:3000/api/v1/users";
const projectsURL = "http://localhost:3000/api/v1/projects";
const contributionsURL = "http://localhost:3000/api/v1/contributions";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      currentProject: null,
    }
  }

  componentDidMount(){
    fetch(usersURL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        // this.setState({
        //   currentUser: data,
        // })
      })
  }

  loginSubmissionEventHandler = (usernamePasswordObj) => {
    fetch(usersURL)
      .then(res => res.json())
      .then(data => {
        data.forEach(user => {
          if(user.username === usernamePasswordObj.username && user.password_digest === usernamePasswordObj.password_digest){
            this.setState({
              currentUser: user,
            })
          }
        })
        if(this.state.currentUser === null){
          window.alert("No user found or password incorrect")
        }
      })
  }

  signupSubmissionEventHandler = (usernamePasswordObj) => {
    fetch(usersURL, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usernamePasswordObj)
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        currentUser: data,
      })
    })
  }

  projectViewEventHandler = (project) => {
    fetch(projectsURL + `/${project.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentProject: data
        })
      })
  }

  createNewProjectHandler = () => {
    let newProjData = {
        user_id: this.state.currentUser.id,
        name: "new project",
    }
    fetch(projectsURL, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProjData)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          currentProject: data
        })
      })
  }

  render(){
    return (
      <div className="App">
        <NavBar />
        {this.state.currentUser === null
          ? <Login loginSubmit={this.loginSubmissionEventHandler} signUpSubmit={this.signupSubmissionEventHandler}/>
          : null }
        {this.state.currentUser !== null &&  this.state.currentProject === null
          ? <Dashboard userObj={this.state.currentUser} newProjectEventHandler={this.createNewProjectHandler} projectViewEventHandler={this.projectViewEventHandler}/>
        : null }
        {this.state.currentUser !== null &&  this.state.currentProject !== null
          ? <Project userObj={this.state.currentUser} projObj={this.state.currentProject}/>
        : null }
      </div>
    );
  }

}
//<Project />

export default App;
