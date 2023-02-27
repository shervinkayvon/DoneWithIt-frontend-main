import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function PickerItem({ onPress, item }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{item.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20
    }
})

export default PickerItem;