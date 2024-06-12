import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import Modal from 'react-native-modal';
import { useNavigation } from '@react-navigation/native';
const SettingButton = ({ color = 'black' }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const clickOutSide = () => {
        setModalVisible(false);
    };
    const logout = async () => {
        setModalVisible(false)
        setTimeout( () => {
            navigation.navigate('Login')
        }, 150)
    }

    return (
        <View>
            <TouchableOpacity style={styles.button} onPress={toggleModal} accessible={true} accessibilityLabel="Open Settings">
                <Text style={[styles.text, { color }]}>Settings</Text>
            </TouchableOpacity>
            
            <Modal isVisible={isModalVisible} onBackdropPress={clickOutSide} animationIn="slideInUp" animationOut="slideOutDown" useNativeDriver={true} hideModalContentWhileAnimating={true} backdropTransitionOutTiming={0} >
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={() => { /* handle navigation to User Profile */ }}>
                        <Text>User Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { /* handle navigation to Notification Settings */ }}>
                        <Text>Notification Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={logout}>
                        <Text>Logout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.closeText}>Click To Close</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        padding: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
    },
    closeText: {
        color: 'black',
        marginTop: 10,
    },
});

export default SettingButton;
