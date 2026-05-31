import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PropertyListScreen from '../screens/PropertyListScreen';
import PropertyDetailScreen from '../screens/PropertyDetailScreen';
import InspectionScreen from '../screens/InspectionScreen';
import { colors } from '../data/propertyData';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.surface, shadowColor: 'transparent' },
          headerTintColor: colors.primary,
          headerTitleStyle: { fontWeight: '800' },
          cardStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Properties" component={PropertyListScreen} />
        <Stack.Screen name="Property Detail" component={PropertyDetailScreen} />
        <Stack.Screen name="Inspection" component={InspectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
