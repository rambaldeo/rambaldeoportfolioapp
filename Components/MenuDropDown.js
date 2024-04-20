import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const MenuDropDown = () => {
    const navigation = useNavigation();
    const containerRef = useRef(null);

    return (
        <MenuProvider>
            <View style={[styles.container, { height: containerRef.current?.clientHeight || 'auto' }]} ref={containerRef}>
                <Menu>
                    <MenuTrigger>
                        <Icon name="menu" size={40} color="black" style={styles.menuIcon} />
                    </MenuTrigger>
                    <MenuOptions style={styles.menuOptions}>
                        <MenuOption onSelect={() => alert('Save')} text="Education"/>
                        <MenuOption onSelect={() => alert('Save')} text="Experience"/>
                        <MenuOption onSelect={() => alert('Save')} text="Projects"/>
                    </MenuOptions>
                </Menu>
            </View>
        </MenuProvider>
    );
};

export default MenuDropDown;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuIcon: {
        margin: 10, 
    },
    menuOptions: {
        padding: 5,
        flexDirection: 'column',
        alignItems: 'left',
        backgroundColor: "rgba(0, 0, 255, 0.5)",
    },
});
