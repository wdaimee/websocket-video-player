import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { AppDiv } from './App.styles';
import Header from './components/Header/Header';
import Home from './Pages/Home/Home';
import Remote from './Pages/Remote/Remote';

const ENDPOINT = "http://localhost:3001";
const socket = socketIOClient(ENDPOINT);

function App() {
  // state for URL for video that is playing
  const [url, setUrl] = useState('');
  // state if video is playing or paused
  const [playing, setPlaying] = useState();


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
          <Home 
            socket={socket}
            url={url}
            playing={playing}
            setUrl={setUrl}
            setPlaying={setPlaying}
          />
        } />
        <Route exact path ='/remote' render={() => 
          <Remote 
            socket={socket}
            url={url}
            playing={playing}
            setUrl={setUrl}
            setPlaying={setPlaying}
          />
        } />
      </Switch>
    </AppDiv>

  );
}

export default App;
