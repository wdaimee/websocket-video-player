import styled from 'styled-components';

export const RemoteDiv = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const InputContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

// Styling for input
export const StyledInput = styled.input`
    box-sizing: border-box;
    padding: 0.625rem;
    font-size: 1rem;
    color: black;
    width: 30%;
    border-radius: 0.3125rem;
    border: none;

    &:focus {
        outline: none;
    }
`;

// Styling for the remote control that will be displayed on remote page
export const Remote = styled.div`
    position: relative;
    width: 25rem;
    height: 37.5rem;
    background-color: #111111;
    border-radius: 3.125rem;
    margin: 2.5rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
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