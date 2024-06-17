import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { CloseButton, AnimatedLayout } from './Components';

const LifeAnimatedView = ({ item, close }) => {
    return (
        <AnimatedLayout>
            <Image source={item.source} style={styles.scrollImage} />
                    <Text style={styles.additionalText}>Details for LifeAnimatedView</Text>
                    <Image source={item.source} style={styles.scrollImage} />
                    <Image source={item.source} style={styles.scrollImage} />
                    <Image source={item.source} style={styles.scrollImage} />
                    <Image source={item.source} style={styles.scrollImage} />
                    <CloseButton onPress={close} />
        </AnimatedLayout>
    );
};

const styles = StyleSheet.create({
    scrollImage: {
        width: 'auto',
        height: 120,
        marginBottom: 15,
    },
    additionalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
    innerContainer: {
        backgroundColor: 'white',
        maxWidth: "90%"
    }
});

export default LifeAnimatedView;
