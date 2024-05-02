import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

const Profile = () => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    
    const toggleImageSize = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

    return (
        <View style={profileStyles.container}>
            <View style={profileStyles.row}>
                <TouchableOpacity onPress={toggleImageSize} style={profileStyles.imageContainer}>
                    <Image style={[profileStyles.profilePicture, isImageEnlarged && profileStyles.enlargedProfilePicture]} source={require('../assets/Ram_Baldeo.jpg')} />
                </TouchableOpacity>
                <View style={profileStyles.textContainer}>
                    {/* Time to add in a section to display my name, dob or age, and a little summary about myself */}
                    <Text style={profileStyles.title}>Ram Baldeo</Text>
                    <Text style={profileStyles.bio}>Software engineering graduate from ontario tech universtiy with ioT specalization </Text>
                </View>
            </View>
        </View>
    );
};

export default Profile;

const profileStyles = StyleSheet.create({
    container: {
        width: "100%",
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
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
    bio: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        textTransform: 'capitalize',
        marginLeft: 10,
    },
});
