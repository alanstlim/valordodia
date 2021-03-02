import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Content, List, BottomContent, BottomText, MenuContent, MenuText } from './styles';
import Header from '../../components/header';
import colors from '../../config/colors';

export default function Profile () {

    const menu = [
        {
            title: "Escolha suas moedas",
            handle: "currency",
            icon: "",
        },
        {
            title: "Colabore com o nosso trabalho!",
            handle: "donate",
            icon: "",
        },
        {
            title: "Resetar moedas",
            handle: "reset",
            icon: "",
        },
        {
            title: "Sobre nós",
            handle: "about",
            icon: "",
        },
        {
            title: "Contate-nos.",
            handle: "contact",
            icon: "",
        },
        {
            title: "Fonte de dados.",
            handle: "dataFont",
            icon: "",
        }
    ];

    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Configurações"} />
            <Content>
                <List
                    data={menu}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <MenuContent>
                            <MenuText> {item.title} </MenuText>
                        </MenuContent>
                    }
                />
                <BottomContent>
                    <BottomText> Avalie nosso Aplicativo! </BottomText>
                </BottomContent>
            </Content>
        </Container>
    );
}