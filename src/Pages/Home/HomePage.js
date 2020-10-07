import React, { useEffect } from 'react';
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
        setMute 
    }) => {

    // method for socket.io connections
    useEffect(() => {
        /* when client connects to socket, receive video url and update
           state of url */
        socket.on("connected", data => {
            console.log(data);
            setUrl(data.url);
            setPlaying(data.playing);
            setVolume(data.volume);
        });
        /* when client connects to socket, receive default state from 
           backend */
        socket.on("url changed", data => {
            setUrl(data);
        });
        /* When the play/pause button is pressed, 
           toggle the boolean value of playing state*/
        socket.on("play", () => {
            setPlaying(!playing);
        });
        /* When the volume up message is received, update 
           the volume state with info from backend */
           socket.on("volume-up", volume => {
            setVolume(volume);
        });
        /* When the volume down message is received, update 
           the volume state with info from backend */
           socket.on("volume-down", volume => {
            setVolume(volume);
        });
        /* When the mute button is pressed, update the mute state */
        socket.on("mute", () => {
            setMute(!mute);
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
            />
            <div style={{color: 'white'}}>Volume: {volume}</div>
            { mute ? <div style={{color: 'white'}}> Muted </div> : null }
        </>
    )
}

export default HomePage;