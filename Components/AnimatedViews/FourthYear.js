import React, { useState } from 'react';
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { AnimatedLayout, CloseButton } from './Components';
import Accordion from 'react-native-collapsible/Accordion';
import { SEVENTHSEMESTER, EIGHTSEMESTER } from '../Courses/Courses';

const FourthYear = ({ item, close }) => {
    const [activeSectionTop, setActiveSectionTop] = useState(null);
    const [activeSectionBottom, setActiveSectionBottom] = useState(null);
    const [coursesTop, setCoursesTop] = useState(SEVENTHSEMESTER); 
    const [coursesBottom, setCoursesBottom] = useState(EIGHTSEMESTER);

    const _renderHeader = (section, index, isActive, updateSections) => {
        return (
            <TouchableOpacity onPress={() => updateSections(index)}>
                <View style={[styles.header, isActive && styles.activeHeader]}>
                    <Text style={styles.headerText}>{section.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    const _renderContent = (section, index, courses, updateSubSections) => {
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
                    onChange={(activeSubSections) => updateSubSections(activeSubSections, index)}
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

    const updateSections = (index, activeSection, setActiveSection) => {
        setActiveSection(index === activeSection ? null : index);
    };
    
    const onChangeSubSections = (activeSubSections, index, courses, setCourses) => {
        const updatedCourses = [...courses];
        updatedCourses[index].activeSubSections = activeSubSections;
        setCourses(updatedCourses);
    };
    

    const handleUpdateSectionsTop = (index) => updateSections(index, activeSectionTop, setActiveSectionTop);
    const handleUpdateSectionsBottom = (index) => updateSections(index, activeSectionBottom, setActiveSectionBottom);

    const handleChangeSubSectionsTop = (activeSubSections, index) => onChangeSubSections(activeSubSections, index, coursesTop, setCoursesTop);
    const handleChangeSubSectionsBottom = (activeSubSections, index) => onChangeSubSections(activeSubSections, index, coursesBottom, setCoursesBottom);

    return (
        <AnimatedLayout>
            <Image source={item.source} style={styles.scrollImage} />
            <Text style={styles.accordionTitle}>Seventh Semester Courses</Text>
            <Accordion
                sections={SEVENTHSEMESTER}
                activeSections={activeSectionTop === null ? [] : [activeSectionTop]}
                renderHeader={(section, index, isActive) => _renderHeader(section, index, isActive, handleUpdateSectionsTop)}
                renderContent={(section, index) => _renderContent(section, index, coursesTop, handleChangeSubSectionsTop)}
                onChange={handleUpdateSectionsTop}
            />
            <Text style={styles.accordionTitle}>Eighth Semester Courses</Text>
            <Accordion
                sections={EIGHTSEMESTER}
                activeSections={activeSectionBottom === null ? [] : [activeSectionBottom]}
                renderHeader={(section, index, isActive) => _renderHeader(section, index, isActive, handleUpdateSectionsBottom)}
                renderContent={(section, index) => _renderContent(section, index, coursesBottom, handleChangeSubSectionsBottom)}
                onChange={handleUpdateSectionsBottom}
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
        backgroundColor: '#F0F0F0', 
    },
});

export default FourthYear;
