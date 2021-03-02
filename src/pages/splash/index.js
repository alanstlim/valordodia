import React, { useEffect, useState } from 'react';
import { StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Logo, Title } from './styles';
import Loading from '../../components/loading';
import { setLocalUser, getLocalUser } from '../../services/storage';
import ModalCurrency from '../../components/modalcurrency';
import colors from '../../config/colors';
import pigif from '../../assets/pigif.gif';

export default function SplashScreen() {

    const [isVisible, setIsVisible] = useState(false);
    const listCurrency = [];

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            checkUser();
        }, 2500)
    }, [])

    const checkUser = async () => {
        
        // Reset Local User
        // setLocalUser(null)

        await getLocalUser().then((localUser) => {
            if (localUser === null) {
                setIsVisible(true);
            } else {
                loadData(localUser.currency);
            }
        });
    }

    const loadData = async (selectedCurrencies) => {
            selectedCurrencies?.map((currency) => {
               listCurrency.push(currency);
            });

            for (let i = listCurrency.length; i < 4; i++) {
                listCurrency.push('');
            }

        if (listCurrency.length !== 0) {
            setLocalUser({
                currency: listCurrency
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
            <Logo source={pigif} />
            <Title> Valor do Dia</Title>
            <Loading />
            {isVisible ?
            <ModalCurrency
                isVisible={isVisible}
                hide={() => setIsVisible(false)}
                loadData={loadData}
            />
        : null }
        </Container>
    );

}