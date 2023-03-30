import React, { useState } from 'react';
import { Image, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from "../components/forms";
import usersApi from '../api/users';
import authApi from '../api/auth';
import auth from '../api/auth';
import ActivityIndicator from '../components/ActivityIndicator';
import useApi from '../hooks/useApi';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function RegisterScreen(props) {
    const registerApi = useApi();
    const loginApi = useApi();
    const [error, setError] = useState('');
    const { logIn } = useAuth();

    const handleSubmit = async userInfo => {
        setError('');
        const result = await registerApi.request(usersApi.register, userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError('An unexpected error occurred.');
                console.log(result);
            }
            return;
        }

        try {
            const { data: authToken } = await loginApi.request(authApi.login,
                userInfo.email, 
                userInfo.password
            );
            logIn(authToken);            
        } catch (error) {
            console.log('test');
        }
    }
    
    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            <Screen style={styles.container}>
                <AppForm
                    initialValues={{ name: '', email: '', password: ''}}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >   
                    <ErrorMessage error={error} visible={!!error}/>
                    <AppFormField 
                        autoCorrect={false}
                        name="name"
                        icon="account" 
                        placeholder="Name"
                    />
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        name="email"
                        icon="email" 
                        placeholder="Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                    />
                    <AppFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock" 
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />
                </AppForm>
            </Screen>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        height: 80,
        width: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})

export default RegisterScreen;