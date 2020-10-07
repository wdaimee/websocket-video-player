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

export const MiddleButton = styled.button`
    border-radius: 50%;
    height: 9.375rem;
    width: 9.375rem;
    background-color: #DB202C;
    position: absolute;
    top: calc(50% - 75px);
    border: none;
    box-shadow: 0 0.3125rem #999;
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