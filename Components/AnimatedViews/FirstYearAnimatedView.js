import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const FirstYearAnimatedView = ({ item, close }) => {
    return (
        <View style={styles.animatedViewContainer}>
            <ScrollView contentContainerStyle={styles.animatedViewScrollContent}>
                <Image source={item.source} style={styles.scrollImage} />
                <Text style={styles.additionalText}>Details for FirstYearAnimatedView</Text>
                <TouchableOpacity onPress={close} style={styles.closeButton}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    animatedViewContainer: {
        width: '90%',
        height: '60%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
    },
    animatedViewScrollContent: {
        paddingBottom: 20,
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

export default FirstYearAnimatedView;
