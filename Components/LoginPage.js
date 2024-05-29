import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const LoginPage = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        navigation.navigate('Home')
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={LoginStyle.gradient}>
            <View style={LoginStyle.container}>
            <Image style={LoginStyle.appLogo} source={require('../assets/Ram_Baldeo.jpg')} />
                {/* Replace with actual App Logo */}
                <TextInput
                    style={LoginStyle.input}
                    label="Email"
                    placeholder="Email"
                    placeholderTextColor="grey"
                    onChangeText={setEmail}
                    value={email}
                />
                <TextInput
                    style={LoginStyle.input}
                    label="Password"
                    placeholder="Password"
                    placeholderTextColor="grey"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                />

                <View style={LoginStyle.buttonContainer}>
                    <View style={LoginStyle.button}>
                        <Button
                            onPress={handleLogin}
                            title="Login"
                            color="black"
                        />
                    </View>
                    <View style={LoginStyle.button}>
                        <Button
                           // onPress={handleLogin}
                            title="Signup"
                            color="black"
                        />
                    </View>
                </View>
            </View>
        </LinearGradient>
        </TouchableWithoutFeedback>
    );
};

export default LoginPage;

const LoginStyle = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        alignItems: 'center',
        height: '90%'
    },
    input: {
        height: 45,
        width: '100%',
        borderColor: 'black',
        borderWidth: 2,
        marginBottom: 16,
        color: 'black',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%',
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
    },
    appLogo: {
        transform: [{ scale: 1 }], 
        width: '70%',
        height: '30%',
        marginBottom: 100
    }
});
