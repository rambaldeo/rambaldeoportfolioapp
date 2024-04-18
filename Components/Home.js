import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'; // Removed unused imports
import SquareWithImageBackground from './SquareWithImageBackground'; // Fixed import path

const Home = ({ navigation }) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const name = 'Caretaker';

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <SquareWithImageBackground
                    id="AboutMe"
                    title="About Me"
                    imageUrl={require('../assets/splash.png')}
                    color="#E5B9FA"
                    fontSize={45}
                />
                <SquareWithImageBackground
                    id="Education"
                    title="Education"
                    imageUrl={require('../assets/splash.png')}
                    color="#E5B9FA"
                    fontSize={45}
                />
            </View>
            <View style={styles.row}>
                <SquareWithImageBackground
                    id="Projects"
                    title="Projects"
                    imageUrl={require('../assets/splash.png')}
                    color="#E5B9FA"
                    fontSize={45}
                />
                <SquareWithImageBackground
                    id="Experience"
                    title="Work Experience"
                    imageUrl={require('../assets/splash.png')}
                    color="#E5B9FA"
                    fontSize={45}
                />
            </View>
            <View style={styles.row}>
                <SquareWithImageBackground
                    id="Square5"
                    title="Square 5"
                    imageUrl={require('../assets/splash.png')}
                    color="#E5B9FA"
                    fontSize={45}
                />
                <SquareWithImageBackground
                    id="Square6"
                    title="Square 6"
                    imageUrl={require('../assets/splash.png')}
                    color="#E5B9FA"
                    fontSize={45}
                />
            </View>
            {/* StatusBar component should be placed outside the main container */}
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginBottom: 6, 
    },
});

export default Home;
