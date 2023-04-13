import React from 'react'
import { SafeAreaView, Image } from 'react-native'
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import NavOptions from '../components/NavOptions';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../store/navSlice';
import NavFavourites from '../components/NavFavourites';

function HomeScreen() {
    const dispatch = useDispatch();

    return (
        <>
            <SafeAreaView style={tw`p-2`}>
                <Image style={[tw`w-[120px] h-[60px] mb-2`, { resizeMode: 'contain' }]} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' }} />
                <GooglePlacesAutocomplete
                    onPress={(data, details = null) => {
                        dispatch(setOrigin(
                            {
                                location: details.geometry.location,
                                description: data.description
                            }
                        ))
                        dispatch(setDestination(null))
                    }}
                    debounce={400}
                    placeholder='Where from?'
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
                            borderRadius: 10
                        }
                    }}
                    query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en'
                    }}
                />
                <NavOptions />
                <NavFavourites />
            </SafeAreaView>
        </>
    )
}

export default HomeScreen