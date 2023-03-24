import React, { useState } from 'react';
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from '../components/Screen';
import { ErrorMessage, AppForm, AppFormField, SubmitButton } from "../components/forms";
import authApi from '../api/auth';
import useAuth from '../auth/useAuth';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

function LoginScreen(props) {
    const { logIn } = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);

    const handleSubmit = async ({ email, password }) => {
      const result = await authApi.login(email, password);
      if (!result.ok) return setLoginFailed(true);
      setLoginFailed(false);
      logIn(result.data);
    }

    return (
        <Screen style={styles.container}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed} />
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
                <SubmitButton title="Submit" />
            </AppForm>
        </Screen>
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

export default LoginScreen;