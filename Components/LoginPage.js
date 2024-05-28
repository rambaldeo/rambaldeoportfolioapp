import React, { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";
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
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={LoginStyle.gradient}>
            <View style={LoginStyle.container}>
                
                {/* Need to add a App logo at the top here
                Thinking about putting the text input into another container with a different width */}
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
});
