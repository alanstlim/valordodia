import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ToastAndroid } from 'react-native';
import { Actions } from 'react-native-router-flux';

import api from '../../services/api';
import Loading from '../../components/loading';
import ChooseModal from '../choosemodal';
import { setLocalUser, getLocalUser } from '../../services/storage';

import { Container, Content, Flag, Title, Info, Pig, BottomContent, 
    BottomText, LeftText, RightText, RowText} from './styles';

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

export default function Card({
    currency='',
    flag='',
}) {
    const [name, setName] = useState('');
    const [high, setHigh] = useState(0);
    const [low, setLow] = useState(0);
    const [varBid, setVarBid] = useState(0);
    const [bid, setBid] = useState(0);
    const [dateDuotation, setDateQuotation] = useState(0);
    const [load, setLoad] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [listCurrency, setListCurrency] = useState([]);

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
            try {
                await api.get(currency.code).then((response) => {
                        response.data.map((item) => {
                            setName(item.name);
                            setDateQuotation(item.create_date);
                            setHigh(parseFloat(item.high).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
                            setLow(parseFloat(item.low).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
                            setVarBid(item.varBid);
                            setBid(parseFloat(item.bid).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1."));
                        })
                });
            } catch (e) {
                setLoad(false);
                ToastAndroid.show("Houve um problema ao carregar os dados, tente novamente mais tarde." + e, ToastAndroid.LONG);
            }
        }
        setLoad(false)
    }


    const loadNewCurrency = async (newList) => {
        setLoad(true);
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
        setLoad(false);
    }

    const handleChoose = () => {
        setIsVisible(true);
    }

    return (
        <Container>
            {load ? (
                <Loading />
            ) : (flag !== '' ? (
                <>
                    <Flag source={flag} />
                    <Title> {name.substring(0, 18)} </Title>
                    <Content>
                        <RowText>
                            <LeftText>
                                <Info> Máximo :</Info>
                                <Info> Mínimo : </Info>
                                <Info> Variação : </Info>
                                <Info> Data : </Info>
                                <Info> Apuração : </Info>
                            </LeftText>
                            <RightText>
                                <Info> R$: {high.toString().substring(0, 7)} </Info>
                                <Info>R$: {low.toString().substring(0, 7)} </Info>
                                <Info>{varBid} </Info>
                                <Info> {dateDuotation.toString().substring(0,10).split('-').reverse().join('/')} </Info>
                                <Info> {dateDuotation.toString().substring(11)} </Info>
                            </RightText>
                        </RowText>
                        <BottomContent>
                            <BottomText> R$: {bid} </BottomText>
                        </BottomContent>
                    </Content>
                </>
            ) : (
                    <>
                        <Pig source={pigif} />
                            <TouchableOpacity onPress={() => handleChoose()}>
                                <BottomContent>
                                    <BottomText> Escolha uma moeda</BottomText>
                                </BottomContent>
                            </TouchableOpacity>
                        </>
                    ))}
            <ChooseModal
                isVisible={isVisible}
                hide={() => setIsVisible(false)}
                loadNewList={loadNewCurrency}
            />
        </Container>
    );
}