import React, { useState, useEffect } from 'react';
import { Title } from '../Home/HomePage.styles';
import { StyledButton } from '../../components/Header/Header.styles';
import { RemoteDiv, 
         StyledInput, 
         InputContainer } from './RemotePage.styles';
import Remote from '../../components/Remote/Remote';

const RemotePage = 
    ({ 
        socket, 
        setUrl, 
        setPlaying, 
        playing, 
        volume, 
        setVolume,
        mute,
        setMute,
        setSeekTo,
        currentTime,
        setCurrentTime,
    }) => {
    // state for url Input
    const [urlInput, setUrlInput] = useState('');
    // state for blinking light
    const [blink, setBlink] = useState(false);

    // function to handle input change
    const handleChange = (evt) => {
        setUrlInput(evt.target.value);
    };

    // Function for blinking light
    const BlinkLight = () => {
        setBlink(true);
        setTimeout(() => {
            setBlink(false);
        }, 200);
    };

    // Function to submit url via websockets
    const handleSubmit = () => {
        setUrl(urlInput);
        // clear the url input when submit button pressed
        setUrlInput('');
        socket.emit('url change', {
            url: urlInput
        });
    };

    // Function to handle play/pause button click
    const handlePlayPause = () => {
        setPlaying(!playing);
        socket.emit('play');
        BlinkLight();
    }

    // Function to handle volume up button press
    const handleVolumeUp = () => {
        // use .toFixed to force to 1 decimal place and convert back to float from string
        volume >= 1 ? setVolume(1) : setVolume(parseFloat((volume += 0.1).toFixed(1)));
        socket.emit('volume-up');
        BlinkLight();
    }

    // Function to handle volume down button press
    const handleVolumeDown = () => {
        // use .toFixed to force to 1 decimal place and convert back to float from string
        volume <= 0 ? setVolume(0) : setVolume(parseFloat((volume -= 0.1).toFixed(1)));
        socket.emit('volume-down');
        BlinkLight();
    }

    // Function to handle mute button press
    const handleMute = () => {
        setMute(!mute);
        socket.emit('mute');
        BlinkLight();
    }

    // Functin to handle forward button, skip 10s ahead in video
    const handleForward = () => {
        setSeekTo(currentTime + 10);
        socket.emit('forward');
        BlinkLight();
    }

    // Function to handle rewind button, rewind 10s back in video
    const handleRewind = () => {
        (currentTime - 10) <= 0 ? setSeekTo(0) : setSeekTo(currentTime - 10);
        socket.emit('rewind');
        BlinkLight();
    }

    // method for socket.io connections
    useEffect(() => {
        /* when client connects to socket, receive default state from 
           backend */
        socket.on("connected", data => {
            setUrl(data.url);
            setPlaying(data.playing);
            setMute(data.mute);
            setVolume(data.volume);
            setCurrentTime(data.currentTime);
        });   
        /* When url is update by remote, receive the url from backend and 
        update local state for url */
        socket.on("url changed", url => {
            setUrl(url);
        });
        /* When the play/pause button is pressed, 
           toggle the boolean value of playing state*/
        socket.on("play", () => {
            setPlaying(!playing);
        });
        /* When the volume up message is received, update 
           the volume state with info from backend */
        socket.on("volume-up", volumeReceived => {
            setVolume(volumeReceived);
        });
        /* When the volume down message is received, update 
           the volume state with info from backend */
        socket.on("volume-down", volumeReceived => {
            setVolume(volumeReceived);
        });
        /* When the mute button is pressed, update the mute state */
        socket.on("mute", () => {
            setMute(!mute);
        });
        /* When the forward button is pressed, update the seekTo state */
        socket.on("forward", seekToReceived => {
            setSeekTo(seekToReceived);
        });
        /* When the rewind button is pressed, update the seekTo state */
        socket.on("rewind", seekToReceived => {
            setSeekTo(seekToReceived);
        });
       /* When the current time is sent to frontend every second, update the 
           currentTime state every second on client while video is playing */
        socket.on("current-time", currentTimeReceived => {
            setCurrentTime(currentTimeReceived);
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
            <Remote 
                blink={blink} 
                playing={playing} 
                handlePlayPause={handlePlayPause} 
                handleVolumeUp={handleVolumeUp}
                handleVolumeDown={handleVolumeDown}
                handleMute={handleMute}
                mute={mute}
                handleForward={handleForward}
                handleRewind={handleRewind}
            />
        </RemoteDiv>
    )
}

export default RemotePage;