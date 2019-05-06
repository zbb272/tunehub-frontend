import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';



const styles = {
  card: {
    maxWidth: 275,
    marginBottom: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 50,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
  button: {
    maxHeight: 50,
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10,
  }
};

class SignupForm extends React.Component {
  constructor(){
    super();
  }

  render(){
    const { classes, submissionEventHandler, usernameChangeHandler, passwordChangeHandler, passwordConfirmChangeHandler } = this.props;
    return(
      <React.Fragment>
        <Card className={classes.card}>
          <h2>Sign up</h2>
          <h5>Fill in the form below to start using tunehub</h5>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={submissionEventHandler}>
            <TextField
              required
              id="filled-name"
              label="Username"
              className={classes.textField}
              margin="normal"
              variant="filled"
              onChange={usernameChangeHandler}
            />
            <br/>
            <TextField
              required
              id="filled-password-input"
              label="Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="filled"
              onChange={passwordChangeHandler}
            />
            <br/>
            <TextField
              required
              id="filled-password-input"
              label="Confirm Password"
              className={classes.textField}
              type="password"
              margin="normal"
              variant="filled"
              onChange={passwordConfirmChangeHandler}
            />
            <br/>
            <Button variant="contained" type="Submit" className={classes.button}>
              Submit
            </Button>
          </form>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(SignupForm);
