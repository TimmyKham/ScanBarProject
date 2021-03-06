import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Camera from './screens/Camera';
import ProductDetails from './screens/ProductDetails';
import History from './screens/History';
import { Icon } from 'react-native-elements';
import { Provider as PaperProvider } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';


const Tab = createBottomTabNavigator();

const CameraStack = createStackNavigator();

function CameraStackScreen() {
  return (
      <CameraStack.Navigator>
        <CameraStack.Screen name="Camera" component={Camera} />
        <CameraStack.Screen name="Details" component={ProductDetails} />
      </CameraStack.Navigator>
  );
}

const HistoryStack = createStackNavigator();

function HistoryStackScreen() {
  return (
      <HistoryStack.Navigator>
        <HistoryStack.Screen name="History" component={History}/>
        <HistoryStack.Screen name="Details" component={ProductDetails} />
      </HistoryStack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  if (route.name === 'Camera') {
                      iconName = 'camera'
                  } else if (route.name === 'History') {
                      iconName = 'list';
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
              },
          })} tabBarOptions={{
              activeTintColor: 'blue',
              inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Camera" component={CameraStackScreen} />
          <Tab.Screen name="History" component={HistoryStackScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
