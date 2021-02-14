import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View `
    height: 100px;
    width: 100%;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: space-between;
    elevation: 8;
    shadow-opacity: 0.8;
    shadow-radius: 5px;
    flex-direction: row;
    padding: 30px;
`;

export const Logo = styled.Image `
    width: 72px;
    height: 70px;
`;

export const Title = styled.Text `
    font-size: 24px;
    font-weight: bold;
    margin-top: 10px;
`;