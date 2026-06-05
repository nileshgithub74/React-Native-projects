import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const AppointmentForm = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const doctor = route.params?.doctor;

  const handleBookAppointment = () => {
    navigation.navigate('appointmentSchedule', { 
      doctor,
      patientInfo: {}
    });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-12 pb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-blue-500 text-base">← Back</Text>
        </TouchableOpacity>
      </View>

      {/* Doctor Image */}
      <View className="px-4 mb-4">
        <Image
          source={{ uri: doctor?.image }}
          className="w-full h-80 rounded-3xl bg-gray-200"
          resizeMode="cover"
        />
      </View>

      {/* Doctor Info */}
      <View className="px-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="text-2xl font-bold text-gray-900">{doctor?.name}</Text>
          <View className="flex-row items-center">
            <Text className="text-yellow-500 text-lg mr-1">⭐</Text>
            <Text className="text-gray-900 font-bold text-lg">{doctor?.rating}</Text>
          </View>
        </View>
        
        <Text className="text-gray-500 text-base mb-6">{doctor?.speciality || 'Specialist'}</Text>

        {/* Stats */}
        <View className="flex-row justify-between mb-8 px-2">
          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">👥</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">120+</Text>
            <Text className="text-gray-500 text-xs">Patients</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">📊</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">7+</Text>
            <Text className="text-gray-500 text-xs">Years Exp</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">⭐</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">{doctor?.rating}</Text>
            <Text className="text-gray-500 text-xs">Rating</Text>
          </View>

          <View className="items-center">
            <View className="w-12 h-12 bg-blue-50 rounded-full items-center justify-center mb-2">
              <Text className="text-blue-500 text-xl">💬</Text>
            </View>
            <Text className="text-blue-500 font-bold text-lg">100+</Text>
            <Text className="text-gray-500 text-xs">Reviews</Text>
          </View>
        </View>

        {/* About Me */}
        <View className="mb-8">
          <Text className="text-xl font-bold text-gray-900 mb-3">About Me</Text>
          <Text className="text-gray-500 text-base leading-6 mb-2">
            Dr. {doctor?.name?.replace('Dr. ', '')} is a top-rated {doctor?.speciality || 'medical'} specialist at V-care Clinic. With over 7 years of experience, they have successfully treated more than 120 patients.
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-500 font-semibold">Read More...</Text>
          </TouchableOpacity>
        </View>

        {/* Book Appointment Button */}
        <TouchableOpacity 
          className="bg-blue-500 rounded-2xl py-4 mb-8"
          onPress={handleBookAppointment}
        >
          <Text className="text-white font-bold text-center text-lg">Book an Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AppointmentForm;
