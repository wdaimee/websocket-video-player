import React from 'react';
import ReactPlayer from 'react-player';
import { Title } from './Home.styles';

const Home = ({ url, playing }) => {
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