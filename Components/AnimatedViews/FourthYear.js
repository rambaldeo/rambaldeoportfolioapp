import React, { useState } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { AnimatedLayout, CloseButton } from './Components';
import Accordion from 'react-native-collapsible/Accordion';
import { TESTSEVENTHSEMESTER, TESTEIGHTSEMESTER } from '../Courses/Courses';


//Need to fix handling each array seperately
const FourthYear = ({ item, close }) => {
    const [activeSection, setActiveSection] = useState(null);
    const [activeSectionSecond, setActiveSectionSecond] = useState(null);
    const [courses, setCourses] = useState(TESTSEVENTHSEMESTER); // Initial courses

    const _renderHeader = (section, index, isActive) => {
        return (
            <TouchableOpacity onPress={() => _updateSections(index)}>
                <View style={[styles.header, isActive && styles.activeHeader]}>
                    <Text style={styles.headerText}>{section.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const _renderContent = (section, index, isActive) => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}><Text style={styles.bold}>Professor:</Text> {section.professor}</Text>
                <Text style={styles.contentText}><Text style={styles.bold}>Description: </Text>{section.content}</Text>
                <Accordion
                    sections={[
                        { title: 'Project', content: section.project },
                        { title: 'Assignment', content: section.assignment }
                    ]}
                    activeSections={courses[index].activeSubSections}
                    renderHeader={_renderSubHeader}
                    renderContent={_renderSubContent}
                    onChange={(activeSubSections) => _onChangeSubSections(activeSubSections, index)}
                />
            </View>
        );
    };

    const _renderSubHeader = (subSection) => {
        return (
            <View style={styles.subHeader}>
                <Text style={styles.subHeaderText}>{subSection.title}</Text>
            </View>
        );
    };

    const _renderSubContent = (subSection) => {
        return (
            <View style={styles.subContent}>
                <Text>{subSection.content}</Text>
            </View>
        );
    };

    const _updateSections = (index) => {
        setActiveSection(index === activeSection ? null : index);
        setCourses(index === 0 ? TESTSEVENTHSEMESTER : TESTEIGHTSEMESTER); // Change courses based on selected semester
    };

    const _updateSectionsSecond = (section) => {
        setActiveSectionSecond(activeSectionSecond)
    }

    const _onChangeSubSections = (activeSubSections, index) => {
        const updatedCourses = [...courses];
        updatedCourses[index].activeSubSections = activeSubSections;
        setCourses(updatedCourses);
    };

    return (
        <AnimatedLayout>
            <Image source={item.source} style={styles.scrollImage} />
            <Text style={styles.accordionTitle}>Seventh Semester Courses</Text>
            <Accordion
                sections={TESTSEVENTHSEMESTER}
                activeSections={activeSection === null ? [] : [activeSection]}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
            />
            <Text style={styles.accordionTitle}>Eighth Semester Courses</Text>
            <Accordion
                sections={TESTEIGHTSEMESTER}
                activeSections={activeSection === null ? [] : [activeSection]}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSections}
            />
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
    accordionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginVertical: 5,
        textAlign: 'center',
    },
    header: {
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'center'
    },
    content: {
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    contentText: {
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    subHeader: {
        backgroundColor: '#F0F0F0',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#DDD',
    },
    subHeaderText: {
        fontWeight: 'bold',
    },
    subContent: {
        padding: 10,
    },
    activeHeader: {
        backgroundColor: '#F0F0F0', // Change to the active header color
    },
});

export default FourthYear;
