import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import colors from '../../config/colors';


export default function Loading() {

    return (
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={40} color={colors.secondary} />
        </View>
    );
}