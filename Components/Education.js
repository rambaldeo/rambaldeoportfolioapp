import React, {useState, useRef} from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Alert, Animated, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const educationData = [
    { type: 'image', source: require('../assets/IMG_0008.jpg') },
    { type: 'image', source: require('../assets/IMG_0006.jpg') },
    { type: 'image', source: require('../assets/IMG_0009.jpg') },
    { type: 'image', source: require('../assets/IMG_0010.jpg') },
    { type: 'image', source: require('../assets/IMG_0011.jpg') },
];
    {/* { type: 'text', title: "First Year", description: "This section will be for classes and so on" }, */}

const Education = () => {
    const [isAnimatedViewVisible, setIsAnimatedViewVisible] = useState(false)
    const [animatedViewContent, setANimatedViewContent] = useState('')
    const slideAnim = useRef(new Animated.Value(Dimensions.get('window').height))

    const handleCardPress = (message) => {
        Alert.alert(
            message,
            `You clicked the card for ${message}`,
            [{ text: 'Click to Close' }]
        );
    };

    const closeAnimatedView = () => {
        
    }
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
                        <TouchableOpacity key={index} onPress={() => handleCardPress(item.title)}>
                            <YearCardsStructure index={index} item={item} />
                        </TouchableOpacity>
                    ))}
                </View>



            </ScrollView>
        </LinearGradient>
    );
};

const YearCardsStructure = ({ index, item }) => {
    return (
        <View style={[styles.card]}>
            <Image style={styles.enlargedProfilePicture} resizeMode="contain" source={item.source} />
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
        borderRadius: 25,
        overflow: 'hidden'
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        aspectRatio: 9 / 5,
        alignItems: 'center',
        marginTop: 35,
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
    contentSide: {
        borderRadius: 10,
        flex: 2,
        backgroundColor: 'darkorange',
        margin: 5,
        
    },
    yearContainer: {
        width: '90%',
        marginLeft: 20,
    },
});

export default Education;

