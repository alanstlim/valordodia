import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { getLocalUser } from '../../services/storage';
import { Container, Content, Menu } from './styles';
import Header from '../../components/header';
import Card from '../../components/calculatorcard'
import colors from '../../config/colors';

export default function Calculator () {

    const [user, setUser] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        await getLocalUser().then((localUser) => {
            setUser(localUser);
        });
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Valor em Real"} />
            <Content>
            {user.currency?.map((item, index) => {
                return (
                <Card key={index.toString()} currency={item} />
                );
            })}
            </Content>
        </Container>
    );
}