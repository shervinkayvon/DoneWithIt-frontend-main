import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingsDetailsScreen({ route }) {
    const listing = route.params;

    return (
        <View>
            <Image 
                style={styles.image} 
                source={{
                    uri: listing.images[0].url
                }}
            />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{listing.title}</Text>
                <Text style={styles.subtitle}>{'$' + listing.price}</Text>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/me.jpeg')}
                        title="Shervin Kayvon"
                        subtitle="5 listings "
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        marginBottom: 7,
        fontSize: 20,
        fontWeight: 'bold'
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingsDetailsScreen;