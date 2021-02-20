import React, { useState, useEffect } from 'react';

import api from '../../services/api';
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
    currency = '',
    flag = '',
}) {  

    const [bid, setBid] = useState(1);
    const [name, setName] = useState('');
    const [currentValue, setCurrentValue] = useState(1);

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
                        setBid(item.bid);
                        setName(item.name);
                        setCurrentValue( item.bid );
                    })
                }
            });
        }
    }

    const handleCurrency = (value) => {
        const result = (value * bid);
        if (result === 0) {
            setCurrentValue("0.00")
        } else {
            setCurrentValue(result.toString());
        }
    }

    return (
        <Container>
            {name !== '' ? (
                <>
                    <Content>
                        <Title> {name} </Title>
                        <Flag source={flag} />
                        <Input
                            placeholder='U$ 1,00'
                            keyboardType='number-pad'
                            value={"$: " + currentValue}
                        />
                    </Content>
                    <Title> - </Title>
                    <Content>
                        <Title> BRL </Title>
                        <Flag source={brl} />
                        <Input
                        onChangeText={value => handleCurrency(value)}
                        keyboardType='number-pad'
                        
                        />
                    </Content>
                </>
            ) : null
            }
        </Container>
        );
    }