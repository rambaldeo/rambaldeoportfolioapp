import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Image, ScrollView, Text, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Experience = () => {

    const screenWidth = Dimensions.get('window').width;

    return (
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={ExperienceStyles.gradient}>
            <ScrollView contentContainerStyle={ExperienceStyles.scrollViewContent}>
                <View style={ExperienceStyles.container}>
                    <Text>Hello there</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default Experience;

const ExperienceStyles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        width: '50%',
        alignSelf: 'center', // Centers the view horizontally
        backgroundColor: 'white', // For visibility
    }
});
