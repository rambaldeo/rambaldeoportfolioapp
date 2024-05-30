import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import { Ionicons } from '@expo/vector-icons';
import { Button } from 'react-native';
import Home from './Components/Home';
import ContactPage from './Components/ContactPage';
import Profile from './Components/Profile';
import LoginPage from './Components/LoginPage';
import Signup from './Components/SignUp';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
            title: "HomePage",
            headerStyle: { backgroundColor: '#2A4EDD' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
            //headerLeft: () => null,
            headerRight: () => (
              <Button onPress={() => alert('This is a button')} title="Settings" color="white" />
            ),
          })} 
        />
        <Stack.Screen name="Contact" component={ContactPage} options={{ 
            title: "Contact",
            headerStyle: { backgroundColor: '#2A4EDD' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
          }} 
        />
        <Stack.Screen name="AboutMe" component={Profile} options={{ 
            title: "About Me",
            headerStyle: { backgroundColor: '#2A4EDD' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
          }} 
        />
        <Stack.Screen name="Login" component={LoginPage} options={{ 
            title: "Welcome",
            headerStyle: { backgroundColor: '#2A4EDD' },
            headerTitleStyle: { fontWeight: 'bold' },
            headerTintColor: '#fff',
          }} 
        />
        <Stack.Screen name="Signup" component={Signup} options={({ navigation }) => ({
            headerTitle: () => null,
            headerStyle: { backgroundColor: '#4ADEDE' },
            headerTintColor: 'black',
            headerRight: () => (
              //need to create the settings page to logout
              <Button onPress={() => alert('This is a button')} title="Settings" color="black" />
            ),
          })} 
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
