import React from 'react';

import { Container, Content, Flag, Title, Info } from './styles';

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

    return (
        <Container>
            <Flag source={usd} />
            <Title> {name} </Title>
            <Content>
                <Info> Máximo : R$: {high} </Info>
                <Info> Mínimo : R$: {low} </Info>
                <Info> Variação : {varBid} </Info>
                <Info> Atual : R$ 5,25 </Info>
            </Content>
        </Container>
    );
}