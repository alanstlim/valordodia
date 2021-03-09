import styled from 'styled-components/native';
import colors from '../../config/colors';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(13,13,13,0.4);  
`;

export const Content = styled.View`
    height: 60%;
    width: 75%;
    border-radius: 20px;
    background-color: ${colors.white};
    align-items: center;
    opacity: 1;
`;

export const BodyModal = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

`;

export const Scroll = styled.ScrollView`
    flex: 1;
`;

export const ImageContent = styled.View`
    height: 200px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const Header = styled.View`
    width: 100%;
    align-items: flex-end;
    padding: 5px;
`;

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    margin-vertical: ${(props) => props.marginTop ? '10px' : '2px'};
    margin-bottom: 7px;
    text-align: center;
    color: ${colors.secondary}
`;

export const Info = styled.Text`
    font-size: 15px;
    margin-vertical:  ${(props) => props.marginTop ? '15px' : '5px'};
    text-align: center;
`;

export const SubInfo = styled.Text`
    font-size: 12px;
    margin-vertical: 35px;
    text-align: center;
`;

export const ImgNetwork = styled.Image`
    width: 50px;
    height: 50px;
    margin: 15px;
`;