import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View `
    flex: 1;
    background-color: linear-gradient(90deg, ${colors.gradientStart} 0%, ${colors.gradientEnd} 100%);
    align-items: center;
`;

export const Content = styled.View `
    width: 80%;
    height: 75%;
    margin: 35px;
    border-radius: 20px;
    padding: 10px;
    background-color: ${colors.darkdefault};

`