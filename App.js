import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from './Components/Home'

const Stack = createStackNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ="Home" component={Home} options={{
          title: "HOMEPAGE",
          headerStyle: {backgroundColor: '#4ADEDE'},
          headerTitleStyle: { fontWeight: 'bold'},
          headerTintColor: '#fff'
          }}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});
