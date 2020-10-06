import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { AppDiv } from './App.styles';
const ENDPOINT = "http://localhost:3001";

function App() {
  // const [response, setReponse] = useState('');

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
      <Switch>
        {/* <Route exact path ='/' render={() => 
          <HomePage />
        } />
        <Route exact path ='/remote' render={() => 
          <RemotePage />
        } /> */}
      </Switch>
    </AppDiv>

  );
}

export default App;
