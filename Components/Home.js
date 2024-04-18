import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native'; // Removed unused imports
import SquareWithImageBackground from './SquareWithImageBackground'; // Fixed import path

const Home = ({ navigation }) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const name = 'Caretaker';

    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <View style={styles.row}>
                    {/* Render your custom component here */}
                    <SquareWithImageBackground
                        id="Temperature Log"
                        title="27°"
                        imageUrl={require('../assets/splash.png')}
                        color="#E5B9FA"
                        fontSize={45}
                    />
                </View>
            </View>
            {/* StatusBar component should be placed outside the main container */}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    content: {
        flex: 1, // Added flex: 1 to make the content fill the container
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Removed unused styles
});

export default Home;
