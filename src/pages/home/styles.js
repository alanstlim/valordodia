import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    height: 100%;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
`;

export const Content = styled.View`
    height: 100%;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const Logo = styled.Image`
    width: 230px;
    height: 220px;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    font-size: 42px;
    font-weight: bold;
`;