import React, { Component } from 'react';
import MusicSquare from './musicSquare';
import { musicFrequencies } from './musicalKeyFrequencies'



const MusicMatrix = props => {


    let boxes = [];
    for(let y = 0; y < 6; y++){
      for(let x = 0; x < 12; x++){
        let noteFound = props.notes.find(note => note.x === x && note.y === y)

        if(noteFound === undefined){
          noteFound = {
            x: x,
            y: y,
            frequency: musicFrequencies[y][x],
            selected: false,
            bc: "white",
          }
        }
        boxes.push(<MusicSquare note={noteFound} noteSelectedHandler={props.noteSelectedHandler}/>);
      }
    }
    return (
      //grid should be 12x9
      <div className="music-matrix" style={{
      display: "grid",
      gridTemplateColumns: "repeat(11, 1fr)",
      gridGap: "10px",
      gridAutoRows: "minmax(25px, auto)",
    }}>
        {boxes}
      </div>
    )


}

export default MusicMatrix;
