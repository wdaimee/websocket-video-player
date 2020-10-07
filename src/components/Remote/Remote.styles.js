import styled from 'styled-components';

// Styling for the remote control that will be displayed on remote page
export const RemoteDiv = styled.div`
    position: relative;
    width: 25rem;
    height: 37.5rem;
    background-color: #111111;
    border-radius: 3.125rem;
    border: 0.125rem solid black;
    margin: 2.5rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0.3125rem 0.3125rem 0.625rem black;
`;

// Styling for 'The Remote' image
export const StyledImg = styled.img`
    margin-top: 0.625rem;
    width: 15rem;
    height: 4rem;
    top: 0;
`;

// Styling for blinking button
export const Light = styled.div`
    position: absolute;
    top: 2rem;
    right: 1.5rem;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 50%;
    background-color: ${({ blink }) => blink === false ? '#8b0000' : '#DB202C'};
`;

// Default styling for remote buttons
export const DefaultRemoteButton = styled.button`
    background-color: #DB202C;
    border: none;
    box-shadow: 0 0.3125rem #999;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        box-shadow: 0 0.125rem #999;
        transform: translateY(0.3125rem);
    }

    &:focus {
        outline: none;
    }
`;

// Styling for play/pause button
export const MiddleButton = styled(DefaultRemoteButton)`
    border-radius: 50%;
    height: 9.375rem;
    width: 9.375rem;
    position: absolute;
    top: calc(50% - 75px);
`;

export const VolumeButtonContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

// styling for vertical buttons
export const VerticalButton = styled(DefaultRemoteButton)`
    border-radius: 5px;
    height: 9.375rem;
    width: 75px;
`;

// styling for horizontal button
export const HorizontalButton = styled(DefaultRemoteButton)`
    border-radius: 5px;
    width: 9.375rem;
    height: 75px;
`;