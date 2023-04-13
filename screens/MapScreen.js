import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Map from '../components/Map';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';


export default function MapScreen() {

  const { navigate } = useNavigation()
  const Stack = createNativeStackNavigator();

  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Home')} style={tw`absolute top-8 left-4 z-50 p-3 rounded-full bg-white/80`}>
        <Icon name='menu' />
      </TouchableOpacity>
      <View style={tw`h-1/2 bg-gray-300`}>
        <Map />
      </View>
      <View style={tw`h-1/2 p-2 bg-white`}>
        <Stack.Navigator>
          <Stack.Screen
            name='NavigateCard'
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View >
  );
}
