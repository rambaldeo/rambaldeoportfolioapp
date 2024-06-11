import React, { useState, useRef } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Animated, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const educationData = [
    { type: 'image', source: require('../assets/IMG_0008.jpg') },
    { type: 'image', source: require('../assets/IMG_0006.jpg') },
    { type: 'image', source: require('../assets/IMG_0009.jpg') },
    { type: 'image', source: require('../assets/IMG_0010.jpg') },
    { type: 'image', source: require('../assets/IMG_0011.jpg') },
];

const Education = () => {
    const [isAnimatedViewVisible, setIsAnimatedViewVisible] = useState(false);
    const [animatedViewContent, setAnimatedViewContent] = useState('');
    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height)).current;

    const handleCardPress = (message) => {
        setAnimatedViewContent(message);
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
                        <TouchableOpacity key={index} onPress={() => handleCardPress(item.title || 'Image')}>
                            <YearCardsStructure index={index} item={item} />
                        </TouchableOpacity>
                    ))}
                </View>
                
                {isAnimatedViewVisible && (
                    <Animated.View style={[styles.animatedView, { transform: [{ translateY: slideAnim }] }]}>
                        <View style={styles.animatedViewContainer}>
                            <ScrollView contentContainerStyle={styles.animatedViewScrollContent}>
                                <Image source={require('../assets/IMG_0008.jpg')} style={styles.scrollImage} />

                                <Text style={styles.additionalText}>
                                    Here you can add more details about the selected item. This content can be long and it will be scrollable inside this view.
                                </Text>

                                <Image source={require('../assets/IMG_0008.jpg')} style={styles.scrollImage} />
                                <Image source={require('../assets/IMG_0008.jpg')} style={styles.scrollImage} />
                                
                                <TouchableOpacity onPress={closeAnimatedView} style={styles.closeButton}>
                                    <Text style={styles.closeButtonText}>Close</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View>
                    </Animated.View>
                )}
            </ScrollView>
        </LinearGradient>
    );
};

const YearCardsStructure = ({ index, item }) => {
    return (
        <View style={[styles.card]}>
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
        elevation: 3, // For Android
        shadowColor: '#000', // For iOS
        shadowOpacity: 0.2, // For iOS
        shadowOffset: { width: 0, height: 2 }, // For iOS
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
    animatedViewContainer: {
        width: '90%',
        height: '60%', // Set the height to 80% of the screen
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    animatedViewScrollContent: {
        paddingBottom: 20, // Ensures the content is scrollable
    },
    scrollImage: {
        width: '100%',
        height: 200,
        marginBottom: 15,
    },
    additionalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
    closeButton: {
        marginTop: 15,
        backgroundColor: 'darkorange',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        width: '50%',
        
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Education;
