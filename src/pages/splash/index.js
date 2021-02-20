import React, { useEffect, useState } from 'react';
import { StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Logo, Title } from './styles';
import api from '../../services/api';
import { setLocalUser, getLocalUser } from '../../services/storage';
import ModalCurrency from '../../components/modalcurrency';
import colors from '../../config/colors';
import pig from '../../assets/pig.png';

export default function SplashScreen() {

    const [currentUser, SetCurrentUser] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            checkUser();
        }, 1500)
    }, [])

    const checkUser = async () => {

        await getLocalUser().then((localUser) => {
           SetCurrentUser(localUser);
        });
     
        if (currentUser === null) {
            setIsVisible(true);
        } else {
            loadData();
        }
    }

    const loadData = async (selectedCurrencies) => {
        const listCurrency = [];

            selectedCurrencies?.map((currency) => {
                listCurrency.push(currency.code);
            });

            for (let i = listCurrency.length; i < 4; i++) {
                listCurrency.push('');
            }

        if (listCurrency.length !== 0) {
            setLocalUser({
                currency: listCurrency,
            })
        }

        navigateScreen();
    }

    const navigateScreen = () => {
        const timer = setTimeout(() => {
            Actions.bottomBar()
        }, 2000)
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Logo source={pig} />
            <Title> Valor do Dia</Title>
            <ModalCurrency
                isVisible={isVisible}
                hide={() => setIsVisible(false)}
                loadData={loadData}
            />
        </Container>
    );

}