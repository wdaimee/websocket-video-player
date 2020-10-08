import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { AppDiv } from './App.styles';
import Header from './components/Header/Header';
import HomePage from './Pages/Home/HomePage';
import RemotePage from './Pages/Remote/RemotePage';

const ENDPOINT = "http://localhost:3001";
const socket = socketIOClient(ENDPOINT);

function App() {
  // state for URL for video that is playing
  const [url, setUrl] = useState('');
  // state if video is playing or paused
  const [playing, setPlaying] = useState(false);
  // state for volume of video
  const [volume, setVolume] = useState(0.8);
  // state of mute for video
  const [mute, setMute] = useState(false);
  // state for playback rate of video
  const [playBackRate, setPlayBackRate] = useState(1);
  // state for setting time to jump forward or backward in video
  const [seekTo, setSeekTo] = useState(0);
  // state for current video time played so far
  const [currentTime, setCurrentTime] = useState(0);

  return (
    <AppDiv>
      <Header />
      <Switch>
        <Route exact path ='/' render={() => 
          <HomePage 
            socket={socket}
            url={url}
            playing={playing}
            setUrl={setUrl}
            setPlaying={setPlaying}
            volume={volume}
            setVolume={setVolume}
            mute={mute}
            setMute={setMute}
            playBackRate={playBackRate}
            setPlayBackRate={setPlayBackRate}
            seekTo={seekTo}
            setSeekTo={setSeekTo}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        } />
        <Route exact path ='/remote' render={() => 
          <RemotePage 
            socket={socket}
            url={url}
            playing={playing}
            setUrl={setUrl}
            setPlaying={setPlaying}
            volume={volume}
            setVolume={setVolume}
            mute={mute}
            setMute={setMute}
            playBackRate={playBackRate}
            setPlayBackRate={setPlayBackRate}
            seekTo={seekTo}
            setSeekTo={setSeekTo}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
          />
        } />
      </Switch>
    </AppDiv>

  );
}

export default App;
