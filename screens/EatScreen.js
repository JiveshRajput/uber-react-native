import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import tw from 'twrnc';

export default function Eat() {
  return (
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <Text style={tw`text-xl text-black`}>Service coming soon!</Text>
     </SafeAreaView>
  );
}
