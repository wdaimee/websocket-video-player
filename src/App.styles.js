import styled from 'styled-components';
import Background from './images/bg.jpg';

export const AppDiv = styled.div`
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 5rem 0rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: radial-gradient(rgba(0,0,0,0), rgba(0,0,0,0.7)),
    url(${Background}) no-repeat center center/cover;
    background-size: cover;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        box-shadow: inset 4.375rem 3.125rem 11.875rem #000, inset -4.375rem -3.125rem -11.875rem;
    }
`;