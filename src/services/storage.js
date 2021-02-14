import AsyncStorage from '@react-native-async-storage/async-storage';

export const setLocalUser = async (obj) => {
    try {
        await AsyncStorage.setItem('localUser', JSON.stringify(obj))
    } catch (e) {
        console.log(e);
    }
}

export const getLocalUser = async () => {
    try {
        const localUser = await AsyncStorage.getItem('localUser');

        return JSON.parse(localUser);
    } catch (e) {
        console.log(e);
    }
}