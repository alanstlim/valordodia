import React, { useEffect, useState } from 'react';
import { StatusBar, Text } from 'react-native';

import api from '../../services/api';
import { Container, Content, Menu } from './styles';
import Header from '../../components/header';
import Card from '../../components/calculatorcard'
import colors from '../../config/colors';

export default function Calculator () {

    const [currencyCard, setCurrencyCard] = useState({});

    const selectedCurrencies = 'USD-BRL,EUR-BRL,CAD-BRL,ARS-BRL';

    useEffect(() => {
        loadData();
        console.log(currencyCard)
    }, []);

    const loadData = async () => {
        const response = await api.get('/all/' + selectedCurrencies);
            setCurrencyCard(response.data);
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.secondary} />
            <Header title={"Valor em Real"} />
            <Content>
          
            </Content>
        </Container>
    );
}