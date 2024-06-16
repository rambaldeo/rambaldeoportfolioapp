import React, { useState } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';
import { AnimatedLayout, CloseButton } from './Components';
import Accordion from 'react-native-collapsible/Accordion';
import { THIRDSEMESTER, FOURTHSEMESTER } from '../Courses/Courses';


const SecondYear = ({ item, close }) => {
    const [activeSectionsFirst, setActiveSectionsFirst] = useState([]);
    const [activeSectionsSecond, setActiveSectionsSecond] = useState([]);

    const _renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    const _renderContent = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    const _updateSectionsFirst = (activeSections) => {
        setActiveSectionsFirst(activeSections);
    };

    const _updateSectionsSecond = (activeSections) => {
        setActiveSectionsSecond(activeSections);
    };

    return (
        <AnimatedLayout>
        <Image source={item.source} style={styles.scrollImage} />
        <Text style={styles.accordionTitle}>Third Semester Courses</Text>
        <View style={styles.accordionStyle}>
            <Accordion
                sections={THIRDSEMESTER}
                activeSections={activeSectionsFirst}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSectionsFirst}
            />
        </View>
        <Text style={styles.accordionTitle}>Fourth Semester Courses</Text>
        <View style={styles.accordionStyle}>
            <Accordion
                sections={FOURTHSEMESTER}
                activeSections={activeSectionsSecond}
                renderHeader={_renderHeader}
                renderContent={_renderContent}
                onChange={_updateSectionsSecond}
            />
        </View>
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
    accordionStyle: {
        borderRadius: 10,
        overflow: 'hidden',
        margin: 10,
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
        alignItems: 'center',
        marginBottom: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
});

export default SecondYear;
