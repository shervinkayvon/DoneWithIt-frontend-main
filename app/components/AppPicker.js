import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors';
import Screen from './Screen';
import PickerItem from './PickerItem';

function AppPicker({ icon, placeholder, PickerItemComponent = PickerItem, numberOfColumns = 1, onSelectItem, selectedItems, items, width = '100%' }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container, { width }]}>
                    {icon &&
                        <MaterialCommunityIcons 
                            name={icon}
                            size={20}
                            color={colors.medium}
                            style={styles.icon}
                        />
                    }
                    {selectedItems ? 
                        <Text style={styles.text}>{selectedItems.label}</Text> 
                        : 
                        <Text style={styles.placeholder}>{placeholder}</Text>

                    }
                    <MaterialCommunityIcons 
                            name="chevron-down"
                            size={20}
                            color={colors.medium}
                        />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        numColumns={numberOfColumns}
                        keyExtractor={item => item.value.toString()}
                        renderItem={({ item }) => 
                        <PickerItemComponent 
                            item={item}
                            label={item.label} 
                            onPress={() => {
                                setModalVisible(false);
                                onSelectItem(item);
                            }}
                        />}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput: {
        fontSize: 18,
        color: colors.dark
    },
    placeholder: {
        color: colors.medium
    },
    text: {
        flex: 1,
        color: colors.dark,
        fontSize: 18
    }
})

export default AppPicker;