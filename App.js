import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './Components/Home'
import ContactPage from './Components/ContactPage';
const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={Home} options={{
          title: "HomePage",
          headerStyle: {backgroundColor: '#2A4EDD'},
          headerTitleStyle: { fontWeight: 'bold'},
          headerTintColor: '#fff'
          }}/>
        <Stack.Screen name="Contact" component={ContactPage} options={{ 
          title: "Contact",
          headerStyle: {backgroundColor: '#2A4EDD'},
          headerTitleStyle: { fontWeight: 'bold'},
          headerTintColor: '#fff'}}
        />  
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
