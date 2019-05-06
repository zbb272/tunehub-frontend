import React, { Component } from 'react';

const MusicSquare = props => {
  const { note, noteSelectedHandler } = props;

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
