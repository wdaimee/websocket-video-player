import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Title } from './HomePage.styles';

// Home Page content with Title and Video Player
const HomePage = 
    ({ 
        socket, 
        url, 
        playing, 
        setUrl, 
        setPlaying, 
        volume, 
        setVolume,
        mute,
        setMute,
        playBackRate,
        setPlayBackRate,
        played,
        setPlayed,
        currentTime,
        setCurrentTime,
    }) => {
    
    // ref for video player
    const videoRef = React.createRef();
    
    // video timer id to capture id of setInterval
    const timerRef = React.useRef(null);
    
    /* While video is playing and videoRef exists, send amount of 
       time video has played to backend every second */
    useEffect(() => {
        if (videoRef && playing) {
            timerRef.current = setInterval(() => {
                socket.emit('current-time', videoRef.current.getCurrentTime());
            }, 1000)
        } else if (!playing && timerRef.current) {
            clearInterval(timerRef.current)
        }
    }, [playing, videoRef])

    // method for socket.io connections
    useEffect(() => {
        /* when client connects to socket, receive video url and update
           state of url */
        socket.on("connected", data => {
            setUrl(data.url);
            setPlaying(data.playing);
            setVolume(data.volume);
            setPlayBackRate(data.playBackRate);
            setCurrentTime(data.currentTime);
            setPlayed(data.currentTime);
        });
        /* when client connects to socket, receive default state from 
           backend */
        socket.on("url changed", data => {
            setUrl(data);
        });
        /* When the play/pause button is pressed, 
           toggle the boolean value of playing state */
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
        /* When the fastforward button is pressed, update the playBackRate state */
        socket.on("fast-forward", playBackRateReceived => {
            setPlayBackRate(playBackRateReceived);
        });
        /* When the current time is sent to frontend every second, update the 
           currentTime state every second on client while video is playing */
        socket.on("current-time", currentTimeReceived => {
            setCurrentTime(currentTimeReceived);
        });
    });

    return(
        <>
            <Title>Watch videos and take control of the action with you friends!</Title>
            <ReactPlayer style={{zIndex: 1}}
                         url={url}
                         playing={playing}
                         width="961px"
                         height="601px"
                         volume={volume}
                         muted={mute}
                         playbackRate={playBackRate}
                         ref={videoRef}
            />
            <div style={{color: 'white'}}>
                Volume: {volume}
            </div>
            <div style={{color: 'white'}}>
                Muted: { mute ? 'True' : 'False'}
            </div>
        </>
    )
}

export default HomePage;