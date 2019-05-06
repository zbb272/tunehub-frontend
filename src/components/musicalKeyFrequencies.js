export const deepNotes = [
  [16.35,	17.32,	18.35, 19.45,	20.60,	21.83,	23.12,	24.50,	25.96,	27.50,	29.14,	30.87],
  [32.70,	34.65,	36.71,	38.89,	41.20,	43.65,	46.25,	49.00,	51.91,	55.00,	58.27,	61.74],
  [65.41,	69.30,	73.42,	77.78,	82.41,	87.31,	92.50,	98.00,	103.8,	110.0,	116.5,	123.5]
]
export const musicFrequencies = [
	[130.8,	138.6,	146.8,	155.6,	164.8,	174.6,	185.0,	196.0,	207.7,	220.0,	233.1,	246.9],
	[261.6,	277.2,	293.7,	311.1,	329.6,	349.2,	370.0,	392.0,	415.3,	440.0,	466.2,	493.9],
	[523.3,	554.4,	587.3,	622.3,	659.3,	698.5,	740.0,	784.0,	830.6,	880.0,	932.3,	987.8],
	[1047,	1109,	1175,	1245,	1319,	1397,	1480,	1568,	1661,	1760,	1865,	1976],
	[2093,	2217,	2349,	2489,	2637,	2794,	2960,	3136,	3322,	3520,	3729,	3951],
	[4186,	4435,	4699,	4978,	5274,	5588,	5920,	6272,	6645,	7040,	7459,	7902]
]

export const cNotes      = [ 130.8, 261.6, 523.3, 1047, 2093, 4186 ]
export const cSharpNotes = [ 138.6, 277.2, 554.4, 1109,	2217,	4435 ]
export const dNotes      = [ 146.8, 293.7, 587.3, 1175, 2349, 4699 ]
export const eFlatNotes  = [ 155.6, 311.1, 622.3, 1245, 2489, 4978 ]
export const eNotes      = [ 164.8, 329.6, 659.3, 1319, 2637, 5274 ]
export const fNotes      = [ 174.6, 349.2, 698.5, 1397, 2794, 5588 ]
export const fSharpNotes = [ 185.0, 370.0, 740.0, 1480, 2960, 5920 ]
export const gNotes      = [ 196.0, 392.0, 784.0, 1568, 3136, 6272 ]
export const gSharpNotes = [ 207.7, 415.3, 830.6, 1661,	3322,	6645 ]
export const aNotes      = [ 220.0, 440.0, 880.0, 1760, 3520, 7040 ]
export const bFlatNotes  = [ 233.1, 466.2, 932.3, 1865,	3729,	7459 ]
export const bNotes      = [ 246.9, 493.9, 987.8, 1976, 3951, 7902 ]

//colors
//A=Red, Bb=Red/Orange, B=Orange, C=Orange/Yellow, C#=Yellow, D=Yellow/Green, Eb=Green, E=Green/Blue, F=Blue, F#=Blue/Violet, G=Violet, G#=Violet/Red
export const aColor      = "rgb(255, 0, 0)";
export const bFlatColor  = "rgb(255, 64, 0)";
export const bColor      = "rgb(255, 128, 0)";
export const cColor      = "rgb(255, 191, 0)";
export const cSharpColor = "rgb(255, 255, 0)";
export const dColor      = "rgb(191, 255, 0)";
export const eFlatColor  = "rgb(0, 255, 0)";
export const eColor      = "rgb(0, 255, 191)";
export const fColor      = "rgb(0, 191, 255)";
export const fSharpColor = "rgb(0, 0, 255)";
export const gColor      = "rgb(128, 0, 255)";
export const gSharpColor = "rgb(255, 0, 255)";

export const findColor = (frequency) => {
  if(cNotes.includes(frequency)){ return cColor }
  if(cSharpNotes.includes(frequency)){ return cSharpColor }
  if(dNotes.includes(frequency)){ return dColor }
  if(eFlatNotes.includes(frequency)){ return eFlatColor }
  if(eNotes.includes(frequency)){ return eColor }
  if(fNotes.includes(frequency)){ return fColor }
  if(fSharpNotes.includes(frequency)){ return fSharpColor }
  if(gNotes.includes(frequency)){ return gColor }
  if(gSharpNotes.includes(frequency)){ return gSharpColor }
  if(aNotes.includes(frequency)){ return aColor }
  if(bFlatNotes.includes(frequency)){ return bFlatColor }
  if(bNotes.includes(frequency)){ return bColor }
}

export const aMChord = []
export const amChord = []
export const adChord = []
export const bMChord = []
export const bmChord = []
export const bdChord = []
export const cMChord = []
export const cmChord = []
export const cdChord = []
export const dMChord = []
export const dmChord = []
export const ddChord = []
export const eMChord = []
export const emChord = []
export const edChord = []
export const fMChord = []
export const fmChord = []
export const fdChord = []
export const gMChord = []
export const gmChord = []
export const gdChord = []

export const notesInCKey  = [ cNotes[1], dNotes[1], eNotes[1], fNotes[1], gNotes[1], aNotes[1], bNotes[1]];
export const triadsInCKey = [ cMChord,   dmChord,   emChord,   fMChord,   gMChord,   amChord, bdChord];
