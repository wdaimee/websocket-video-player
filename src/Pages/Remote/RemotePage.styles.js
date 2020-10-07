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

export const MiddleButton = styled.button`
    border-radius: 50%;
    height: 150px;
    width: 150px;
    background-color: #DB202C;
    position: absolute;
    top: 50%;
    border: none;
    box-shadow: 0 5px #999;
    cursor: pointer;

    &:hover {
        filter: brightness(1.1);
    }

    &:active {
        box-shadow: 0 2px #999;
        transform: translateY(5px);
    }

    &:focus {
        outline: none;
    }
`;