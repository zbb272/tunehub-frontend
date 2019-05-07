import React, { Component } from 'react';
import ProjectCard from  '../components/projectCard';
import ContributionCard from  '../components/contributionCard';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router-dom';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Dashboard extends Component {
  constructor(){
    super()
  }

  render(){
    const { isAuthenticated, classes, userObj, newProjectEventHandler, projectViewEventHandler } = this.props;
    return(

      <div className={classes.root}>
        {!isAuthenticated ?
          <Redirect
            to={{
              pathname: "/login",
              state: { from: "" }
            }}
          />
          :
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <h1>Dashboard for {userObj.username}</h1>
            </Grid>
            <Grid item xs={6}>
              <h2>My Projects</h2>
                <Button variant="contained" className={classes.button} onClick={newProjectEventHandler}>
                  Create New Project
                </Button>
              {userObj.projects.map(proj => <ProjectCard projObj={proj} viewProjectEventHandler={projectViewEventHandler}/>)}
            </Grid>
            <Grid item xs={6}>
              <h2>My Contributions</h2>
              {userObj.contributions.map(cont => <ContributionCard contributionObj={cont} />)}
            </Grid>
            <Grid item xs={12}>
              <div>
                bottom block here featuring different projects people are working on
              </div>
            </Grid>

          </Grid>
        }

      </div>
    )
  }
}

export default withStyles(styles)(Dashboard);
