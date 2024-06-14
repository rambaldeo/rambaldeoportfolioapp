import React from 'react';
import { Text, Image, StyleSheet } from 'react-native';
import { AnimatedLayout,  CloseButton } from './Components';
const SecondYear = ({ item, close }) => {
    return (
        <AnimatedLayout>
                <Image source={item.source} style={styles.scrollImage} />
                <Text style={styles.additionalText}>Details for Second Year</Text>
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
});

export default SecondYear;
