import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(){
    super()
  }

  render(){
    return(
      <div className="dashboardPageContainer">
        <div>This is a dashboard page</div>
        <div>
          <div>
            two columns here limited in size. one their current projects, one their contributions
          </div>
          <div>
            bottom block here featuring different projects people are working on
          </div>
        </div>
      </div>

    )
  }
}

export default Dashboard;
