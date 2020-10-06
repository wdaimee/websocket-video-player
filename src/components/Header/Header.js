import React from 'react';
import { HeaderContainer, StyledImg, StyledButton } from './Header.styles';

const Header = () => {
    return(
        <HeaderContainer>
            <StyledImg src="https://fontmeme.com/permalink/201006/348e46133a33f1cf8e7b007b9f6616ef.png" alt="netflix-font" border="0" />
            <StyledButton>Grab a Remote</StyledButton>
        </HeaderContainer>
    )
}

export default Header;