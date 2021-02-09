import React, { useEffect } from 'react';
import { StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Logo, Title } from './styles';

import colors from '../../config/colors';
import pig from '../../assets/pig.png';

export default function SplashScreen() {

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     Actions.home()
        // }, 2000)
    }, [])

    return (

        <Container>
            <StatusBar barStyle='dark-content' backgroundColor= {colors.default} />
            <Logo source={pig} />
            <Title> Valor do Dia</Title>
        </Container>
        
    );

}