import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import ListingsScreen from '../screens/ListingsScreen';
import ListingsDetailsScreen from '../screens/ListingsDetailsScreen';

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Listings" component={ListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingsDetailsScreen} />
    </Stack.Navigator>
);

export default FeedNavigator;