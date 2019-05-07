import React, {Component} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import ButtonBase from '@material-ui/core/ButtonBase';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import AccountCircle from '@material-ui/icons/AccountCircle';
import theme from '../theme';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  shoppingCartIcon: {
    marginLeft: 20,
  }
});

class NavBar extends Component {

  render(){
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
              <ButtonBase >
                <SurroundSoundIcon className="surroundSoundIcon"/>
              </ButtonBase>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                Tunehub
              </Typography>
              <div className={classes.grow} />
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
              <div className={classes.shoppingCartIcon}>
                <ButtonBase onClick={this.props.profileIconClickHandler}>
                  <AccountCircle />
                </ButtonBase>
              </div>
            </Toolbar>
          </AppBar>
        </div>
      </MuiThemeProvider>
    )
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
