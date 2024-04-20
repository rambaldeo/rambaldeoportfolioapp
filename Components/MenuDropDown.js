import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const MenuDropDown = () => {
    const navigation = useNavigation();
    return (
        <MenuProvider>
            <View style={styles.container}>
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
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    menuIcon: {
        margin: 10, 
    },
    menuOptions: {
        padding: 5,
        flexDirection: 'column',
        alignItems: 'left'
    },
});
