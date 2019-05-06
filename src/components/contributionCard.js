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
    textAlign: "right",
    float: "right",
  }
};

class ContributionCard extends React.Component {
  constructor(){
    super()
  }

  render(){
    const { classes, contributionObj } = this.props;
    return(
      <React.Fragment>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {contributionObj.project.name}
            </Typography>
            <Typography component="p">
              Status of contribution: {contributionObj.approved ? "approved" : "not approved"}
              <br />
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" className={classes.projectButton}>View Contribution</Button>
          </CardActions>
        </Card>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(ContributionCard);
