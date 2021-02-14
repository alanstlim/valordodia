import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Container, Content, Flag, Title, Info, Pig, BottomContent, BottomText} from './styles';

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

export default function Card({
    currency='',
    name='',
    high='',
    low='',
    varBid='',
}) {

    switch (currency) {
        case 'ARS':
            currency = ars;
            break;
        case 'AUD':
            currency = aud;
            break;
        case 'BTC':
            currency = btc;
            break;
        case 'CAD':
            currency = cad;
            break;
        case 'CHF':
            currency = chf;
            break;
        case 'CNY':
            currency = cny;
            break;
        case 'EUR':
            currency = eur;
            break;
        case 'GBP':
            currency = gbp;
            break;
        case 'ILS':
            currency = ils;
            break;
        case 'JPY':
            currency = jpy;
            break;
        case 'LTC':
            currency = ltc;
            break;
        case 'USD':
            currency = usd;
            break;
    }

    return (
        <Container>
            {currency === '' ? (
                <>
                    <Flag source={usd} />
                    <Title> {name} </Title>
                    <Content>
                        <Info> Máximo : R$: {high} </Info>
                        <Info> Mínimo : R$: {low} </Info>
                        <Info> Variação : {varBid} </Info>
                        <Info> Atual : R$ 5,25 </Info>
                    </Content>
                </>
            ) : (
                <>
                    <Pig source={pig} />
                    <TouchableOpacity>
                    <BottomContent>
                        <BottomText> Escolha uma moeda</BottomText>
                    </BottomContent>
                    </TouchableOpacity>
                </>
            )}
        </Container>
    );
}