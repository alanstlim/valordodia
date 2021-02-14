import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    height: 37%;
    width: 42%;
    margin: 7px;
    margin-top: 20px;
    background-color: ${colors.primary};
    border-radius: 20px;
    align-items: center;
    elevation: 8;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
`;

export const Content = styled.View`
    width: 100%;
    align-items: flex-start;
    padding: 10px;
`;

export const BottomContent = styled.View`
    width: 100%;
    height: 50px;
    margin-top: 26px;
    background-color: ${colors.dark};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    align-items: center;
    justify-content: center;
`; 

export const Flag = styled.Image`
    height: 55px
    width: 110px;
    margin: 10px;
    margin-top: 25px;
`;

export const Pig = styled.Image`
    height: 95px
    width: 100px;
    margin: 50px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: ${colors.secondary};
    font-weight: bold;
    margin: 10px;
`

export const Info = styled.Text`
    font-size: 14px;
    color: ${colors.secondary};
    font-weight: bold; 
    margin-bottom: 10px;
`

export const BottomText = styled.Text`
    font-size: 16px;
    color: ${colors.white};
    font-weight: bold;
    text-align: center;
    padding: 15px;
`