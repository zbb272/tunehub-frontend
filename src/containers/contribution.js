import React, { Component } from 'react';
import MusicMatrix from '../components/musicMatrix'
import { musicFrequencies,
  notesInAMajorKey, notesInBMajorKey, notesInCMajorKey, notesInDMajorKey, notesInEMajorKey, notesInFMajorKey, notesInGMajorKey,
  cNotes, cSharpNotes, dNotes, eFlatNotes, eNotes, fNotes,
  fSharpNotes, gNotes, gSharpNotes, aNotes, bFlatNotes, bNotes,
  aColor, bFlatColor, bColor, cColor, cSharpColor, dColor, eFlatColor, eColor, fColor, fSharpColor, gColor, gSharpColor,
  findColor
} from '../components/musicalKeyFrequencies'
import { Redirect } from 'react-router-dom';

let intervalTimer;

const ms = 3;

class Contribution extends Component {
  constructor(props){
    super(props)
    let latestCont = props.projObj.contributions.find(cont => cont.id === props.projObj.latest_contribution)
    this.state = {
      notes: latestCont.notes,
      noteColumnNum: 0,
      contributions: props.projObj.contributions,
      owner: props.projObj.user.username,
      name: props.projObj.name,
      playing: false,
      noteFrequcenies: notesInAMajorKey,
    }
  }

  playNoteColumn = (noteColumnNum) => {
    let noteColumn = this.state.notes.filter(note => note.x === noteColumnNum);

    noteColumn.forEach(note => {
      this.playNote(note.frequency);
      note.bc = "rgba(0, 0, 0, 0.3)";
    });
    noteColumn.forEach(note => {
      setTimeout(() => note.bc = findColor(note.frequency), 500)
    });
  }

  playNote = (frequency) => {
    var context = new AudioContext()
    var o = context.createOscillator()
    var g = context.createGain()
    o.frequency.value = frequency
    o.connect(g)
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + ((1 / frequency) * 1000) * ms)
  }

  noteSelectedHandler = (note) => {
    note.selected = !note.selected;
    let newBc = note.selected ? findColor(note.frequency) : "white";
    note.bc = newBc;


    this.playNote(note.frequency)
    if(note.selected){
      console.log(note);
      if(this.state.notes.includes(note)){
        let newNotes = [...this.state.notes];
        newNotes.splice(newNotes.indexOf(note), 1);
        this.setState({
          notes: newNotes,
        })
      } else{
        let newNotes = [...this.state.notes];
        newNotes.push(note);
        this.setState({
          notes: newNotes,
        })
      }
    }
  }

  playButtonHandler = () => {
    this.state.playing ? console.log("stop playing") : console.log("start playing");
    this.setState({
      playing: !this.state.playing,
    })
    if(!this.state.playing){
      intervalTimer = setInterval(() => {
        this.playNoteColumn(this.state.noteColumnNum);
        let newNoteColumnNum = this.state.noteColumnNum < 10 ? this.state.noteColumnNum + 1 : 0;
        this.setState({
          noteColumnNum: newNoteColumnNum
        })
      }, 1000);
    } else {
      clearInterval(intervalTimer);
      this.setState({
        noteColumnNum: 0,
      })
    }
  }

  submitContributionHandler = () => {
    this.props.contObj.notes_attributes = this.state.notes
    console.log(this.props.contObj)
    this.props.createNewContributionHandler(this.props.contObj)
  }

  handleKeyChangeSelector = (event) => {
    let key  = event.target.value;
    let freq;
    if(key === "A"){ freq = notesInAMajorKey }
    if(key === "B"){ freq = notesInBMajorKey }
    if(key === "C"){ freq = notesInCMajorKey }
    if(key === "D"){ freq = notesInDMajorKey }
    if(key === "E"){ freq = notesInEMajorKey }
    if(key === "F"){ freq = notesInFMajorKey }
    if(key === "G"){ freq = notesInGMajorKey }
    this.setState({
      noteFrequcenies: freq,
    })
  }

  render(){
    return(
      <div className="projectPageContainer">
            <h1>New Contribution to {this.state.name}</h1>
            <h5>Project created by: {this.state.owner} (add link)</h5>
            <div>
              <span><button>MusicMatrix</button></span>
              <div>
                Options for matrix(key, tempo etc)
                <label>Key:</label>
                <select onChange={this.handleKeyChangeSelector}>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                </select>
              </div>
              <MusicMatrix noteFrequcenies={this.state.noteFrequcenies} notes={this.state.notes} noteSelectedHandler={this.noteSelectedHandler} />
              <div>
                Add button to append another music matrix block so you can add more to a project
                <button onClick={this.playButtonHandler}>Play</button>
                <button onClick={this.submitContributionHandler}>Submit</button>
              </div>
            </div>
           </div>


    )
  }
}

export default Contribution;
