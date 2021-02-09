import styled from 'styled-components/native';
import colors from '../../config/colors';


export const Container = styled.View `

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.View `
    align-items: center;
`;

export const Title = styled.Text `
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin: 5px;
`;

export const Flag = styled.Image `
    height: 40px;
    width: 80px;
    margin: 5px;
`;

export const Input = styled.TextInput `
    width: 100px;
    height: 40px;
    background-color: #fff;
    margin: 5px;
    border-radius: 15px;
    margin: 5px;
    text-align: center;
`
