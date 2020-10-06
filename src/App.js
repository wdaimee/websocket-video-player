import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { AppDiv } from './App.styles';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
const ENDPOINT = "http://localhost:3001";

function App() {
  // URL state for video that is playing
  const [url, setUrl] = useState('https://www.youtube.com/watch?v=Zk4Gufx-O2k');
  // URL state if video is playing or paused
  const [playing, setPlaying] = useState(false);

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("connect", data => {
  //     console.log(data)
  //     console.log('connected to socket.io')
  //   });
  //   // close socket connection on component dismount
  //   return () => socket.disconnect();
  // })

  return (
    <AppDiv>
      <Header />
      <Switch>
        <Route exact path ='/' render={() => 
          <Home 
            url={url}
            playing={playing}
          />
        } />
        {/* <Route exact path ='/remote' render={() => 
          <RemotePage />
        } /> */}
      </Switch>
    </AppDiv>

  );
}

export default App;
