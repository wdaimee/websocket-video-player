import React from 'react';
import styled from 'styled-components';
import { icons } from './icons';

const BaseIcon = ({ icon, ...props}) => {
    const Ikon = icons[icon];
    if (!Ikon) return null;
    return <Ikon {...props} />;
}

export const Icon = styled(BaseIcon)`
    height: ${props => props.size};
    width: ${props => props.size};
    color: ${props => props.color};
`;