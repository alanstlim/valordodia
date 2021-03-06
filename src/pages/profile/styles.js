import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Content = styled.View`
    width: 80%;
    height: 72%;
    margin: 10px;
    border-radius: 20px;
    background-color: ${colors.primary};
    elevation: 8;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
    align-items: center;
    justify-content: center;
`

export const BottomContent = styled.View`
    width: 100%;
    height: 60px;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background-color: ${colors.dark};
`

export const BottomText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
`

export const MenuContent = styled.View`
    width: 100%;
    height: 50px;
    margin: 5px;
    border-bottom-width: 2px;
    align-items: center;
    justify-content: center;
`
export const ItemMenu = styled.View`
    width: 70%;
    height: 40px;
    margin: 5px;
    align-items: center;
    flex-direction: row;
`
export const Touchable = styled.TouchableOpacity`
    align-items: center;
    flex-direction: row;
`

export const MenuText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.dark};
    text-align: right;
    margin: 8px;
`

export const HeaderText = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: ${colors.dark};
    text-align: right;
    margin-top: 15px;
`

export const List = styled.FlatList`
    width: 90%;
    margin: 10px;
`