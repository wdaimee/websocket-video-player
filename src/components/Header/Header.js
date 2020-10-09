import React from 'react';
import { HeaderContainer, StyledImg, StyledButton } from './Header.styles';
import { NavLink, useLocation } from 'react-router-dom';

// Header component for logo and "grab a remote button"
const Header = () => {
    // Get current page 
    let currentPage = useLocation();
    return(
        <HeaderContainer>
            <StyledImg src="https://fontmeme.com/permalink/201006/348e46133a33f1cf8e7b007b9f6616ef.png" alt="netflix-font" border="0" />
            {/* render the 'grab a remote' button only on the home page */}
            { currentPage.pathname === '/' ? 
                <NavLink to="/remote" target="_blank">
                    <StyledButton>Grab a Remote</StyledButton>
                </NavLink>
                :
                null
            }
        </HeaderContainer>
    )
}

export default Header;