import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BioInformation } from './Courses/Bio';
import Accordion from 'react-native-collapsible/Accordion'; 


const Profile = () => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const toggleImageSize = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

    //Need to add the methods to render the information

    return (
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={profileStyles.gradient}>
            <View style={profileStyles.container}>
                <View style={profileStyles.row}>
                    <TouchableOpacity onPress={toggleImageSize} style={profileStyles.imageContainer}>
                        <Image style={[profileStyles.profilePicture, isImageEnlarged && profileStyles.enlargedProfilePicture]} source={require('../assets/Ram_Baldeo.jpg')} />
                    </TouchableOpacity>
                    <View style={profileStyles.textContainer}>
                        <Text style={profileStyles.title}>Ram Baldeo</Text>
                        <Text style={profileStyles.bioTitle}>Software engineering graduate from Ontario Tech University with IoT specialization</Text>
                    </View>
                </View>
            </View>
            <ScrollView contentContainerStyle={profileStyles.scrollViewContent}>
                <View style={profileStyles.bioContainer}>
                    <Text style={profileStyles.bioContent}>
                        Things to talk about: Occupation, my goal/objective, Personal background, accomplishments
                    </Text>
                
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Profile;

const profileStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
    gradient: {
        flex: 1,
        zIndex: -1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '90%', 
    },
    imageContainer: {
        marginRight: 40, 
        marginLeft: 10,
    },
    profilePicture: {
        transform: [{ scale: 1 }], 
        width: 70,
        height: 100,
    },
    enlargedProfilePicture: {
        marginLeft: 20,
        transform: [{ scale: 2 }], 
    },
    textContainer: {
        flex: 1, 
        maxWidth: '80%',
    },
    title: {
        textAlign: 'right',
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
        marginBottom: 15,
    },
    bioTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textTransform: 'capitalize',
        marginLeft: 10,
    },
    scrollViewContent: {
        flexGrow: 1,
        alignItems: 'center', 
        paddingVertical: 20, 
    },
    bioContainer: {
        width: '80%%', 
        alignItems: 'center',
    },
    bioContent: {
        textAlign: 'center',
        color: 'black',
    },
    bioCard: {
        backgroundColor: '#AEBAF8',
        width: Dimensions.get('window').width * 0.9, // Adjusted width to fit accordion
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 20, // Adjusted margin
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
});

