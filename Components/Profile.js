import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.imageContainer}>
                    <Image style={styles.profilePicture} source={require('../assets/favicon.png')} />
                </View>
                <View style={styles.textContainer}>
                    {/* Time to add in a section to display my name, dob or age, and a little summary about myself */}
                    <Text style={styles.title}>Ram Baldeo</Text>
                    <Text style={{ textAlign: 'center' }}>Software Engineering Graduate from Ontario Tech University</Text>
                    <Text style={{ textAlign: 'center' }}>This is my personal app for you to get to know me</Text>
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
        padding: 10,
        transform: [{ scale: 2 }],
    },
    textContainer: {
        flex: 1, 
        maxWidth: '80%',
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        fontStyle: 'italic',
    },
});
