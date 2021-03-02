import React from 'react';

import { Container, Title, Logo } from './styles';
import pigif from '../../assets/pigif.gif';

export default function Header({ 
    title = ''
}) {

    return (
        <Container >
            <Title> {title} </Title>
            <Logo source={pigif}/>
        </Container>

    );
};