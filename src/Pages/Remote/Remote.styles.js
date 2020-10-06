import styled from 'styled-components';
import { StyledButton } from '../../components/Header/Header.styles';

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
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

// Styling for input
export const StyledInput = styled.input`
    box-sizing: border-box;
    padding: 10px;
    font-size: 1rem;
    color: black;
    width: 35%;
    border-radius: 5px;
    border: none;

    &:focus {
        outline: none;
    }
`;

export const WatchButton = styled(StyledButton)`
    margin-left: 1rem;
`;

export const RemoteContainer = styled.div`
    width: 30%;
    height: 50%;
    background-color: #111111;
    border-radius: 50px;
`;