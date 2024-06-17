import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
  {
    title: 'Personal Projects',
    content: 'Talk about all of my personal projects I am attempted',
  },
  {
    title: 'School Projects',
    content: 'Talk about all of my school projects and results'
  }

];

const Projects = () => {
    const screenWidth = Dimensions.get('window').width;
    const [activeSections, setActiveSections] = useState([]);

    const _renderHeader = (section) => {
        return (
            <View style={ProejctStyles.header}>
                <Text style={ProejctStyles.headerText}>{section.title}</Text>
            </View>
        );
    };

    const _renderContent = (section) => {
        return (
            <View style={ProejctStyles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
    };

    return (
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={ProejctStyles.gradient}>
            <ScrollView contentContainerStyle={ProejctStyles.scrollViewContent}>
                <View style={ProejctStyles.container}>
                    <View style={ProejctStyles.card}>
                        <Accordion
                            sections={SECTIONS}
                            activeSections={activeSections}
                            renderHeader={_renderHeader}
                            renderContent={_renderContent}
                            onChange={_updateSections}
                        />
                    </View>
                    
                </View>
            </ScrollView>
        </LinearGradient>
    );
};

export default Projects;

const ProejctStyles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 2,
    },
    container: {
        width: '100%',
        alignItems: 'center', // Centers the view horizontally
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    card: {
        backgroundColor: '#AEBAF8',
        width: Dimensions.get('window').width * 0.8, // Adjusted width to fit accordion
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        marginVertical: 20, // Adjusted margin
        paddingHorizontal: 5,
        paddingVertical: 5,
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 25,
        fontWeight: '500',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});
