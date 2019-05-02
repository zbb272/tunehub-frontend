import React, { Component } from 'react';

class Project extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      contributions: [],
      owner: "",
      name: "",
    }
  }

  render(){
    return(
      <div className="projectPageContainer">
        <div>This is a project</div>
        <div>
          Container for MusicMatrix
          <h1>Title of Project Here</h1>
          <h5>Maker of project with link</h5>
          <h6>Stats about project here (# of contributors/likes etc)</h6>
          <div>
            Tabs here for: MusicMatrix/previous contributions/maybe more-------
            <div>
              Options for matrix(key, tempo etc)
            </div>
            <div>
              Interactive Matrix here
            </div>
            <div>
              Submit Buttons etc here
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Project;
