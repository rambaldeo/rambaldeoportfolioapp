import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Complete Animated View
export const AnimatedLayout = ({ children }) => {
    return (
        <LinearGradient colors={['#AEBAF8', '#AEBAF8', '#AEBAF8']} style={styles.gradient}>
            <ScrollView>
                {children}
            </ScrollView>
        </LinearGradient>
    )
}

// CloseButton Component
export const CloseButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
        </TouchableOpacity>
    );
};

// Styles
const styles = StyleSheet.create({
    gradient: {
        width: '80%',
        maxHeight: '65%',
        minHeight: '65%',
        alignSelf: 'center',
        padding: 10,
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: 'darkorange',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        width: '50%',
        alignSelf: 'center',
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;
