import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import MenuDropDown from './MenuDropDown';
const Image_Background = '../assets/Gradient_Background.jpg'

const Home = () => {
    <StatusBar style="auto" />

    return (
        <View style={styles.container}>
            <MenuDropDown />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
});

export default Home;
