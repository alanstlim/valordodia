import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Content } from './styles';
import Header from '../../components/header';
import Card from '../../components/calculatorcard'
import colors from '../../config/colors';

export default function Calculator () {

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.secondary} />
            <Header title={"Valor em Real"} />
            <Content>
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
    );
}