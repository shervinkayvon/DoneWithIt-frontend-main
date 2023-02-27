import React from 'react';
import { View, StyleSheet, Image, Text, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from '../config/colors';

function ListItem({ title, subtitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight 
                onPress={onPress}
                underlayColor={colors.light}
            >
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image}/>}
                    <View style={styles.detailsContainer}>
                        <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        {subtitle && <Text numberOfLines={2} style={styles.subtitle}>{subtitle}</Text>}
                    </View>
                    <MaterialCommunityIcons color={colors.medium} name="chevron-right" size={25} />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subtitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500'
    }
})

export default ListItem;