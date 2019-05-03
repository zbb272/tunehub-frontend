import React, { Component } from 'react';

const MusicSquare = props => {
  const { note, noteSelectedHandler } = props;

  // onClickHanlder = () => {
  //   this.props.noteSelectedHandler(this.state)
  //   // let newBc = this.state.selected ? "black" : "white";
  //   // this.setState({
  //   //   selected: !this.state.selected,
  //   //   bc: newBc,
  //   // })
  //   var context = new AudioContext()
  //   var o = context.createOscillator()
  //   var  g = context.createGain()
  //   var frequency = this.state.frequency
  //   o.frequency.value = frequency
  //   o.connect(g)
  //   g.connect(context.destination)
  //   o.start(0)
  //   g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 10)
  //
  // }
  console.log("new")
  return (
    //grid should be 12x9
    <div className="music-square" onClick={() => noteSelectedHandler(note)} style={{
    gridColumn: note.x+1,
    gridRow: note.y+1,
    backgroundColor: note.bc,
    }}>
      X
    </div>
  )

}

export default MusicSquare;
