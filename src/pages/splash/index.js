import React, { useEffect } from 'react';
import { StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Logo, Title } from './styles';
import api from '../../services/api';
import colors from '../../config/colors';
import pig from '../../assets/pig.png';

export default function SplashScreen() {

    useEffect(() => {
        // const timer = setTimeout(() => {
        //     Actions.bottomBar()
        // }, 2000)
        loadData();
    }, [])

    const loadData = async () => {

        const response = await api.get("/all");
        console.log(response.data);
    }

    return (

        <Container>
            <StatusBar barStyle='dark-content' backgroundColor= {colors.primary} />
            <Logo source={pig} />
            <Title> Valor do Dia</Title>
        </Container>
        
    );

}