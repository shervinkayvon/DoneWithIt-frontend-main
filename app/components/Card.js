import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import colors from '../config/colors';

function Card({ title, subtitle, imageUrl, onPress, thumbnailUrl }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image 
                    style={styles.image} 
                    source={{
                        uri: imageUrl,
                    }}
                />
                <View style={styles.detailsContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                </View>
        </View>
       </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 200
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    },
    title: {
        marginBottom: 7
    }
})

export default Card;