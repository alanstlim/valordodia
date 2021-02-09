import React, { useEffect } from 'react';
import { StatusBar} from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content, Title } from './styles';
import Header from '../../components/header';
import Card from '../../components/card';
import colors from '../../config/colors';

export default function Home() {

    return (

        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.secondary} />
            <Header title={"Cotação"} />
            <Content>
                <Card />
                <Card />
                <Card />
                <Card />
            </Content>
        </Container>
        
    );

}