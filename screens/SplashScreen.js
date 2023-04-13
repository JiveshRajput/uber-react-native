import React from 'react';
import { Image, View, SafeAreaView, Text } from 'react-native';
import tw from 'twrnc';

export default function SplashScreen({ navigation }) {
    setTimeout(() => {
        navigation.replace('Home')
    }, 3000)
    return (
        <View style={tw`flex-1 justify-center items-center`}>
            <Image source={require('../assets/icon.png')} style={tw`w-[150px] h-[150px] mb-6`} resizeMode='contain' />
            <Text style={tw`text-black text-xl`}>Enjoy the Ride!</Text>
        </View>
    );
}
