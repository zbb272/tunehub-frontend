import React, { Component } from 'react';
import MusicMatrix from '../components/musicMatrix'

let intervalTimer;

const ms = 3;

class Project extends Component {
  constructor(){
    super()
    this.state = {
      notes: [],
      noteColumnNum: 0,
      contributions: [],
      owner: "",
      name: "",
      playing: false,
    }
  }

  playNoteColumn = (noteColumnNum) => {
    console.log(noteColumnNum)
    let noteColumn = this.state.notes.filter(note => note.x === noteColumnNum);
    console.log(noteColumn);
    noteColumn.forEach(note => {
      this.playNote(note.frequency);
      note.bc = "red";
    });
    noteColumn.forEach(note => setTimeout(() => note.bc = "black", 500));
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
    console.log(note);
    note.selected = !note.selected;
    let newBc = note.selected ? "black" : "white";
    note.bc = newBc;
    console.log(note)

    // this.setState({
    //   selected: !this.state.selected,
    //   bc: newBc,
    // })
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
            Tabs here:
            <span><button>MusicMatrix</button><button>Contributers</button></span>
            <div>
              Options for matrix(key, tempo etc)
              <label>Key:</label>
              <select>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G">G</option>
              </select>
            </div>
            <MusicMatrix notes={this.state.notes} noteSelectedHandler={this.noteSelectedHandler} />
            <div>
              <button onClick={this.playButtonHandler}>Play</button>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Project;
