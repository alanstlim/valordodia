import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

export const Content = styled.View`
    width: 80%;
    height: 75%;
    margin: 10px;
    border-radius: 20px;
    padding: 10px;
    background-color: ${colors.primary};
    elevation: 8;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
    align-items: center;
`

export const FlagContent = styled.View`
    flex: 1;
`

export const VoidContent = styled.View`
    flex: 1;
    margin: 35px;
    border-radius: 20px;
    padding: 10px;
    align-items: center;
    justify-content: space-around;
`

export const Info = styled.Text`
    font-size: 18px;
    color: ${colors.secondary};
    font-weight: bold; 
    text-align: center;
`