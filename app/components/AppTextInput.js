import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';

function AppTextInput({ icon, width = '100%', ...otherProps }) {
    return (
        <View style={[styles.container, { width }]}>
            {icon &&
                <MaterialCommunityIcons 
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />
            }
            <TextInput
                placeholderTextColor={colors.medium}
                style={styles.textInput}
                {...otherProps}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        paddingHorizontal: 15,
        marginVertical: 10,
        overflow: 'hidden'
    },
    icon: {
        marginRight: 10,
        alignSelf: 'center'
    },
    textInput: {
        width: '100%',
        fontSize: 18,
        color: colors.dark,
        paddingVertical: 10
    }
})

export default AppTextInput;