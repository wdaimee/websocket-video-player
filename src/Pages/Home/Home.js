import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Title } from './Home.styles';

// Home Page content with Title and Video Player
const Home = ({ socket, url, playing, setUrl, setPlaying }) => {

    // https://www.youtube.com/watch?v=HRdLNFl4-mU

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
        <>
            <Title>Watch videos and take control of the action with you friends!</Title>
            <ReactPlayer style={{zIndex: 1}}
                         url={url}
                         playing={playing}
                         width="961px"
                         height="601px"
            />
        </>
    )
}

export default Home;