import React, { useEffect, useState } from 'react';
import { StatusBar, ToastAndroid } from 'react-native';

import { Container, Content, Title, ScrollContainer } from './styles';

import api from '../../services/api';
import { getLocalUser } from '../../services/storage';
import Header from '../../components/header';
import Card from '../../components/card';
import colors from '../../config/colors';

export default function Home() {
    const [user, setUser] = useState([]);
    const [quotationDate, setQuotationDate] = useState([]);

    useEffect(() => {
        loadLocalUser();
    }, []);

    const loadLocalUser = async () => {
        await getLocalUser().then((localUser) => {
        setUser(localUser);
        });
      };



    return (

        <Container>
            <StatusBar barStyle='dark-content' backgroundColor={colors.primary} />
            <Header title={"Cotação"} />
            <ScrollContainer>
                <Content>
                    {user.currency?.map((item, index) => {
                        return (
                            <Card key={index.toString()} currency={item} />
                        );
                    })}
                </Content>
            </ScrollContainer>
        </Container>

    );

}