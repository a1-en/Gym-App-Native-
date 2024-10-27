// AppNavigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import WorkoutPlanScreen from '../screens/WorkoutPlanScreen';
import ProgressScreen from '../screens/ProgressScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBar,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Plans') {
              iconName = 'fitness-center';
            } else if (route.name === 'Progress') {
              iconName = 'bar-chart';
            } else if (route.name === 'Schedule') {
              iconName = 'calendar-today';
            } else if (route.name === 'Profile') {
              iconName = 'person';
            }
            return (
              <MaterialIcons
                name={iconName}
                size={size}
                color={focused ? '#C70039' : color}
                style={styles.icon}
              />
            );
          },
          tabBarLabelStyle: styles.tabBarLabel,
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Plans" component={WorkoutPlanScreen} />
        <Tab.Screen name="Progress" component={ProgressScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#222222',
    borderTopWidth: 0,
    elevation: 5,
    borderRadius: 20,
    position: 'absolute',
    bottom: 10, // Adjust this value to move the tab bar up/down
    left: 20,
    right: 20,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  tabBarLabel: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  icon: {
    marginBottom: -5,
  },
});
