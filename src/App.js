import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  const profile = ["Smooth Piano Kit", "Heater Kit"];
  const url = {
    'Smooth Piano Kit': {
      '1': ['Chord 1', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'],
      '2': ['Chord 2', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'],
      '3': ['Chord 3', 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'],
      '4': ['Shaker', 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'],
      '5': ['Open HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'],
      '6': ['Closed HH', 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'],
      '7': ['Punchy Kick', 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'],
      '8': ['Side Stick', 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'],
      '9': ['Snare', 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3']
    },
    'Heater Kit': {
      '1': ['Heater 1', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'],
      '2': ['Heater 2', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'],
      '3': ['Heater 3', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'],
      '4': ['Heater 4', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'],
      '5': ['Clap', 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'],
      '6': ['Open HH', 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'],
      '7': ["Kick n' hat", 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'],
      '8': ['Kick', 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'],
      '9': ['Closed HH', 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3']		
    }
  
  }

  const [bankProfile, setBankProfile] = useState(0);
  const [namePad, setNamePad] = useState("");
  const [drumProfile, setDrumProfile] = useState(url[profile[0]]);
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(1);

  const handleKeyDown = (event) => {
    if (event.key) {
      var key = event.key.toUpperCase();
    }
    if (
      power === 1 &&
      (key === "Q" ||
        key === "W" ||
        key === "E" ||
        key === "A" ||
        key === "S" ||
        key === "D" ||
        key === "Z" ||
        key === "X" ||
        key === "C" ||
        document.getElementById(event.target.innerText.toUpperCase()))
    ) {
        var audio = document.getElementById(key || event.target.innerText.toUpperCase());
		   	audio.parentElement.classList.toggle('click');
        let index = Array.from(document.getElementsByClassName('drum-pad')).indexOf(audio.parentElement) + 1;
		   	setTimeout(()=>{audio.parentElement.classList.toggle('click')}, 100);
		   	let i = bankProfile;
        setNamePad(url[profile[i]][index][0]);
        audio.volume = volume;
				audio.load();
				audio.play();
    }
  };

  const handleVolume = (event) => {
    setVolume(event.target.value / 100);
    setNamePad("Volume: " + event.target.value);
    setTimeout(() => {
      setNamePad("");
    }, 1000);
  };

  const handleBank = (event) => {
    document.getElementById("bank").classList.toggle("on");
		let i = bankProfile === 1?0:1;
    setBankProfile(i);
    setDrumProfile(url[profile[i]]);
    setNamePad(profile[i]);
  };

  const handlePower = (event) => {
    let i = power === 1 ? 0 : 1;
    setPower(i);
    setNamePad("");
    for(let j = 0; j < document.getElementsByClassName("drum-pad").length; j++){
			document.getElementsByClassName("drum-pad")[j].classList.toggle('disabled')
		}
    document.getElementById("bank").toggleAttribute("disabled")
    document.getElementById("range").toggleAttribute("disabled");
    document.getElementById("power").classList.toggle("on");
  };



  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    
    // cleanup this component
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    
  }, [power, bankProfile, volume]);

  return (
    <div id="drum-machine" className="container">
      <div className="row">
      <div id="drum-pad-container" className="col-9">
        <div className="row">
          <div className="drum-pad" id={url[profile[bankProfile]][1][0]} onClick={handleKeyDown}>
						Q
						<audio className="clip" id="Q" src={drumProfile[1][1]}></audio>
					</div>
					<div className="drum-pad" id={url[profile[bankProfile]][2][0]} onClick={handleKeyDown}>
						W
						<audio className="clip" id="W" src={drumProfile[2][1]}></audio>
					</div>
					<div className="drum-pad"  id={url[profile[bankProfile]][3][0]}onClick={handleKeyDown}>
						E
						<audio className="clip" id="E" src={drumProfile[3][1]}></audio>
					</div>
        </div>
        <div className="row">
          <div className="drum-pad" id={url[profile[bankProfile]][4][0]} onClick={handleKeyDown}>
						A
						<audio className="clip" id="A" src={drumProfile[4][1]}></audio>
					</div>
					<div className="drum-pad" id={url[profile[bankProfile]][5][0]} onClick={handleKeyDown}>
						S
						<audio className="clip" id="S" src={drumProfile[5][1]}></audio>
					</div>
					<div className="drum-pad"  id={url[profile[bankProfile]][6][0]}onClick={handleKeyDown}>
						D
						<audio className="clip" id="D" src={drumProfile[6][1]}></audio>
					</div>
        </div>
        <div className="row">
          <div className="drum-pad"  id={url[profile[bankProfile]][7][0]}onClick={handleKeyDown}>
						Z
						<audio className="clip" id="Z" src={drumProfile[7][1]}></audio>
					</div>
					<div className="drum-pad" id={url[profile[bankProfile]][8][0]} onClick={handleKeyDown}>
						X
						<audio className="clip" id="X" src={drumProfile[8][1]}></audio>
					</div>
					<div className="drum-pad" id={url[profile[bankProfile]][9][0]} onClick={handleKeyDown}>
						C
						<audio className="clip" id="C" src={drumProfile[9][1]}></audio>
					</div>
        </div>
			</div>	
			<div className="col">	
				<div id="display">{namePad}</div>
				<div><input id="range" type="range" onChange={handleVolume}/></div>
				<div className="bankC"><label htmlFor="bank" className="label">Bank</label><input id="bank" type="checkbox" onClick={handleBank}/></div>
				<div className="bankC"><label htmlFor="power" className="label">Power</label><input id="power" type="checkbox" onChange={handlePower}/></div>
		  </div>

      </div>
		</div>
  );
}

export default App;