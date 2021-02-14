import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Content } from './styles';
import Header from '../../components/header';
import colors from '../../config/colors';

export default function Profile () {

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Configurações"} />
            <Content>
                
            </Content>
        </Container>
    );
}