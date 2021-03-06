import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const styles = {
  card: {
    minWidth: 275,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  projectButton: {
    float: "right",
  },
  deleteButton:{
    marginLeft: "60%",
    textAlign: "right"
  }
};

class ProjectCard extends React.Component {
  constructor(){
    super()
  }

  render(){
    const { classes, projObj, viewProjectEventHandler, deleteProjectEventHandler } = this.props;
    let numPendingCon = (projObj.contributions.filter(con => con.pending === true)).length
    return(
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {projObj.name}
            </Typography>
            <Typography component="p">
              Number of Contributions: {projObj.contributions.length}
              <br />
            </Typography>
            <Typography component="p">
              Pending Contributions: {numPendingCon}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className={classes.projectButton} onClick={() => viewProjectEventHandler(projObj)}>View Project</Button>
            <Button size="small" className={classes.deleteButton} onClick={() => deleteProjectEventHandler(projObj)}>Delete</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ProjectCard);
