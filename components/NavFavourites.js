import { Icon } from '@rneui/themed';
import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { navigateToLocationData } from '../config/config';


export default function NavFavourites() {
    // const data = [
    //     {
    //         id: '123',
    //         icon: 'home',
    //         location: 'Home',
    //         destination: 'Firozpur, Punjab, India',
    //     },
    //     {
    //         id: '456',
    //         icon: 'briefcase',
    //         location: 'Work',
    //         destination: 'Faridkot, Punjab, India',
    //     },
    // ]
    return (
        <FlatList data={navigateToLocationData} key={(item) => item.id}
            ItemSeparatorComponent={() => <View style={[tw`bg-gray-300`, { height: 1 }]} />}
            renderItem={({ item: { location, icon, destination } }) => {
                return (
                    <>
                        <TouchableOpacity style={tw`flex-row items-center  p-3`}>
                            <Icon color={'white'} size={18} name={icon} style={tw`mr-4 rounded-full bg-gray-300 p-3`} type='ionicon' />
                            <View>
                                <Text style={tw`text-black`}>{location}</Text>
                                <Text style={tw`text-black`}>{destination}</Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )
            }} />
    );
}
