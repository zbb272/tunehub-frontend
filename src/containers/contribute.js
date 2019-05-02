import React, { Component } from 'react';

class Contribute extends Component {
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
      <div className="contributePageContainer">
        <div>This is a page for making contribution</div>
        <div>
          Container for MusicMatrix
          <h1>Title of Project Here</h1>
          <h5>Maker of project with link</h5>
          <h6>Stats about project here (# of contributors/likes etc)</h6>
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

    )
  }
}

export default Contribute;
