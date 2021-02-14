import React, { useEffect, useState } from 'react';
import { StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Logo, Title } from './styles';
import api from '../../services/api';
import { setLocalUser, getLocalUser } from '../../services/storage';
import colors from '../../config/colors';
import pig from '../../assets/pig.png';

export default function SplashScreen() {

    const [currentUser, SetCurrentUser] = useState(null);

    useEffect(() => {
        checkUser();
    }, [])

    const checkUser = async () => {

        getLocalUser().then((localUser) => {
            SetCurrentUser(localUser);
        });

        // if (currentUser === null) {
        //     // abrir modal e pedir para selecionar até 4 moedas
        // } else {
        //     loadData();
        // }
        loadData();
    }

    const loadData = async () => {
        const response = await api.get("/all");
        setLocalUser({
            currency1: response.data.CAD,
            currency2: response.data.USD,
            currency3: '',
            currency4: '',
        });
        navigateScreen();
    }

    const navigateScreen = () => {
        const timer = setTimeout(() => {
            Actions.bottomBar()
        }, 2000)
    }

    return (

        <Container>
            <StatusBar barStyle='dark-content' backgroundColor= {colors.primary} />
            <Logo source={pig} />
            <Title> Valor do Dia</Title>
        </Container>
        
    );

}