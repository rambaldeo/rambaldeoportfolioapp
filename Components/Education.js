import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Animated, Dimensions } from "react-native";
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
    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    const handleCardPress = async (item) => {
        const { component: Component} = item;
        setAnimatedViewContent({ Component, item });
        setIsAnimatedViewVisible(true);
        Animated.timing(slideAnim, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    };

    const closeAnimatedView = () => {
        Animated.timing(slideAnim, {
            toValue: Dimensions.get('window').height,
            duration: 300,
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
                            <YearCardsStructure index={index} item={item} />
                        </TouchableOpacity>
                    ))}
                </View>

                {isAnimatedViewVisible && animatedViewContent && (
                    <Animated.View style={[styles.animatedView, { transform: [{ translateY: slideAnim }] }]}>
                        <animatedViewContent.Component item={animatedViewContent.item} close={closeAnimatedView} />
                    </Animated.View>
                )}
            </ScrollView>
        </LinearGradient>
    );
};

const YearCardsStructure = ({ index, item }) => {
    return (
        <View style={styles.card}>
            <ImageWrapper style={styles.enlargedProfilePicture} source={item.source} />
        </View>
    );
};

const ImageWrapper = ({ style, source }) => {
    return (
        <View style={[style, styles.imageContainer]}>
            <Image style={styles.image} resizeMode="contain" source={source} />
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    enlargedProfilePicture: {
        width: '90%',
        height: '90%',
        borderRadius: 10,
        overflow: 'hidden',
    },
    imageContainer: {
        width: '100%',
        height: '100%',
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
        width: '100%',
        height: 120,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    yearContainer: {
        width: '90%',
        marginLeft: 20,
    },
    animatedView: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Education;
