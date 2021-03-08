import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Actions } from 'react-native-router-flux';

import { Container, Content, List, BottomContent, BottomText, MenuContent, MenuText, ItemMenu, Touchable, HeaderText } from './styles';
import { setLocalUser } from '../../services/storage';
import ChooseModal from '../../components/choosemodal';
import MenuModal from '../../components/menumodal';
import Header from '../../components/header';
import colors from '../../config/colors';

export default function Profile () {

    const [isVisible, setIsVisible] = useState(false);
    const [typeModal, setTypeModal] = useState(null);
    const [listCurrency, setListCurrency] = useState([]);

    const menu = [
        {
            title: "Escolha suas moedas",
            handle: "choose",
            icon: "basket-outline",
        },
        {
            title: "Resetar moedas",
            handle: "reset",
            icon: "trash-bin-outline",
        },
        {
            title: "Sobre nós",
            handle: "about",
            icon: "information-circle-outline",
        },
        {
            title: "Contate-nos",
            handle: "contact",
            icon: "chatbox-ellipses-outline",
        },
        {
            title: "Fonte de dados",
            handle: "dataFont",
            icon: "hardware-chip-outline",
        }
    ];

    const handleMenu = (handleItem, item) => {
        switch (handleItem) {
            case 'choose':
                choose()
                break;
            case 'reset':
                reset();
                break;
            case 'about':
                about(item);
                break;
            case 'contact':
                contact(item);
                break;
            case 'dataFont':
                dataFont(item);
        }
    }

    const choose = () => {
        setIsVisible("ChooseModal");
    }

    const reset = async () => {
        Alert.alert(
            "Resetar moedas",
            "Deseja realmente resetar suas moedas selecionadas?",
            [
                {
                    text: "Não",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => setLocalUser({ currency: ['', '', '', ''] }).finally(() => Actions.bottomBar())
                }
            ],
            { cancelable: true }
        );
    }

    const about = (menuItem) => {
        setIsVisible("MenuModal");
        setTypeModal(menuItem.handle)
    }

    const contact = (menuItem) => {
        setIsVisible("MenuModal");
        setTypeModal(menuItem.handle)
    }

    const dataFont = (menuItem) => {
        setIsVisible("MenuModal");
        setTypeModal(menuItem.handle)
    }

    const rateUs = () => {
        
    }

    const loadNewCurrency = async (newList) => {
        await newList?.map((currency) => {
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
        Actions.bottomBar();
    }



    return (
        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Configurações"} />
            <>
            <Content>
                <HeaderText> Valor do Dia </HeaderText>
                <List
                    data={menu}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <MenuContent>
                            <Touchable onPress={() => handleMenu(item.handle, item)}>
                                <ItemMenu>
                                    <Icon name={item.icon} size={24} color={colors.dark} />
                                    <MenuText> {item.title} </MenuText>
                                </ItemMenu>
                            </Touchable>
                        </MenuContent>
                    }
                />
                <Touchable onPress={() => rateUs()}>
                    <BottomContent>
                        <BottomText> Avalie nosso Aplicativo! </BottomText>
                    </BottomContent>
                </Touchable>
            </Content>
            </>
            <MenuModal
                isVisible={isVisible === "MenuModal" ? true : false}
                hide={() => setIsVisible(false)}
                typeModal={typeModal}
            />
            <ChooseModal
                isVisible={isVisible === "ChooseModal" ? true : false}
                hide={() => setIsVisible(false)}
                loadNewList={loadNewCurrency}
            />
           
        </Container>
    );
}