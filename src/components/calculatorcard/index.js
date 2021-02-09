import React from 'react';

import { Container, Content, Title, Flag, Input } from './styles';
import ars from '../../assets/ARS.png';
import aud from '../../assets/AUD.png';
import btc from '../../assets/BTC.png';
import brl from '../../assets/BRL.png';
import cad from '../../assets/CAD.png';
import chf from '../../assets/CHF.png';
import cny from '../../assets/CNY.png';
import eur from '../../assets/EUR.png';
import gbp from '../../assets/GBP.png';
import ils from '../../assets/ILS.png';
import jpy from '../../assets/JPY.png';
import ltc from '../../assets/LTC.png';
import usd from '../../assets/USD.png';

export default function CalculatorCard ({
    title='',
    flag='',
    price='',
}) {

    return (
        <Container>
            <Content>
                <Title> {title} </Title>
                <Flag source={usd}/>
                <Input />
            </Content>
            <Title> - </Title>
            <Content>
                <Title> BRL </Title>
                <Flag source={brl}/>
                <Input />
            </Content>
        </Container>
    );

}