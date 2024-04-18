import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Keyboard   } from 'react-native';

const Home = ({ navigation }) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const name = 'Caretaker';
    
  return (
    <View style={styles.container}>
      <Greeting timeOfDay={currentHour} name={name} />
      <View style={styles.content}>
        <View style={styles.row}>
          <SquareWithImageBackground
            id="Temperature Log"
            title="27°"
            imageUrl={require('./assets/thermBackground.png')}
            color="#E5B9FA"
            fontSize={45}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  gradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    paddingBottom: 200,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
    padding: 4,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 16,
    color: 'black',
    paddingHorizontal: 10,
    opacity: 0.7,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
  image: {
    width: 280, // Set the width of the image
    height: 65, // Set the height of the image
    resizeMode: 'cover', // Set the resizeMode (cover, contain, stretch, etc.)
    marginBottom: 20,
  },
});

export default Home;
