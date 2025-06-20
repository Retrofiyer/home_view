import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';

const TAB_ICONS = [
  { name: 'Horario', icon: (color: string) => <MaterialIcons name="schedule" size={26} color={color} /> },
  { name: 'Carnet', icon: (color: string) => <MaterialIcons name="badge" size={26} color={color} /> },
  { name: 'Home', icon: (color: string) => <MaterialIcons name="home" size={28} color={color} /> },
  { name: 'Mis Cursos', icon: (color: string) => <MaterialIcons name="menu-book" size={26} color={color} /> },
  { name: 'Perfil', icon: (color: string) => <FontAwesome name="user-circle-o" size={25} color={color} /> },
];

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabel: ({ focused, color }) => {
          let label = route.name;
          if (label === 'index') label = 'Home';
          if (label === 'explore') label = 'Mis Cursos';
          if (label === 'Carnet') label = 'Carnet';
          if (label === 'Horario') label = 'Horario';
          if (label === 'Perfil') label = 'Perfil';
          return (
            <Text style={{
              fontSize: 12,
              color,
              fontWeight: focused ? 'bold' : 'normal',
              textAlign: 'center',
              marginTop: 2,
            }}>{label}</Text>
          );
        },
        tabBarIcon: ({ color, focused }) => {
          let idx = 2; // Home por defecto
          if (route.name === 'index') idx = 2;
          else if (route.name === 'explore') idx = 3;
          else if (route.name === 'Carnet') idx = 1;
          else if (route.name === 'Horario') idx = 0;
          else if (route.name === 'Perfil') idx = 4;
          return TAB_ICONS[idx].icon(focused ? '#1976D2' : '#A0A4A8');
        },
        tabBarActiveTintColor: '#1976D2',
        tabBarInactiveTintColor: '#A0A4A8',
        tabBarStyle: [
          {
            backgroundColor: '#fff',
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            height: 68,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            borderTopWidth: 0,
            elevation: 12,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            paddingBottom: Platform.OS === 'android' ? 10 : 24,
            paddingTop: 6,
          },
        ],
      })}
    >
      <Tabs.Screen
        name="Horario"
        options={{
          title: 'Horario',
          tabBarIcon: ({ color, focused }) => TAB_ICONS[0].icon(focused ? '#1976D2' : '#A0A4A8'),
        }}
      />
      <Tabs.Screen
        name="Carnet"
        options={{
          title: 'Carnet',
          tabBarIcon: ({ color, focused }) => TAB_ICONS[1].icon(focused ? '#1976D2' : '#A0A4A8'),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => TAB_ICONS[2].icon(focused ? '#1976D2' : '#A0A4A8'),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Mis Cursos',
          tabBarIcon: ({ color, focused }) => TAB_ICONS[3].icon(focused ? '#1976D2' : '#A0A4A8'),
        }}
      />
      <Tabs.Screen
        name="Perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, focused }) => TAB_ICONS[4].icon(focused ? '#1976D2' : '#A0A4A8'),
        }}
      />
    </Tabs>
  );
}
