import React from 'react';
import { Modal, StatusBar, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../config/colors';
import github from '../../assets/github.png';
import linkedin from '../../assets/linkedin.png';

import { Container, Content, BodyModal, ImageContent, Header, Title, Info, SubInfo, ImgNetwork, Scroll } from './styles';

export default function MenuModal({
    isVisible = false, hide, typeModal=''
}) {

    const ContentModal = () => {
        switch (typeModal) {
            case 'about':
                return (
                    <BodyModal>
                        <Scroll>
                        <Title> Sobre Nós </Title>
                        <Info> O Valor do Dia é um aplicativo que nasceu sob ideia de crescer, e quando digo crescer digo de forma intelectual,
                        e por em prática foi a melhor maneira que encontrei para testar esses conhecimentos.</Info>

                        <Title marginTop> Sobre a Ideia </Title>
                        <Info> Ela veio no momento em que comecei a me interessar no mercado internacional e ir atrás de pesquisar o "valor" da moeda do
                             país em especifico, logo juntei o útil ao agradável</Info>
                        <SubInfo> Obs: "Valor do Dia" é um aplicativo de código aberto.</SubInfo>
                        </Scroll>
                    </BodyModal>
                )
            case 'contact':
                return (
                    <BodyModal>
                        <Scroll>
                        <Title> Contato </Title>
                        <Info> Entre em contato e dê sugestões, criticas ou tire dúvidas, terei o maior prazer de responder.</Info>
                        <ImageContent>
                            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/alanstlim/valordodia')}>
                                <ImgNetwork source={github} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/alanstlim/')}>
                                <ImgNetwork source={linkedin} />
                            </TouchableOpacity>
                        </ImageContent>
                        <Info> O código do "Valor do Dia" é aberto, acesse o GitHub e personalize da forma que desejar.</Info>
                        </Scroll>
                    </BodyModal>
                )
            case 'dataFont':
                return (
                    <BodyModal>
                        <Scroll>
                        <Title> Fonte de Dados </Title>
                        <Info> Todos os dados fornecidos para o aplicativo são graças a AwesomeAPI.</Info>

                        <Title marginTop> Agradecimento </Title>
                        <Info> A AwesomeAPI tem um único propósito, oferecer um serviço funcional, simples e acessível.</Info>
                        <Info> Isso tornou possível o desenvolvimento do "Valor do Dia", desde já agradeço.</Info>

                        <Info marginTop> Links Úteis: </Info>
                        <TouchableOpacity onPress={() => Linking.openURL('mailto:contato@awesomeapi.com.br')}>
                            <Info> contato@awesomeapi.com.br </Info>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://docs.awesomeapi.com.br/api-de-moedas')}>
                            <Info> docs.awesomeapi.com.br/api-de-moedas</Info>
                        </TouchableOpacity>
                        </Scroll>
                    </BodyModal>
                )
            default:
                null;
        }
    }


    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                isVisible = false;
            }}
        >
            <StatusBar barStyle='light-content' backgroundColor={colors.secondary} />
            <Container>
                <Content>
                    <Header>
                        <TouchableOpacity onPress={() => hide()}>
                            <Icon name="close-outline" size={24} color={colors.dark} />
                        </TouchableOpacity>
                    </Header>
                    <ContentModal/>
                </Content>
            </Container>
        </Modal>
    );
}