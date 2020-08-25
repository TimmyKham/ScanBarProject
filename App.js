import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from './screens/Camera';
import { Icon } from 'react-native-elements';

const Tab = createBottomTabNavigator();

function History() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Historiques :</Text>
    </View>
  )
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
        <Tab.Screen name="Camera" component={Camera} />
        <Tab.Screen name="History" component={History} />
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
