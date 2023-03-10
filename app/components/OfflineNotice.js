import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';
import { useNetInfo } from "@react-native-community/netinfo";

import colors from '../config/colors';

function OfflineNotice(props) {
    const netInfo = useNetInfo();

    if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) 
        return (
            <View style={styles.container}>
                <Text style={styles.text}>No Internet Connection</Text>
            </View>
        );

        return null;
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: 50,
        position: 'absolute',
        top: Constants.statusBarHeight,
        width: '100%',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: colors.white
    }
})

export default OfflineNotice;