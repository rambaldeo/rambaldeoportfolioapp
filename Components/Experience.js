import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Dimensions, Text } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Accordion from 'react-native-collapsible/Accordion'; 

const SECTIONS = [
  {
    company: 'Deighton Associates',
    position: 'Jr Software Developer Intern',
    duration: 'Summer 2023',
    content: 'Include information about my internship and my time there. Include the projects I worked on, the things I struggled with, what I thrived and how I included myself in the team',
  },
  {
    company: "Longo's",
    position: 'Part-time Clerk',
    duration: '2017 - Present',
    content: 'Part Time clerk since 2017',
  },
  {
    company: 'Staples',
    position: 'Tech Associate',
    duration: '2018 - 2019',
    content: "Tech Associate",
  },
  {
    company: "Tim Hortons",
    position: 'Server',
    duration: '2016 - 2017',
    content: "Worked at Tim Hortons Canada",
  }
];

const Experience = () => {
    const screenWidth = Dimensions.get('window').width;
    const [activeSections, setActiveSections] = useState([]);

    const _renderHeader = (section) => {
        return (
            <View style={ExperienceStyles.header}>
                <Text style={ExperienceStyles.headerText}>{section.company}</Text>
                <Text style={ExperienceStyles.subHeaderText}>{section.position} | {section.duration}</Text>
            </View>
        );
    };

    const _renderContent = (section) => {
        return (
            <View style={ExperienceStyles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    const _updateSections = (activeSections) => {
        setActiveSections(activeSections);
    };

    return (
        <LinearGradient colors={['#2A4EDD', '#4ADEDE', '#2A4EDD']} style={ExperienceStyles.gradient}>
            <ScrollView contentContainerStyle={ExperienceStyles.scrollViewContent}>
                <View style={ExperienceStyles.container}>
                    <View style={ExperienceStyles.card}>
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

export default Experience;

const ExperienceStyles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    container: {
        width: '100%',
        alignItems: 'center', // Centers the view horizontally
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 25,
    },
    card: {
        backgroundColor: '#AEBAF8',
        width: Dimensions.get('window').width * 0.9, // Adjusted width to fit accordion
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
        fontSize: 35,
        fontWeight: '500',
    },
    subHeaderText: {
        fontSize: 16,
        fontWeight: '400',
        color: '#555',
    },
    content: {
        padding: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
});
