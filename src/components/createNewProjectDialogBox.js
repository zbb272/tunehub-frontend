// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import ListItemText from '@material-ui/core/ListItemText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Dialog from '@material-ui/core/Dialog';
// import PersonIcon from '@material-ui/icons/Person';
// import AddIcon from '@material-ui/icons/Add';
// import Typography from '@material-ui/core/Typography';
// import blue from '@material-ui/core/colors/blue';
//
// const emails = ['username@gmail.com', 'user02@gmail.com'];
// const styles = {
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600],
//   },
// };
//
// class createNewProjectDialogBox extends React.Component {
//   constructor(){
//     super()
//     this.state = {
//       text: "",
//     }
//   }
//
//   handleClose = () => {
//     this.props.onClose(this.props.selectedValue);
//   };
//
//   handleListItemClick = value => {
//     this.props.onClose(value);
//   };
//
//   handleTextFieldChange = event => {
//     this.props.onClose(event.target.value);
//   };
//
//
//   render() {
//     const { classes, onClose, selectedValue, ...other } = this.props;
//
//     return (
//       <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
//         <DialogTitle id="simple-dialog-title">Create New Project</DialogTitle>
//         <div>
//           <List>
//             <TextField
//               required
//               id="filled-name"
//               label="Username"
//               className={classes.textField}
//               margin="normal"
//               variant="filled"
//               onChange={handleTextFieldChange}
//             />
//             <ListItem button onClick={() => this.handleListItemClick('addProject')}>
//               <ListItemAvatar>
//                 <Avatar>
//                   <AddIcon />
//                 </Avatar>
//               </ListItemAvatar>
//               <ListItemText primary="Create Project" />
//             </ListItem>
//           </List>
//         </div>
//       </Dialog>
//     );
//   }
// }
//
// createNewProjectDialogBox.propTypes = {
//   classes: PropTypes.object.isRequired,
//   onClose: PropTypes.func,
//   selectedValue: PropTypes.string,
// };
//
// export default withStyles(styles)(createNewProjectDialogBox);
//
// class createNewProjectDialogBoxDEMO extends React.Component {
//   state = {
//     open: false,
//     selectedValue: emails[1],
//   };
//
//   handleClickOpen = () => {
//     this.setState({
//       open: true,
//     });
//   };
//
//   handleClose = value => {
//     this.setState({ selectedValue: value, open: false });
//   };
//
//   render() {
//     return (
//       <div>
//         <Typography variant="subtitle1">Selected: {this.state.selectedValue}</Typography>
//         <br />
//         <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
//           Open simple dialog
//         </Button>
//         <createNewProjectDialogBoxWrapped
//           selectedValue={this.state.selectedValue}
//           open={this.state.open}
//           onClose={this.handleClose}
//         />
//       </div>
//     );
//   }
// }
//
// export default createNewProjectDialogBoxDEMO;
