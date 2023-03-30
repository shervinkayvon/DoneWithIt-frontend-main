import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import routes from '../navigation/routes';
import listingsApi from '../api/listings';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
    const { data: listings, error, loading, request: getRequest} = useApi();

    useEffect(() => {
        getRequest(listingsApi.getListings);
    }, []);

    return (
        <>
            <ActivityIndicator visible={loading} />
            <Screen style={styles.screen}>
                {error && (
                    <>
                        <Text>Couldn't retrieve the listings.</Text>
                        <AppButton title="Retry" onPress={loadListings} />
                    </>
                )}
                <FlatList
                    data={listings}
                    keyExtractor={listing => listing.id.toString()}
                    renderItem={({ item }) => 
                        <Card
                            title={item.title}
                            subtitle={'$'+ item.price}
                            imageUrl={item.images[0].url}
                            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                            thumbnailUrl={item.images[0].thumbnailUrl}
                        />
                    }
                />
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;