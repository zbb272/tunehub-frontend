import React from 'react';
import logo from './logo.svg';
import './App.css';
import Project from './containers/project';
import Contribution from './containers/contribution';
import NavBar from './components/navBar';
import Dashboard from './containers/dashboard';
import Login from './containers/login';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';

const usersURL = "http://localhost:3000/api/v1/users";
const projectsURL = "http://localhost:3000/api/v1/projects";
const contributionsURL = "http://localhost:3000/api/v1/contributions";

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentUser: null,
      currentProject: null,
      currentContribution: null,
      isAuthenticated: false,
      allProjects: [],
    }
  }

  componentDidMount(){
    this.checkLocalStorageForUser();
    fetch(projectsURL)
        .then(res => res.json())
        .then(data => {
          this.setState({
            allProjects: data,
          })
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
              isAuthenticated: true,
            })
          }
        })
        if(this.state.currentUser === null){
          window.alert("No user found or password incorrect")
        } else{
          this.saveUserToLocalStorage(this.state.currentUser)
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
        isAuthenticated: true,
      });
      this.saveUserToLocalStorage(this.state.currentUser);
    })
  }

  saveUserToLocalStorage = (userObj) => {
    localStorage.setItem("currentUser", JSON.stringify(userObj));
  }

  checkLocalStorageForUser = () => {
    if(localStorage.hasOwnProperty("currentUser")){
      let user = localStorage.getItem("currentUser");
      try {
        user = JSON.parse(user);
        this.setState({
          currentUser: user,
          isAuthenticated: true,
        })
      }
      catch(e){
        this.setState({
          currentUser: user,
        })
      }
    }
  }

  removeUserFromLocalStorage = () => {
    if(localStorage.hasOwnProperty("currentUser")){
      localStorage.removeItem("currentUser");
    }
  }

  projectViewEventHandler = (project) => {
    fetch(projectsURL + `/${project.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)

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
        let newAllProjects = [...this.state.allProjects]
        let newUser = {...this.state.currentUser}
        newUser.projects.push(data)
        newAllProjects.push(data);
        this.saveUserToLocalStorage(newUser);
        this.setState({
          currentProject: data,
          currentUser: newUser,
          allProjects: newAllProjects,
        })

      })
  }

  createNewContributionHandler = (contObj) => {
    console.log(contObj)
    fetch(contributionsURL, {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(contObj)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let newUser = {...this.state.currentUser}
        let newProj = {...this.state.currentProject}
        newProj.contributions.push(data);
        newProj.latest_contribution = data.id;
        newUser.contributions.push(data);
        newUser.projects.splice(newUser.projects.indexOf(this.state.currentProject), 1);
        newUser.projects.push(newProj);
        this.saveUserToLocalStorage(newUser);
        console.log(newUser)
        console.log(newProj)
        this.updateProjectLatestContribution(newProj.id, newProj.latest_contribution)
        this.setState({
          currentProject: newProj,
          currentUser: newUser,
          currentContribution: null,
        })

      })
  }

  updateProjectLatestContribution = (projectId, latestContId) => {
    fetch(projectsURL + `/${projectId}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({latest_contribution: latestContId})
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)

        this.setState({
          currentProject: data
        })
      })
  }

  deleteProjectEventHandler = (projObj) => {
    console.log(projObj.id)

    fetch(projectsURL + `/${projObj.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {console.log(data)});
    let newUser = {...this.state.currentUser}
    newUser.projects.splice(newUser.projects.indexOf(projObj), 1);
    this.setState({
      currentUser: newUser,
    });
    this.saveUserToLocalStorage(this.state.currentUser);
    // document.location.reload()
  }

  profileIconClickHandler = () => {
    if(this.state.currentUser !== null){
      this.setState({
        currentUser: null,
        isAuthenticated: false,
      })
      this.removeUserFromLocalStorage();
    }
  }

  contributeButtonHandler = () => {
    console.log("here")
    let contObj = {
      user_id: this.state.currentUser.id,
      project_id: this.state.currentProject.id,
      message: "",
      approved: true,
      pending: false,
      notes_attributes: [],
    }
    this.setState({
      currentContribution: contObj,
    })
  }

  saveProjectEventHandler = (notesForProject) => {
    console.log(notesForProject)
    let updatedProject = {...this.state.currentProject};
    updatedProject.notes = notesForProject;
    fetch(projectsURL + `/${this.state.currentProject.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProject)
    })
      .then(res => res.json())
      .then(data => {
        let newUser = {...this.state.currentUser}
        newUser.projects.splice(newUser.projects.indexOf(this.state.currentProject), 1);
        newUser.projects.push(data)
        this.setState({
          currentProject: data,
          currentUser: newUser,
        })
        this.saveUserToLocalStorage(newUser);
      })
  }

  render(){
    console.log(this.state.currentUser);
    console.log(this.state.currentProject);
    console.log(this.state.currentContribution)
    return (
      <Router>
        <div className="App">
          <NavBar profileIconClickHandler={this.profileIconClickHandler}/>

          <Route exact path="/login" render={routerProps => <Login isAuthenticated={this.state.isAuthenticated} loginSubmit={this.loginSubmissionEventHandler} signUpSubmit={this.signupSubmissionEventHandler} {...routerProps}/> }/>
          {this.state.currentUser !== null &&  this.state.currentProject !== null && this.state.currentContribution === null
            ? <Project saveProjectEventHandler={this.saveProjectEventHandler} userObj={this.state.currentUser} projObj={this.state.currentProject} contributeButtonHandler={this.contributeButtonHandler}/>
          : null }
          {this.state.currentUser !== null &&  this.state.currentProject !== null && this.state.currentContribution !== null
            ? <Contribution userObj={this.state.currentUser} projObj={this.state.currentProject} contObj={this.state.currentContribution} createNewContributionHandler={this.createNewContributionHandler}/>
          : null }
          <Route path={"/dashboard"} render={routerProps => <Dashboard isAuthenticated={this.state.isAuthenticated} userObj={this.state.currentUser} newProjectEventHandler={this.createNewProjectHandler} projectViewEventHandler={this.projectViewEventHandler} deleteProjectEventHandler={this.deleteProjectEventHandler} {...routerProps} />}/>


        </div>
      </Router>
    );
  }

}
//<Project />

export default App;


//commented out stuff
// {this.state.currentUser !== null &&  this.state.currentProject === null
//   ? <Dashboard userObj={this.state.currentUser} newProjectEventHandler={this.createNewProjectHandler} projectViewEventHandler={this.projectViewEventHandler}/>
// : null }
