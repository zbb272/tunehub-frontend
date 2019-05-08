import React, { Component } from 'react';
import MusicSquare from './musicSquare';
import { musicFrequencies, notesInCMAjorKey, allNotesInCMajorKey,
  cNotes, cSharpNotes, dNotes, eFlatNotes, eNotes, fNotes,
  fSharpNotes, gNotes, gSharpNotes, aNotes, bFlatNotes, bNotes,
  aColor, bFlatColor, bColor, cColor, cSharpColor, dColor, eFlatColor, eColor, fColor, fSharpColor, gColor, gSharpColor
  } from './musicalKeyFrequencies'




const MusicMatrix = props => {
    let noteFrequcenies = props.noteFrequcenies;

    let boxes = [];
    for(let y = 0; y < noteFrequcenies.length; y++){
      for(let x = 0; x < 12; x++){
        let noteFound = props.notes.find(note => note.x === x && note.y === y)

        if(noteFound === undefined){
          noteFound = {
            x: x,
            y: y,
            frequency: noteFrequcenies[y],
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
