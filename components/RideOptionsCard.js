import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { getBookingModal, getTravelTimeInformation, setBookingModal } from '../store/navSlice';
import { rideCarOptionsData } from '../config/config';
import BookingSuccessModal from '../modals/BookingSuccessModel';

export default function RideOptionsCard() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(null);
  const travelTimeInfo = useSelector(getTravelTimeInformation);
  const bookingModal = useSelector(getBookingModal);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View>
        <TouchableOpacity onPress={() => navigate('NavigateCard')} style={tw`p-3 absolute left-0 top-0 rounded-full z-10`}>
          <Icon type='fontawesome' name='chevron-left' />
        </TouchableOpacity>
        <Text style={tw`text-xl py-2 text-black text-center`}>Select a Ride - {Math.floor(travelTimeInfo?.distance?.value / 1000)} km</Text>
      </View>
      <FlatList
        data={rideCarOptionsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const { name, image, multiplier, id } = item;
          return (
            <>
              <TouchableOpacity style={tw`items-center rounded-lg flex-row mb-2 p-1 gap-2 justify-between px-4 ${id === selected?.id ? ' bg-gray-200' : 'bg-white'}`} onPress={() => setSelected(item)}>
                <View>
                  <Image source={{ uri: image }} style={{ width: 70, height: 70, resizeMode: 'contain' }} />
                </View>
                <View>
                  <Text style={tw`text-black text-lg font-bold`}>{name}</Text>
                  <Text>{travelTimeInfo?.duration?.text} time</Text>
                </View>
                <View>
                  <Text style={tw`text-black text-xl font-bold`}>
                    {new Intl.NumberFormat('en-In', { style: 'currency', currency: 'INR' })
                      .format((Math.floor(travelTimeInfo?.distance.value / 1000) * 20 * multiplier))
                    }
                  </Text>
                </View>
              </TouchableOpacity>
            </>
          )
        }}
      />
      <View>
        <TouchableOpacity disabled={!selected} onPress={() => dispatch(setBookingModal(true))} style={tw`p-2 text-center rounded-lg ${!selected ? 'bg-gray-300' : 'bg-black'}`}>
          <Text style={tw`text-center text-white text-lg`}>Choose {selected?.name}</Text>
        </TouchableOpacity>
      </View>
      {bookingModal && <BookingSuccessModal />}
    </SafeAreaView>
  );
}