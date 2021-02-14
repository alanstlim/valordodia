import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux';

import colors from '../../config/colors';

import { Container, TabItem, TabItemCenter } from './styles';


export default ({ navigation }) => {

    return (
        <Container>
            <TabItem onPress={() => Actions.calculator()}>
                <Icon name="calculator-outline" size={30} color={ navigation.state.index === 1 ? colors.white : colors.primary} />
            </TabItem>
            <TouchableHighlight onPress={() => Actions.home()}>
                <TabItemCenter color={navigation.state.index === 0 ? colors.white : colors.dark}>
                    <Icon name="cash-outline" size={32} color={navigation.state.index === 0 ? colors.dark : colors.primary} />
                </TabItemCenter>
            </TouchableHighlight>
            <TabItem  onPress={() => Actions.profile()}>
                <Icon name="settings-outline" size={30} color={ navigation.state.index === 2 ? colors.white : colors.primary} />
            </TabItem>
            
        </Container>
    );
}