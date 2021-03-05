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
    padding: 15px;
    opacity: 1;
`;

export const BodyModal = styled.View`
    align-items: center;
    justify-content: space-between;
`;

export const ImageContent = styled.View`
    height: 250px;
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
    margin-top: ${(props) => props.marginTop ? '20px' : '2px'};
    margin-bottom: 7px;
    color: ${colors.secondary}
`;

export const Info = styled.Text`
    font-size: 15px;
    margin-top:  ${(props) => props.marginTop ? '25px' : '5px'};
    text-align: center;
`;

export const SubInfo = styled.Text`
    font-size: 12px;
    margin-top: 30px;
    text-align: center;
`;

export const ImgNetwork = styled.Image`
    width: 50px;
    height: 50px;
    margin: 20px;
`;