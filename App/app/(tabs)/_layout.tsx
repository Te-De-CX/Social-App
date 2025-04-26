import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Animated, TouchableWithoutFeedback, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const bounceValue = new Animated.Value(0);

useEffect(() => {
  return () => {
    StatusBar.setHidden(false);
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync("white");
    }
  };
}, []);

  const animateTab = () => {
    Animated.sequence([
      Animated.timing(bounceValue, {
        toValue: -20,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.spring(bounceValue, {
        toValue: 0,
        friction: 5,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#54FFEB",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: [styles.tabBar, Platform.select({
          ios: {
            position: 'absolute',
          },
          android: {
            elevation: 0,
          },
        })],
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? 'home' : 'home-outline'} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? 'chatbubbles' : 'chatbubbles-outline'} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="post"
        options={{
          tabBarIcon: ({ focused }) => (
            <Animated.View style={[
              styles.centerTab,
              { 
                backgroundColor: focused ? "#01FFE1" : '#54FFEB',
                transform: [{ translateY: bounceValue }],
              }
            ]}>
              <TouchableWithoutFeedback onPress={animateTab}>
                <Icon 
                  name="add" 
                  size={32} 
                  color={focused ? '#009785' : Colors[colorScheme ?? 'light'].tint} 
                />
              </TouchableWithoutFeedback>
            </Animated.View>
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? 'notifications' : 'notifications-outline'} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <Icon 
              name={focused ? 'person' : 'person-outline'} 
              size={26} 
              color={color} 
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 60 : 60,
    paddingTop: Platform.OS === 'ios' ? 5 : 10,
  },
  centerTab: {
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: Platform.OS === 'ios' ? 30 : 20,
    borderWidth: 1,
    borderColor: '#01FFE1',
    backgroundColor: '#01FFE1',
    shadowColor: '#01FFE1',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    color: "black",
    elevation: 4,
  },
});