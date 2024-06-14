import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SquareWithImageBackground = ({id, title }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (id === "Contact") {
      navigation.navigate('Contact');
    }
    if (id==='About'){
      navigation.navigate('AboutMe');
    }
    if (id==='Education'){
      navigation.navigate('Education')
    }
    if( id==='Experience'){
      navigation.navigate('Experience')
    }
    if ( id === 'Projects'){
      navigation.navigate('Projects')
    }
   
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, { backgroundColor: '#AEBAF8' }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { fontSize: 20 }]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 120,
    borderRadius: 30,
    overflow: 'hidden',
    margin: 15,
    elevation: 10, 
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    opacity: 1, 
  },
});

export default SquareWithImageBackground;