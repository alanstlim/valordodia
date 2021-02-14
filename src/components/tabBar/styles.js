import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    elevation: 8;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
    height: 60px;
    background-color: ${colors.dark};
    justify-content: center;
    flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;
    padding: 30px;
`;

export const TabItemCenter = styled.View`
    width: 70px
    height: 70px;
    border-radius: 35px;
    background-color: ${props => props.color};
    justify-content: center;
    align-items: center;
    border: solid 3px ${colors.dark};
    margin-top: -25px;
`