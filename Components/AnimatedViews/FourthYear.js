import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { AnimatedLayout, CloseButton } from './Components';
const FourthYear = ({ item, close }) => {
    return (
        <AnimatedLayout>
            <Image source={item.source} style={styles.scrollImage} />
                <Text style={styles.additionalText}>Details for FourthYear</Text>
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
        width: '100%',
        height: 200,
        marginBottom: 15,
    },
    additionalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 16,
    },
});

export default FourthYear;
