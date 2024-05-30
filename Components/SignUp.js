import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableWithoutFeedback, Keyboard, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlesubmit = async () => {
        navigation.navigate('Home')
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <LinearGradient colors={['#4ADEDE', '#2A4EDD', '#4ADEDE']} style={signUpStyles.gradient}>
                <View style={signUpStyles.container}>
                    <Text style={signUpStyles.header}>Please Complete To Sign Up</Text>
                    <TextInput
                        style={signUpStyles.input}
                        placeholder="First Name"
                        placeholderTextColor="#888"
                        onChangeText={setFirstName}
                        value={firstName}
                    />
                    <TextInput
                        style={signUpStyles.input}
                        placeholder="Last Name"
                        placeholderTextColor="#888"
                        onChangeText={setLastName}
                        value={lastName}
                    />
                    <TextInput
                        style={signUpStyles.input}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <TextInput
                        style={signUpStyles.input}
                        placeholder="Password"
                        placeholderTextColor="#888"
                        secureTextEntry
                        onChangeText={setPassword}
                        value={password}
                    />
                    <TextInput
                        style={signUpStyles.input}
                        placeholder="Confirm Password"
                        placeholderTextColor="#888"
                        secureTextEntry
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />
                    <TouchableOpacity style={signUpStyles.button} onPress={handlesubmit}>
                        <Text style={signUpStyles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </TouchableWithoutFeedback>
    );
}

export default Signup;

const signUpStyles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: 'center',
    },
    container: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginTop: '15%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2A4EDD',
    },
    input: {
        height: 45,
        width: '100%',
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    button: {
        backgroundColor: '#2A4EDD',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
