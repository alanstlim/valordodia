import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(13,13,13,0.4);  
`;

export const Content = styled.View`
    height: 65%;
    width: 75%;
    border-radius: 20px;
    background-color: ${colors.white};
    align-items: center;
    padding: 15px;
    opacity: 1;
`;

export const CurrencyContainer = styled.View`
    flex: 1;
    margin: 15px;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`; 

export const ButtonModal = styled.View`
    width: 150px;
    height: 50px;
    border-radius: 30px;
    background-color: ${colors.secondary};
    align-items: center;
    justify-content: center;
`;

export const ButtonText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
`;


export const CurrencyContent = styled.View`
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 96px;
    margin: 5px;
`;

export const Flag = styled.Image`
    width: 60px;
    height: 30px;
    margin: 7px;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: bold;
`;

export const Info = styled.Text`
    font-size: 16px;
    margin: 5px;
    text-align: center;
`;