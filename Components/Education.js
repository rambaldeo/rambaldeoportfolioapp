import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Image, ScrollView, Animated, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import LifeAnimatedView from "./AnimatedViews/LifeAnimatedView";
import FirstYearAnimatedView from "./AnimatedViews/FirstYearAnimatedView";
import SecondYear from "./AnimatedViews/SecondYear";
import ThirdYear from "./AnimatedViews/ThirdYear";
import FourthYear from "./AnimatedViews/FourthYear";

const educationData = [
    { type: 'LifeOnCampus', source: require('../assets/IMG_0008.jpg'), component: LifeAnimatedView },
    { type: 'FirstYear', source: require('../assets/IMG_0006.jpg'), component: FirstYearAnimatedView },
    { type: 'SecondYear', source: require('../assets/IMG_0009.jpg'), component: SecondYear },
    { type: 'ThirdYear', source: require('../assets/IMG_0010.jpg'), component: ThirdYear },
    { type: 'FourthYear', source: require('../assets/IMG_0011.jpg'), component: FourthYear },
];

const Education = () => {
    const [isAnimatedViewVisible, setIsAnimatedViewVisible] = useState(false);
    const [animatedViewContent, setAnimatedViewContent] = useState(null);
    const fadeAnim = useRef(new Animated.Value(0)).current; // Start with opacity 0

    const handleCardPress = (item) => {
        const { component: Component } = item;
        setAnimatedViewContent({ Component, item });
        setIsAnimatedViewVisible(true);
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
        }).start();
    };

    const closeAnimatedView = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true,
        }).start(() => {
            setIsAnimatedViewVisible(false);
            setAnimatedViewContent(null);
        });
    };

    return (
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Image style={styles.enlargedProfilePicture} resizeMode="contain" source={require('../assets/ontariotechu-og-image.jpg')} />
                    </View>
                </TouchableOpacity>

                <View style={styles.yearContainer}>
                    {educationData.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCardPress(item)}>
                            <View style={styles.card}>
                                <Image style={styles.image} resizeMode="contain" source={item.source} />
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                {isAnimatedViewVisible && animatedViewContent && (
                    <Animated.View style={[styles.animatedView, { opacity: fadeAnim }]}>
                        <animatedViewContent.Component item={animatedViewContent.item} close={closeAnimatedView} />
                    </Animated.View>
                )}
            </ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center', // Center items horizontally
    },
    enlargedProfilePicture: {
        width: '80%',
        height: '90%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        aspectRatio: 9 / 5,
        alignItems: 'center',
        marginTop: 35,
        borderRadius: 5,
    },
    card: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width * 0.8, // Adjust the width dynamically
        height: 120,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 10, // Adjusted margin
        paddingHorizontal: 10,
    },
    yearContainer: {
        width: '100%',
        alignItems: 'center', // Center cards horizontally
    },
    animatedView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Education;

