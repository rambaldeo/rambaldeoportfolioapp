import React from "react"; 
import { StyleSheet, TouchableOpacity, View, Text, Image, ScrollView, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

const Education = () => {
    const handleCardPress = (message) => {
        Alert.alert(
            message,
            `You clicked the card for ${message}`,
            [{ text: 'Click to Close'}]
        );
    }

    return(
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={styles.gradient}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <TouchableOpacity>
                    <View style={styles.container}>
                        <Image style={styles.enlargedProfilePicture} resizeMode="contain" source={require('../assets/ontariotechu-og-image.jpg')}/>
                    </View>
                </TouchableOpacity>
                <Text>
                    This page will showcase what I have done during my program at Ontario Tech University starting from first year to graduation
                </Text>
                <View style={styles.yearContainer}>
                    {educationData.map((item, index) => (
                        <TouchableOpacity key={index} onPress={() => handleCardPress(item.title)}>
                            <YearCardsStructure title={item.title} description={item.description} index={index}/>
                        </TouchableOpacity>
                    ))}
                </View>     
            </ScrollView>
        </LinearGradient>
    );
};

const YearCardsStructure = ({ title, description, index }) => {
    return(
        <View style={[styles.card, index % 2 === 0 ? styles.cardEven : styles.cardOdd]}>
            <View style={[styles.contentSide, index % 2 === 0 ? styles.contentSideEven : styles.contentSideOdd]}>
                <Text>{description}</Text>
            </View>
            <View style={[styles.picSide, index % 2 === 0 ? styles.picSideEven : styles.picSideOdd]}>
                
                <Text>This is for {title}</Text>
            </View>
        </View>
    );
}

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
    },
    container: {
        width: '100%',
        overflow: 'hidden',
        aspectRatio: 9/5, 
        alignItems: 'center',
        marginTop: 35,
    },
    card: {
        flexDirection: 'row',
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
    cardEven: {
        flexDirection: 'row-reverse', // Render contentSide and picSide in reverse order
    },
    cardOdd: {
        flexDirection: 'row', // Render contentSide and picSide in original order
    },
    picSide: {
        borderRadius: 10,
        flex: 1,
        backgroundColor: '#4ADEDE',
        margin: 5
    },
    picSideEven: {
        backgroundColor: 'darkorange',
    },
    picSideOdd: {
        backgroundColor: '#4ADEDE',
    },
    contentSide: {
        borderRadius: 10,
        flex: 2,
        backgroundColor: 'darkorange',
        margin: 5
    },
    contentSideEven: {
        backgroundColor: '#4ADEDE',
    },
    contentSideOdd: {
        backgroundColor: 'darkorange',
    },
    yearContainer: {
        width: '90%',
        marginLeft: 20,
    },
});


const educationData = [
    { title: "Time on campus", description: "This will be about my time on campus" },
    { title: "First Year", description: "This section will be for classes and so on" },
    { title: "Second Year", description: "This section will be for classes and so on" },
    { title: "Third Year", description: "This section will be for classes and so on" },
    { title: "Fourth Year", description: "This section will be for classes and so on" },
];

export default Education;
