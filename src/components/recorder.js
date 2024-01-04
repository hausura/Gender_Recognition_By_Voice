import axios from "axios";
import React, { useState, useEffect } from 'react';
import vmsg from "vmsg";
import { ReactMic } from 'react-mic';
import './main.css';


const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
});
class VoiceRecorder extends React.Component {
  state = {
    isLoading: false,
    isRecording: false,
    recordings: []
  };
  
  record = async () => {
    this.setState({ isLoading: true });

    if (this.state.isRecording) {
      const blob = await recorder.stopRecording();
      const formData = new FormData();
      formData.append('file', blob, 'output.wav');
      await axios.post('http://127.0.0.1:8000/upload/', formData);
      this.setState({
        isLoading: false,
        isRecording: false,
        recordings: this.state.recordings.concat(URL.createObjectURL(blob))
      });
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();
        this.setState({ isLoading: false, isRecording: true });
      } catch (e) {
        console.error(e);
        this.setState({ isLoading: false });
      }
    }
  };
  
  
  render() {
    const { isLoading, isRecording } = this.state;
    return (
      <>

        <div className='container'>
          <React.Fragment>
            <h1>Voice Recorder</h1>
            <ReactMic
            record={isRecording}
            className="sound-wave"
            />
            <button class="button"  disabled={isLoading} onClick={this.record}>
              {isRecording ? "Stop" : "Record"}
            </button>
                  </React.Fragment>
        </div>
      </>
    );
  }
}
export default VoiceRecorder;



// import React, { useState } from 'react';
// import { ReactMic } from 'react-mic';
// import axios from 'axios';
// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

// import vmsg from "vmsg";


// const recorder = new vmsg.Recorder({
//     wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm"
//   });

// function VoiceRecorder() {
//   const [isRecording, setRecording] = useState(false);
//   const [audioUrl, setAudioUrl] = useState(null);


//   const startRecording = async() => {
//     setRecording(true);


//   };

//   const stopRecording = () => {
//     setRecording(false);
//   };

//   const onData = (recordedData) => {
//     console.log('chunk of real-time data is: ', recordedData);
//   };

//   const onStop = async (recordedBlob) => {

//     console.log('recordedBlob is: ', recordedBlob);

//     const formData = new FormData();
//     formData.append('file', recordedBlob.blob, 'voice-recording.wav');

//     setAudioUrl(URL.createObjectURL(recordedBlob.blob));

//     try {
//       await axios.post('http://127.0.0.1:8000/upload/', formData);
//       console.log('File uploaded successfully!');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
    
//   };
//   const replayRecording = () => {
//     if (audioUrl) {
//       const audio = new Audio(audioUrl);
//       audio.play();
//     }
//   };
//   return (
//     <div className="App">
//       <h1>Voice Recorder</h1>
//       <ReactMic
//         record={isRecording}
//         className="sound-wave"
//         onStop={onStop}
//         onData={onData}
//       />
//       <button onClick={startRecording} disabled={isRecording}>
//         Start Recording
//       </button>
//       <button onClick={stopRecording} disabled={!isRecording}>
//         Stop Recording
//       </button>
//       {audioUrl && (
//         <button onClick={replayRecording}>Replay Recording</button>
//       )}
//     </div>
//   );
// }

// export default VoiceRecorder;