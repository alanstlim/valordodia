import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import api from '../../services/api';
import { Container, Content, Menu } from './styles';
import Header from '../../components/header';
import Card from '../../components/calculatorcard'
import colors from '../../config/colors';

export default function Calculator () {


    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Valor em Real"} />
            <Content>
                <Card title={"Dolar Americano"} flag={"USD"} />
                <Card title={"Dolar Canadense"} flag={"CAD"} />
                <Card title={"Peso Argentino"} flag={"ARS"} />
                <Card title={"Yeny"} flag={"JPY"} />
            </Content>
        </Container>
    );
}