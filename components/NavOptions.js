import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from '@rneui/themed';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { getOrigin } from '../store/navSlice';


export default function NavOptions() {
    const navigation = useNavigation();
    const origin = useSelector(getOrigin);
    const routeList = [
        {
            id: '123',
            title: 'Get a ride',
            image: 'https://links.papareact.com/3pn',
            screen: 'Map',
            isDisabled: !origin,
        },
        {
            id: '105',
            title: 'Order Food',
            image: 'https://i.pinimg.com/originals/fd/80/ec/fd80ecec48eba2a9adb76e4133905879.png',
            screen: 'Eat',
            isDisabled: false,
        },
    ]
    return (
        <>
            <FlatList data={routeList} horizontal keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    const { screen, image, title, isDisabled } = item;
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate(screen)} style={tw`${isDisabled ? 'opacity-20' : 'opacity-100'}`} disabled={isDisabled}>
                            <View style={tw`w-40 p-4 py-8 mr-3 rounded-lg bg-gray-200 flex justify-center gap-2 `} >
                                <Image style={[tw`w-[120px] h-[120px] m-auto `, { resizeMode: 'contain' }]} source={{ uri: image }} />
                                <Text style={tw` text-xl font-bold`}>{title}</Text>
                                <Icon style={[tw`p-1 mt-3 flex justify-center items-center rounded-full w-12 h-12 bg-black`]} name='arrowright' color='white' type='antdesign' />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    );
}
