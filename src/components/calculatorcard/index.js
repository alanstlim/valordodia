import React, { useState, useEffect } from 'react';
import { TextInputMask } from 'react-native-masked-text'

import api from '../../services/api';
import Loading from '../../components/loading';
import colors from '../../config/colors';

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
    const [currentValue, setCurrentValue] = useState('1,00');
    const [realValue, setRealValue] = useState('1,00');
    const [load, setLoad] = useState(false);

    useEffect(() => {
        loadData();
     }, []);

    switch (currency.code) {
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
            setLoad(true);
            await api.get(currency.code).then((response) => {
                {
                    response.data.map((item) => {
                        setName(item.name);
                        setBid(parseFloat(item.bid).toFixed(2));
                        setRealValue(parseFloat(item.bid).toFixed(2).replace('.',','));
                    })
                }
            });
        }
        setLoad(false);
    }

    const handleCurrency = (value) => {
        let formatedValue;
        if (value.toString().replace('$ ', '').length < 8) {
            formatedValue = value.replace(',','.').replace('$ ', '');
        } else {  
            formatedValue = parseFloat(value.toString().replace('$ ', '').replace('.', '').replace(',', '.'));
        }
        const result = ( formatedValue * bid);
        if (result === 0) {
            setRealValue("0,00")
        } else {
            setRealValue(result);
        }
        setCurrentValue(value);
    }

    const handleReal = (value) => {
        let formatedValue;
        if (value.toString().replace('R$ ', '').length < 8) {
            formatedValue = value.replace(',','.').replace('R$ ', '');
        } else {  
            formatedValue = parseFloat(value.toString().replace('R$ ', '').replace('.', '').replace(',', '.'));
        }
        const result = ( formatedValue / bid);
        if (result === 0) {
            setCurrentValue("0,00")
        } else {
            setCurrentValue(result);
        }
        setRealValue(value);
    }

    return (
        <Container>
            {load ? (
                <Loading />
            ) : (name !== '' ? (
                <>
                    <Content>
                        <Title> {name} </Title>
                        <Flag source={flag} />
                        <TextInputMask
                            style={{
                                height: 40, width: 100, backgroundColor: colors.white,
                                margin: 5, borderRadius: 15, textAlign: 'center', fontWeight: 'bold'
                            }}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: '$ ',
                                suffixUnit: ''
                            }}
                            type={'money'}
                            onChangeText={value => handleCurrency(value)}
                            value={currentValue}
                        />
                    </Content>
                    <Title> - </Title>
                    <Content>
                        <Title> BRL </Title>
                        <Flag source={brl} />
                        <TextInputMask
                            style={{
                                height: 40, width: 100, backgroundColor: colors.white,
                                margin: 5, borderRadius: 15, textAlign: 'center', fontWeight: 'bold'
                            }}
                            options={{
                                precision: 2,
                                separator: ',',
                                delimiter: '.',
                                unit: 'R$ ',
                                suffixUnit: ''
                            }}
                            type={'money'}
                            onChangeText={value => handleReal(value)}
                            value={realValue}
                        />
                    </Content>
                </>
            ) : (
                    null
                ))}

        </Container>
    );
}