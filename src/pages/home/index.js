import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Container, Content, Title } from './styles';

import { getLocalUser } from '../../services/storage';
import Header from '../../components/header';
import Card from '../../components/card';
import colors from '../../config/colors';

export default function Home() {

    const [currency1, setCurrency1] = useState([]);
    const [currency2, setCurrency2] = useState([]);
    const [currency3, setCurrency3] = useState([]);
    const [currency4, setCurrency4] = useState([]);
    

    useEffect(() => {
        loadLocalUser();
    }, []);

    const loadLocalUser = async () => {
        getLocalUser().then((localUser) => {
            setCurrency1(localUser.currency1)
            setCurrency2(localUser.currency2)
            console.log(localUser.currency1)
        });
      };

    return (

        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Cotação"} />
            <Content>
                <Card currency={currency1.code} name={currency1.name} high={currency1.high}
                    low={currency1.low} varBid={currency1.varBid} bid={currency1.bid} />
                <Card currency={currency2.code} name={currency2.name} high={currency2.high}
                    low={currency2.low} varBid={currency2.varBid} bid={currency2.bid} />
                <Card />
                <Card />
            </Content>
        </Container>
        
    );

}