import React from 'react';
import { RemoteDiv, 
         StyledImg, 
         MiddleButton, 
         Light, 
         VerticalButton,
         VolumeButtonContainer,
         HorizontalButton,
         SeekButtonContainer } from './Remote.styles';
import { Icon } from '../../ui/Icon/Icon';

export const Remote = 
    ({ 
       blink, 
       handlePlayPause, 
       playing,
       handleVolumeUp,
       handleVolumeDown,
       handleMute,
       mute,
       handleFastForward
    }) => {

    const playIcons = playing ? 
        <Icon icon="pauseIcon" size="50px" color="white" />
            :
        <Icon icon="playIcon" size="50px" color="white" />
    ;

    const muteIcons = mute ? 
        <>
            <Icon icon="muteIcon" size="30px" color="white" />
            <div>Muted</div> 
        </>    
        : 
        <>
            <Icon icon="unmuteIcon" size="30px" color="white" />
            <div>Unmuted</div>
        </>
    ;

    return(
        <RemoteDiv>
            <StyledImg src="https://fontmeme.com/permalink/201007/11ecf2dbc6b00f5b001353ba4805f2bb.png" alt="netflix-font" border="0" />
            <Light blink={blink} />
            <SeekButtonContainer>
                <HorizontalButton>
                    <Icon icon="rewindIcon" size="30px" color="white" />
                </HorizontalButton>
                <HorizontalButton onClick={handleFastForward}>
                    <Icon icon="fastForwardIcon" size="30px" color="white" />
                </HorizontalButton>
            </SeekButtonContainer>
            <MiddleButton onClick={handlePlayPause}>
                { playIcons }
            </MiddleButton>
            <VolumeButtonContainer>
                <VerticalButton onClick={handleVolumeUp}>
                    <Icon icon="volumeUpIcon" size="30px" color="white" />
                </VerticalButton>
                <HorizontalButton onClick={handleMute}>
                    { muteIcons }
                </HorizontalButton>
                <VerticalButton onClick={handleVolumeDown}>
                    <Icon icon="volumeDownIcon" size="30px" color="white" />
                </VerticalButton>
            </VolumeButtonContainer>
        </RemoteDiv>
    )
}

export default Remote;