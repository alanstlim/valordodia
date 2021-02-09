import React from 'react';

import { Container, Title, Logo } from './styles';
import pig from '../../assets/pig.png';

export default function Header({ 
    title = ''
}) {

    return (
        <Container >
            <Title> {title} </Title>
            <Logo source={pig}/>
        </Container>

    );
};