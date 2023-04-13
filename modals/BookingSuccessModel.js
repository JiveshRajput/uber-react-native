import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import tw from 'twrnc';
import { getBookingModal, setBookingModal } from '../store/navSlice';
import { Icon } from '@rneui/base';

export default function BookingSuccessModal() {
    const bookingModal = useSelector(getBookingModal);
    const dispatch = useDispatch()

    return (
        <View style={tw`flex-1 justify-center items-center m-4`}>
            <Modal animationType="slide" transparent={true}        >
                <View style={tw`m-5 p-2 bg-white flex-1 rounded-lg`}>
                    <View style={tw`flex-row justify-end`} >
                        <TouchableOpacity style={tw`p-2 rounded-full`} onPress={() => dispatch(setBookingModal(false))}>
                            <Icon name='close-outline' type='ionicon' style={tw`text-black`} size={35} />
                        </TouchableOpacity>
                    </View>
                    <View style={tw`p-2 flex-1 justify-center items-center`}>
                        <View style={tw`p-5 w-36 h-36 mb-8 rounded-full bg-green-500 flex justify-center items-center`}>
                            <Icon name='checkmark-outline' color={'#fff'} style={tw`text-white`} type='ionicon' size={100} />
                        </View>
                        <Text style={tw`text-xl text-black`}>Booking Successfully Done </Text>
                        <Text style={tw`text-xl text-black`}>Enjoy your Ride!</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
