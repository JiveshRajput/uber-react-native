import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { Icon } from '@rneui/themed';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../store/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';

export default function NavigateCard() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <TouchableOpacity onPress={() => navigate('Home')} style={tw`p-3 absolute left-0 top-0 rounded-full z-10`}>
        <Icon type='fontawesome' name='chevron-left' />
      </TouchableOpacity>
      <Text style={tw`text-xl text-black py-2 font-semibold text-center`}>Good Morning, Riders</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            // console.log(data, "data")
            // console.log(details, "details")
            dispatch(setDestination(
              {
                location: details.geometry.location,
                description: data.description
              }
            ))
            navigate('RideOptionsCard')
          }}

          debounce={400}
          placeholder='Where to?'
          enablePoweredByContainer={false}
          minLength={2}
          fetchDetails={true}
          returnKeyType={'Search'}
          nearbyPlacesAPI='GooglePlacesSearch'
          styles={{
            container: {
              flex: 0,
              marginVertical: 10,
            },
            textInput: {
              fontSize: 18,
              borderRadius: 10,
              backgroundColor: '#efefef'
            }
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
        />
        <NavFavourites />
      </View>
      <View style={tw`my-2 py-2 flex-row justify-evenly`}>
        <TouchableOpacity style={tw`bg-black p-3 rounded-full flex-row w-24 justify-center mr-2`} onPress={() => navigate('RideOptionsCard')}>
          <Icon name='car' type='font-awesome' color={'white'} size={16} style={tw`mr-3`} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-gray-300 p-3 rounded-full flex-row w-24 justify-center mr-4`} onPress={() => navigate('Eat')}>
          <Icon name='fast-food-outline' type='ionicon' size={16} style={tw`mr-3 text-black`} />
          <Text style={tw`text-black text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
