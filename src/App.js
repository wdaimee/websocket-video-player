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
  const [playing, setPlaying] = useState(false);
  // state for volume of video
  const [volume, setVolume] = useState(0.8);


  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   // When client is connected to socket.io, console.log connected message
  //   socket.on("connect", data => {
  //     console.log('connected to socket.io')
  //   });
  //   // update url when url change message recieved from backend
  //   socket.on("url change", data => {
  //     console.log(data);
  //     setUrl(data.url);
  //   });
  //   // close socket connection on component dismount
  //   return () => socket.disconnect();
  // });

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
          />
        } />
      </Switch>
    </AppDiv>

  );
}

export default App;
