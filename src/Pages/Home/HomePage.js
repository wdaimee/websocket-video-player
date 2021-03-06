import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Title, Info } from './HomePage.styles';

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
        seekTo,
        setSeekTo,
        setCurrentTime,
    }) => {
    
    // ref for video player
    const videoRef = React.useRef();
    
    // video timer id to capture id of setInterval
    const timerRef = React.useRef(null);
    
    /* While video is playing and videoRef exists, send amount of 
       time video has played to backend every second */
    useEffect(() => {
        if (videoRef.current && playing) {
            timerRef.current = setInterval(() => {
                socket.emit('current-time', videoRef.current.getCurrentTime());
            }, 1000)
        } else {
            clearInterval(timerRef.current);
        }
    }, [playing, videoRef]);

    /* UseEffect for skipping forward in video, when seekTo state changes 
       seek video to seekTo value */
    useEffect(() => {
        videoRef.current.seekTo(seekTo);
    }, [seekTo]);

    // method for socket.io connections
    useEffect(() => {
        /* when client connects to socket, receive default state from 
           backend */
        socket.on("connected", data => {
            setUrl(data.url);
            setPlaying(data.playing);
            setVolume(data.volume);
            setCurrentTime(data.currentTime);
            // Set seekTo to currentTime (syncs two video players together)
            setSeekTo(data.currentTime);
        });
        /* when client connects to socket, receive video url and update
        state of url */
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
        /* When the forward button is pressed, update the seekTo state */
        socket.on("forward", seekToReceived => {
            setSeekTo(seekToReceived);
        });
        /* When the rewind button is pressed, update the seekTo state */
        socket.on("rewind", seekToReceived => {
            /* If the data sent from backend & the current seekTo state is 0
               start the video from the beginning */
            if ((seekToReceived && seekTo) === 0) videoRef.current.seekTo(0);
            else setSeekTo(seekToReceived);
        });
        /* When the current time is sent to frontend every second, update the 
           currentTime state every second on client while video is playing */
        socket.on("current-time", currentTimeReceived => {
            setCurrentTime(currentTimeReceived);
        });
        /* If a second player is open, check the mute state of other players and
           set video player mute true or false */
        socket.on("check-mute", muteReceived => {
            setMute(muteReceived);
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
                         ref={videoRef}
                         /* When a second video plays, seek the video to the first
                            play to sync the videos on each player */
                         onReady={() => videoRef.current.seekTo(seekTo)}
                         /* When a second video plays, seek the mute state to the first
                            video so each video has the same mute state */
                         onPlay={() => socket.emit('check-mute')}
            />
            <Info>
                Volume: { volume * 100  }%
            </Info>
            <Info>
                Muted: { mute ? 'True' : 'False'}
            </Info>
        </>
    )
}

export default HomePage;