import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View `
    height: 37%;
    width: 42%;
    margin: 7px;
    padding: 5px;
    background-color: ${colors.darkdefault};
    border-radius: 20px;
    align-items: center;
`;

export const Content = styled.View `
    width: 100%;
    align-items: flex-start;
    padding: 10px;
`;

export const Flag = styled.Image `
    height: 55px
    width: 110px;
    margin: 10px;
`;

export const Title = styled.Text `
    font-size: 18px;
    color: ${colors.white};
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
`

export const Info = styled.Text `
    font-size: 14px;
    color: ${colors.white};
    font-weight: bold; 
    margin-bottom: 15px;
`