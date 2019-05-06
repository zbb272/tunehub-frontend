import React, { Component } from 'react';
import SignupForm from '../components/signupForm';
import LoginForm from '../components/loginForm';

class Login extends Component {
  constructor(){
    super()
    this.state = {
      signUp: false,
      username: "",
      password: "",
      passwordConfirm: "",
    }
  }

  usernameChangeHandler = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  passwordConfirmChangeHandler = (event) => {
    this.setState({
      passwordConfirm: event.target.value
    })
  }

  signupSubmissionEventHandler = (event) => {
    event.preventDefault();
    if(this.state.password === this.state.passwordConfirm){
      this.props.signUpSubmit({username: this.state.username, password_digest: this.state.password})
    } else {
      window.alert("Passwords do not match")
    }
  }

  loginSubmissionEventHandler = (event) => {
    event.preventDefault();
    if(this.state.password === this.state.passwordConfirm){
      this.props.loginSubmit({username: this.state.username, password_digest: this.state.password})
    } else {
      window.alert("Passwords do not match")
    }
  }

  signupEventHandler = () => {
    this.setState({
      signUp: true,
      username: "",
      password: "",
      passwordConfirm: "",
    })
  }

  render(){
    return(
      <div className="loginPageContainer">
        <div>
          {this.state.signUp ?
            <SignupForm
            submissionEventHandler={this.signupSubmissionEventHandler}
            usernameChangeHandler={this.usernameChangeHandler}
            passwordChangeHandler={this.passwordChangeHandler}
            passwordConfirmChangeHandler={this.passwordConfirmChangeHandler}/>
          : <LoginForm
            submissionEventHandler={this.loginSubmissionEventHandler}
            usernameChangeHandler={this.usernameChangeHandler}
            passwordChangeHandler={this.passwordChangeHandler}
            passwordConfirmChangeHandler={this.passwordConfirmChangeHandler}
            signupEventHandler={this.signupEventHandler}/> }

        </div>
      </div>

    )
  }
}

export default Login;
