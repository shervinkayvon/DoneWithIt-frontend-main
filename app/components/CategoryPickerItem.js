import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from './Icon';

function CategoryPickerItem({ item, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View>
                <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
                <Text style={styles.label}>{item.label}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        flex: 1
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})

export default CategoryPickerItem;