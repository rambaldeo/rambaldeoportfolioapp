import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './Components/Home';
import ContactPage from './Components/ContactPage';
import Profile from './Components/Profile';
import LoginPage from './Components/LoginPage';
import Signup from './Components/SignUp';
import SettingButton from './Components/SettingsButton';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
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
              <SettingButton color="white"/>
            ),
          })} 
        />
        <Stack.Screen name="Contact" component={ContactPage} options={( { navigation} ) => ({
          title: "Contact",
          headerStyle: { backgroundColor: '#2A4EDD' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerRight: () => (
            <SettingButton color="white"/>
          ),
        })}
        />
        <Stack.Screen name="AboutMe" component={Profile}  options={( { navigation} ) => ({
          title: "About Me",
          headerStyle: { backgroundColor: '#2A4EDD' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerRight: () => (
            <SettingButton color="white"/>
          ),
        })}
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
              <SettingButton color="black"/>
            ),
          })} 
        />
         <Stack.Screen name="Education" component={Education} options={( { navigation} ) => ({
          title: "Education",
          headerStyle: { backgroundColor: '#2A4EDD' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerRight: () => (
            <SettingButton color="white"/>
          ),
        })}
        />
        <Stack.Screen name="Experience" component={Experience}  options={( { navigation} ) => ({
          title: "Professional Experience",
          headerStyle: { backgroundColor: '#2A4EDD' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerRight: () => (
            <SettingButton color="white"/>
          ),
        })}
        />
        <Stack.Screen name="Projects" component={Projects}  options={( { navigation} ) => ({
          title: "Projects",
          headerStyle: { backgroundColor: '#2A4EDD' },
          headerTitleStyle: { fontWeight: 'bold' },
          headerTintColor: '#fff',
          headerRight: () => (
            <SettingButton color="white"/>
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
