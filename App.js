import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import Camera from './screens/Camera';
import ProductDetails from './screens/ProductDetails'
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function History() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Historiques :</Text>
    </View>
  )
}

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
        <HistoryStack.Screen name="History" component={History} />
        <HistoryStack.Screen name="Details" component={ProductDetails} />
      </HistoryStack.Navigator>
  );
}

export default function App() {
  return (
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
