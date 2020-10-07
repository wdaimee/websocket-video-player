import React, { useState, useEffect } from 'react';
import { Title } from '../Home/HomePage.styles';
import { StyledButton } from '../../components/Header/Header.styles';
import { RemoteDiv, StyledInput, InputContainer, Remote, StyledImg, MiddleButton } from './RemotePage.styles';

const RemotePage = ({ socket, setUrl, setPlaying, playing }) => {
    // state for url Input
    const [urlInput, setUrlInput] = useState('');

    // function to handle input change
    const handleChange = (evt) => {
        setUrlInput(evt.target.value);
    };

    // Function to submit url via websockets
    const handleSubmit = () => {
        setUrl(urlInput);
        socket.emit('url change', {
            url: urlInput
        });
    };

    // Function to handle play/pause button click
    const handlePlayPause = () => {
        setPlaying(!playing);
        socket.emit('play')
    }

   // method for socket.io connections
   useEffect(() => {
        /* when client connects to socket, receive video url and update
        state of url */
        socket.on("connected", data => {
            console.log(data);
            setUrl(data.url);
            // setPlaying(data.playing);
        });
        /* When url is update by remote, receive the url from backend and 
        update local state for url */
        socket.on("url changed", data => {
            setUrl(data);
        });
        /* When the play/pause button is pressed, 
           toggle the boolean value of playing state*/
        socket.on("play", () => {
            setPlaying(!playing);
        });
    });

    return(
        <RemoteDiv>
            <Title>Add a URL to watch a video</Title>
            <InputContainer>
                <StyledInput 
                    placeholder='Add a url of a video you would like to watch'
                    value={urlInput}
                    name="urlInput"
                    onChange={handleChange}
                />
                <StyledButton style={{marginRight: 0}}onClick={handleSubmit}>Watch Video</StyledButton>
            </InputContainer>
            <Remote>
                <StyledImg src="https://fontmeme.com/permalink/201007/11ecf2dbc6b00f5b001353ba4805f2bb.png" alt="netflix-font" border="0" />
                <MiddleButton onClick={handlePlayPause}>
                    { playing === true ? 'Pause':'Play' }
                </MiddleButton>
            </Remote>
        </RemoteDiv>
    )
}

export default RemotePage;