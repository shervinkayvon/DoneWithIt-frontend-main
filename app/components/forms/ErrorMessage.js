import React from 'react';
import { Text, StyleSheet } from 'react-native';

function ErrorMessage({ error, visible }) {
    if (!error || !visible) return null;

    return (
        <Text style={styles.error}>{error}</Text>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red'
    }
})

export default ErrorMessage;