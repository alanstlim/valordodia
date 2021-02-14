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

export default function CalculatorCard({
    title = '',
    flag = '',
    price = '',
    active = '',

}) {  
    switch (flag) {
        case 'ARS':
            flag = ars;
            break;
        case 'AUD':
            flag = aud;
            break;
        case 'BTC':
            flag = btc;
            break;
        case 'CAD':
            flag = cad;
            break;
        case 'CHF':
            flag = chf;
            break;
        case 'CNY':
            flag = cny;
            break;
        case 'EUR':
            flag = eur;
            break;
        case 'GBP':
            flag = gbp;
            break;
        case 'ILS':
            flag = ils;
            break;
        case 'JPY':
            flag = jpy;
            break;
        case 'LTC':
            flag = ltc;
            break;
        case 'USD':
            flag = usd;
            break;
    }

        return (
            <Container>
                <Content>
                    <Title> {title} </Title>
                    <Flag source={flag}/>
                    <Input 
                        placeholder='U$ 1,00'
                        onChangeText={text => handleCurrency(text)}
                    />
                </Content>
                <Title> - </Title>
                <Content>
                    <Title> BRL </Title>
                    <Flag source={brl}/>
                    <Input 
                        placeholder='R$ 1,00'
                        onChangeText={text => handleReal(text)}
                    />
                </Content>
            </Container>
        );
    }