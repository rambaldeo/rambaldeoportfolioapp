import React from "react";
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SocialIcon } from 'react-native-elements';

const ContactPage = () => {
    return (
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={contactStyles.gradient}>
            <Text style={contactStyles.title}>
                This is my contact page. You can contact me through any of the following social media sources:
            </Text>
            <ScrollView contentContainerStyle={contactStyles.scrollViewContent}>
                <SocialMediaIcons />
            </ScrollView>
        </LinearGradient>
    );
};

const SocialMediaIcons = () => {

    const handleIconPress = (type) => {
        switch (type) {
            case 'google': 
                composeEmail();
                break;
            default:
                openSocialMedia(type);
                break;
        }
    }

    const openSocialMedia =(type) => {
        let url ='';

        switch ( type ) {
            case 'instagram':
                url = 'https://www.instagram.com/_bxldeo?igsh=MWRjdml4Z2ZzbjJpcw%3D%3D&utm_source=qr'
                break;
            case 'linkedin':
                url ='https://www.linkedin.com/in/ram-baldeo-21238119a/';
                break;
            case 'github':
                url = 'https://github.com/rambaldeo'
                break;
        }
        Linking.openURL(url)
    }

    // const composeEmail = () => {
    //     const email = 'your-email@example.com';
    //     const subject = 'Contact via Email';
    //     const body = 'Please write your message here.';

    //     const emailUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    //     Linking.openURL(emailUrl);
    // }

    return (
        <View style={contactStyles.socialIconContainer}>
            <TouchableOpacity onPress={() => handleIconPress('linkedin')}>
                <SocialIcon type='linkedin' />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => handleIconPress('instagram')}>
                <SocialIcon type='instagram' />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => handleIconPress('https://www.instagram.com/_bxldeo?igsh=MWRjdml4Z2ZzbjJpcw%3D%3D&utm_source=qr')}>
                <SocialIcon type='google' />
            </TouchableOpacity> 
            <TouchableOpacity onPress={() => handleIconPress('github')}>
                <SocialIcon type='github' />
            </TouchableOpacity> 
        </View>
    );
};

const contactStyles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
        color: 'white',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    socialIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
});

export default ContactPage;