import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { getLocalUser } from '../../services/storage';
import { Container, Content, Menu, VoidContent, Info } from './styles';
import Header from '../../components/header';
import Card from '../../components/calculatorcard'
import colors from '../../config/colors';

export default function Calculator () {

    const [user, setUser] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    let count = 0;

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        await getLocalUser().then((localUser) => {
            setUser(localUser);
            {localUser.currency?.map((item) => {
               if (item === '') {
                   count += 1;
               }
            })}

            if (count === 4) {
                setIsEmpty(true);
            }
        });
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Valor em Real"} />
            <Content>
                {isEmpty ? (
                    <VoidContent>
                        <Info> Nenhuma moeda foi selecionada para usar a calculadora. </Info>
                        <Icon name="server-outline" size={60} color={colors.dark} />
                    </VoidContent>
                ) : (
                        user.currency?.map((item, index) => {
                            return (
                                <Card key={index.toString()} currency={item} />
                            );
                        })
                    )}
            </Content>
        </Container>
    );
}



