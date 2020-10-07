import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

// Styling for PartyFlix logo
export const StyledImg = styled.img`
    margin: 0.8rem 0rem 0rem 3.5rem;
`;

// Styling for "grab a remote" button
export const StyledButton = styled.button`
    box-sizing: border-box;
    padding: 10px;
    margin-right: 3.5rem;
    background-color: #DB202C;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    &:hover {
        filter: brightness(1.1);
    }
    &:active {
        transform: translateY(0.1rem);
    }
    &:focus {
        outline: none;
    }
`;