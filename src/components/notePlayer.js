import React, { Component } from 'react';

class NotePlayer extends Component {

  playNote = (noteColumn) => {
    var context = new AudioContext()
    var o = context.createOscillator()
    var  g = context.createGain()
    var frequency = 440.0
    o.frequency.value = frequency
    o.connect(g)
    g.connect(context.destination)
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 10)
  }
}

export default NotePlayer;
