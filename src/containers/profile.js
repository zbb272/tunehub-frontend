import React, { Component } from 'react';

class Profile extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="profilePageContainer">
        <div>This is a profile page</div>
        <div>
          username here
          <div>
            three columns(made of cards and spacing) here one for contributions 
            one for projects owned by the user. one small on right with settings for user.
          </div>
          <div>
            maybe more information later here(maybe user collaborated with most. )
          </div>
        </div>
      </div>

    )
  }
}

export default Profile;
