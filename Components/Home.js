import React from 'react';
import { View, StyleSheet, StatusBar, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SquareWithImageBackground from './SquareWithImageBackground';

const Home = () => {
    return (
        <LinearGradient colors={['#4ADEDE', '#2A4EDD']} style={styles.gradient}>
            <StatusBar style="auto" />
            <ScrollView style={styles.optiosn}>
                <View style={styles.container}>
                    <View style={styles.row}>
                        <SquareWithImageBackground 
                            id="About me"
                            title="About"
                        />
                        <SquareWithImageBackground 
                            id="Experience"
                            title="Experience"
                        />
                    </View>

                    <View style={styles.row}>
                        <SquareWithImageBackground 
                            id="Education"
                            title="Education"
                        />
                        <SquareWithImageBackground 
                            id="Projects"
                            title="Projects"
                        />
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        zIndex: -1,
    },
    options: {
        width: '80%',
        
    },
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default Home;

