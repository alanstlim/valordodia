import styled from 'styled-components/native';
import colors from '../../config/colors';


export const Container = styled.View `
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Content = styled.View `
    width: 130px;
    align-items: center;
`;

export const Title = styled.Text `
    font-size: 14px;
    font-weight: bold;
    color: ${colors.secondary};
    margin: 2px;
`;

export const Flag = styled.Image `
    height: 35px;
    width: 70px;
    margin: 5px;
`;

export const Input = styled.TextInput `
    width: 90px;
    height: 40px;
    background-color: #fff;
    margin: 5px;
    border-radius: 15px;
    text-align: center;
`
