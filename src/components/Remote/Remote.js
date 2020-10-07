import React from 'react';
import { RemoteDiv, StyledImg, MiddleButton, Light } from './Remote.styles';
import { Icon } from '../../ui/Icon/Icon';

export const Remote = ({ blink, handlePlayPause, playing }) => {
    return(
        <RemoteDiv>
            <StyledImg src="https://fontmeme.com/permalink/201007/11ecf2dbc6b00f5b001353ba4805f2bb.png" alt="netflix-font" border="0" />
            <Light blink={blink} />
            <MiddleButton onClick={handlePlayPause}>
                { playing === true ? 
                    <Icon icon="pauseIcon" size="50px" color="white" />
                        :
                    <Icon icon="playIcon" size="50px" color="white" />
                }
            </MiddleButton>
        </RemoteDiv>
    )
}

export default Remote;