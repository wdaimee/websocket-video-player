import React, { useState, useEffect } from 'react';
import { Title } from '../Home/HomePage.styles';
import { StyledButton } from '../../components/Header/Header.styles';
import { RemoteDiv, StyledInput, InputContainer, Remote } from './RemotePage.styles';

const RemotePage = ({ socket, setUrl }) => {
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
            <Remote />
        </RemoteDiv>
    )
}

export default RemotePage;