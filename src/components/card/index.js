import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import api from '../../services/api';

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
    flag='',
}) {
    const [name, setName] = useState('');
    const [high, setHigh] = useState('');
    const [low, setLow] = useState('');
    const [varBid, setVarBid] = useState('');
    const [bid, setBid] = useState('');

    useEffect(() => {
       loadData();
    }, []);

    switch (currency) {
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

    const loadData = async () => {
        if (currency !== '') {
            await api.get(currency).then((response) => {
                {
                    response.data.map((item) => {
                        setName(item.name);
                        setHigh(item.high);
                        setLow(item.low);
                        setVarBid(item.varBid);
                        setBid(item.bid);
                    })
                }
            });
        }
    }

    return (
        <Container>
            {flag !== '' ? (
                <>
                    <Flag source={flag} />
                    <Title> {name.substr(0,18)} </Title>
                    <Content>
                        <Info> Máximo : R$: {high} </Info>
                        <Info> Mínimo : R$: {low} </Info>
                        <Info> Variação : {varBid} </Info>
                        <Info> Atual : R$ {bid} </Info>
                    </Content>
                </>
            ) : (
                <>
                    <Pig source={pig} />
                    <TouchableOpacity onPress={() => loadData()}>
                    <BottomContent>
                        <BottomText> Escolha uma moeda</BottomText>
                    </BottomContent>
                    </TouchableOpacity>
                </>
            )}
        </Container>
    );
}