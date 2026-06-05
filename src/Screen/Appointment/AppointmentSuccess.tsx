import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const AppointmentSuccess = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { doctor, appointmentDate, appointmentTime } = route.params || {};

  const handleDone = () => {
    navigation.navigate('home');
  };

  return (
    <View className="flex-1 bg-white">
      {/* Back Button */}
      <View className="px-4 pt-12 pb-4">
        <TouchableOpacity onPress={() => navigation.navigate('home')}>
          <Text className="text-blue-500 text-2xl">←</Text>
        </TouchableOpacity>
      </View>

      {/* Success Content */}
      <View className="flex-1 items-center justify-center px-8">
        {/* Thumbs Up Icon */}
        <View className="w-32 h-32 bg-blue-50 rounded-full items-center justify-center mb-8">
          <Text className="text-6xl">👍</Text>
        </View>

        {/* Thank You Title */}
        <Text className="text-3xl font-bold text-gray-900 mb-4">Thank You !</Text>

        {/* Success Message */}
        <Text className="text-gray-500 text-base text-center mb-2">
          Your Appointment Successful
        </Text>

        {/* Appointment Details */}
        <Text className="text-gray-600 text-center text-base leading-6">
          You booked an appointment with {doctor?.name || 'Dr. Sarah'} on {appointmentDate || '2025-03-05'}, at {appointmentTime || '12:00'}.
        </Text>
      </View>

      {/* Done Button */}
      <View className="px-8 pb-12">
        <TouchableOpacity
          className="bg-blue-500 rounded-2xl py-4"
          onPress={handleDone}
        >
          <Text className="text-white text-center font-bold text-lg">Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AppointmentSuccess;
