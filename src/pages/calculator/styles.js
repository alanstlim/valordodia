import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View `
    flex: 1;
    align-items: center;
`;

export const Content = styled.View `
    width: 80%;
    height: 75%;
    margin: 35px;
    border-radius: 20px;
    padding: 10px;
    background-color: ${colors.primary};
    elevation: 8;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
`

export const Menu = styled.FlatList `

`