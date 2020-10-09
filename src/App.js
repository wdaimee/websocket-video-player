import React, { useState, useEffect } from 'react';
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
  const [playing, setPlaying] = useState(true);
  // state for volume of video
  const [volume, setVolume] = useState(0.8);
  // state of mute for video
  const [mute, setMute] = useState(true);
  // state for setting time to jump forward or backward in video
  const [seekTo, setSeekTo] = useState(0);
  // state for current video time played so far
  const [currentTime, setCurrentTime] = useState(0);

  // Update page tab title to "Todos!" when app mounts
  useEffect(() => {
    document.title = "PartyFlix"
  });

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
            seekTo={seekTo}
            setSeekTo={setSeekTo}
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
