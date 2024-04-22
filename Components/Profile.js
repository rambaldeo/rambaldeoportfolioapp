import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import ImageResizer from 'react-native-image-resizer';

const Profile = () => {
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    
    const toggleImageSize = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={toggleImageSize} style={styles.imageContainer}>
                    <Image style={[styles.profilePicture, isImageEnlarged && styles.enlargedProfilePicture]} source={require('../assets/Ram_Baldeo.jpg')} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                    {/* Time to add in a section to display my name, dob or age, and a little summary about myself */}
                    <Text style={styles.title}>Ram Baldeo</Text>
                    <Text style={styles.bio}>Software engineering graduate from ontario tech universtiy with ioT specalization </Text>
                </View>
            </View>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
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
        fontSize: 34,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
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
