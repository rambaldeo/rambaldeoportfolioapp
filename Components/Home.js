import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ImageBackground} from 'react-native';
import MenuDropDown from './MenuDropDown';

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
        backgroundColor: "rgba(128, 0, 128, 0.5)",
    },

});

export default Home;
