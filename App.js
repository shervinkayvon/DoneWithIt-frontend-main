
import { 
  StyleSheet, 
  Text, 
  TouchableWithoutFeedback, 
  SafeAreaView, 
  Image,
  TouchableOpacity,
  TouchableHighlight,
  Button,
  Alert,
  Platform,
  View,
  Dimensions,
  TextInput,
  Switch
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { useEffect, useState } from 'react';

import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import ListingsDetailsScreen from './app/screens/ListingsDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from './app/components/ImageInput'; 
import ImageInputList from './app/components/ImageInputList';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from './app/navigation/AuthNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  // const showNotification = () => {
  //   Notifications.presentNotificationAsync({
  //     title: 'Poo',
  //     body: 'more poo',
  //     data: {
  //       _displayInForeground: true
  //     }
  //   });
  // }

  if (!isReady)
    return <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} onError={(error) => console.log(error)} />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  textField: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  }
});
