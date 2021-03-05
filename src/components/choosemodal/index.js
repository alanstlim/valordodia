import React, { useEffect, useState } from 'react';
import { Modal, StatusBar, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'
import Icon from 'react-native-vector-icons/Ionicons';
import { getLocalUser } from '../../services/storage';

import {
    Container, Content, Info, Flag, CurrencyContainer,
    CurrencyContent, ButtonModal, ButtonText, Header
} from './styles';
import colors from '../../config/colors';
import pig from '../../assets/pig.png';
import ars from '../../assets/ARS.png';
import aud from '../../assets/AUD.png';
import btc from '../../assets/BTC.png';
import cad from '../../assets/CAD.png';
import chf from '../../assets/CHF.png';
import cny from '../../assets/CNY.png';
import eur from '../../assets/EUR.png';
import gbp from '../../assets/GBP.png';
import ils from '../../assets/ILS.png';
import jpy from '../../assets/JPY.png';
import ltc from '../../assets/LTC.png';
import usd from '../../assets/USD.png';

export default function ChooseModal({
    isVisible = false, loadNewList, hide
}) {
    const [selectedCurrencies, setSelectedCurrencies] = useState([]);
    const [newSelected, setnewSelected] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    let currencyList = [
        {
            code: "ARS",
            flag: ars,
            checked: false,
        },
        {
            code: "AUD",
            flag: aud,
            checked: false,
        },
        {
            code: "BTC",
            flag: btc,
            checked: false,
        },
        {
            code: "CAD",
            flag: cad,
            checked: false,
        },
        {
            code: "CHF",
            flag: chf,
            checked: false,
        },
        {
            code: "CNY",
            flag: cny,
            checked: false,
        },
        {
            code: "EUR",
            flag: eur,
            checked: false,
        },
        {
            code: "GBP",
            flag: gbp,
            checked: false,
        },
        {
            code: "ILS",
            flag: ils,
            checked: false,
        },
        {
            code: "JPY",
            flag: jpy,
            checked: false,
        },
        {
            code: "LTC",
            flag: ltc,
            checked: false,
        },
        {
            code: "USD",
            flag: usd,
            checked: false,
        },
    ];

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        await getLocalUser().then((localUser) => {
            localUser.currency.map((item) => {
                if (typeof item.code !== "undefined") {
                    selectedCurrencies.push(item.code)
                    newSelected.push(item);
                }
            })

        });

    }

    const handleCheckBox = (item, checked) => {

        if (checked) {
            newSelected.push(item);
        } else {
            newSelected.map((currency, index) => {
                if (currency.code === item.code) {
                    newSelected.splice(index, 1);
                }
            })
        }

        if (newSelected.length === 4) {
            setIsDisabled(true);
        } else {
            setIsDisabled(false);
        }
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                isVisible = false;
            }}
        >
            <StatusBar barStyle='light-content' backgroundColor={colors.secondary} />
            <Container>
                <Content>
                    <Header>
                        <TouchableOpacity onPress={() => hide()}>
                            <Icon name="close-outline" size={24} color={colors.dark} />
                        </TouchableOpacity>
                    </Header>
                    <Info> Escolha até quatro moedas para acompanhar diariamente.</Info>
                    <CurrencyContainer>
                        {currencyList.map((item) => {
                            const [toggleCheckBox, setToggleCheckBox] = useState(false);
                            return (
                                <CurrencyContent key={item.code.toString()}>
                                    <TouchableOpacity
                                        onPress={() => setToggleCheckBox(!toggleCheckBox) & handleCheckBox(item, !toggleCheckBox)}
                                        disabled={selectedCurrencies.indexOf(item.code) > -1 ? true : !toggleCheckBox & isDisabled}
                                    >
                                        <Flag source={item.flag} />
                                        <CheckBox
                                            disabled={false}
                                            value={selectedCurrencies.indexOf(item.code) > -1 ? true : toggleCheckBox}
                                            style={{ marginLeft: 20 }}
                                            disabled={selectedCurrencies.indexOf(item.code) > -1 ? true : !toggleCheckBox & isDisabled}
                                            onValueChange={() => setToggleCheckBox(!toggleCheckBox) & handleCheckBox(item, !toggleCheckBox)}
                                        />
                                    </TouchableOpacity>
                                </CurrencyContent>
                            )
                        })}
                    </CurrencyContainer>
                    <TouchableOpacity onPress={() => hide() & loadNewList(newSelected)}>
                        <ButtonModal>
                            <ButtonText>
                                Continuar
                            </ButtonText>
                        </ButtonModal>
                    </TouchableOpacity>
                </Content>
            </Container>
        </Modal>
    );
}