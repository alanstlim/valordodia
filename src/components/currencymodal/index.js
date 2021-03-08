import React, { useState } from 'react';
import { Modal, StatusBar, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox'

import { Container, Content, ScrollContainer, Logo, Title, Info, Flag, CurrencyContainer,
        CurrencyContent, ButtonModal, ButtonText } from './styles';
import colors from '../../config/colors';
import pigif from '../../assets/pigif.gif';
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

export default function CurrencyModal({
    isVisible=false, loadData, hide
}) {
    const [selectedCurrencies, setSelectedCurrencies] = useState([]);
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

    const handleCheckBox = (item, checked) => {
        if (checked) {
            selectedCurrencies.push(item);
        } else {
            selectedCurrencies.map((currency, index) => {
                if (currency.code === item.code) {
                    selectedCurrencies.splice(index, 1);
                }
            })
        }

        if (selectedCurrencies.length === 4){
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
                <Logo source={pigif} />
                <Content>
                    <Title> Bem vindo ao Valor do dia.</Title>
                    <Info> Escolha até quatro moedas para acompanhar diariamente.</Info>
                    <ScrollContainer>
                        <CurrencyContainer>
                            {currencyList.map((item) => {
                                const [toggleCheckBox, setToggleCheckBox] = useState(false);
                                return (
                                    <CurrencyContent key={item.code.toString()}>
                                        <TouchableOpacity
                                            onPress={() => setToggleCheckBox(!toggleCheckBox) & handleCheckBox(item, !toggleCheckBox)}
                                            disabled={isDisabled & !toggleCheckBox}
                                        >
                                            <Flag source={item.flag} />
                                            <CheckBox
                                                disabled={false}
                                                value={toggleCheckBox}
                                                style={{ marginLeft: 20 }}
                                                disabled={isDisabled & !toggleCheckBox}
                                                onValueChange={() => setToggleCheckBox(!toggleCheckBox) & handleCheckBox(item, !toggleCheckBox)}
                                            />
                                        </TouchableOpacity>
                                    </CurrencyContent>
                                )
                            })}
                        </CurrencyContainer>
                    </ScrollContainer>
                    <TouchableOpacity onPress={() => hide() & loadData(selectedCurrencies)}>
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