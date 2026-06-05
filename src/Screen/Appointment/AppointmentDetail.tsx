import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const AppointmentDetail = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { appointment } = route.params || {};
  const { doctor, date, time, status } = appointment || {};

  const handleJoinCall = () => {
    navigation.navigate('videoCall', {
      doctor,
      appointmentTime: time
    });
  };

  const handleReschedule = () => {
    navigation.navigate('appointmentSchedule', {
      doctor,
      patientInfo: {} // You can pass existing patient info if available
    });
  };

  const handleCancelAppointment = () => {
    // Handle cancellation logic
    navigation.navigate('home');
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 flex-row items-center border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-blue-500 text-base">← Back</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Appointment Details</Text>
      </View>

      <View className="px-4 py-6">
        {/* Doctor Card */}
        <View className="bg-blue-500 rounded-2xl p-4 mb-6">
          <View className="flex-row items-center mb-4">
            <Image
              source={{ uri: doctor?.image }}
              className="w-20 h-20 rounded-xl bg-white/20 mr-4"
              resizeMode="cover"
            />
            <View className="flex-1">
              <Text className="text-white font-bold text-xl mb-1">
                {doctor?.name}
              </Text>
              <Text className="text-white/90 text-base mb-2">
                {doctor?.speciality}
              </Text>
              <View className="flex-row items-center">
                <Text className="text-yellow-400 text-sm mr-1">⭐</Text>
                <Text className="text-white font-semibold">{doctor?.rating}</Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center justify-between pt-4 border-t border-white/20">
            <View className="flex-row items-center">
              <Text className="text-white/90 text-base mr-2">📅</Text>
              <Text className="text-white font-semibold text-base">{date}</Text>
            </View>

            <View className="flex-row items-center">
              <Text className="text-white/90 text-base mr-2">🕐</Text>
              <Text className="text-white font-semibold text-base">{time}</Text>
            </View>
          </View>
        </View>

        {/* Status Badge */}
        <View className="mb-6">
          <View
            className={`self-start px-4 py-2 rounded-full ${
              status === 'now' ? 'bg-green-100' : 'bg-blue-100'
            }`}
          >
            <Text
              className={`font-semibold ${
                status === 'now' ? 'text-green-600' : 'text-blue-600'
              }`}
            >
              {status === 'now' ? '● Available Now' : '⏰ Upcoming'}
            </Text>
          </View>
        </View>

        {/* Appointment Info */}
        <View className="bg-gray-50 rounded-2xl p-4 mb-6">
          <Text className="text-gray-900 font-bold text-lg mb-3">Appointment Information</Text>
          
          <View className="mb-3">
            <Text className="text-gray-500 text-sm mb-1">Consultation Type</Text>
            <Text className="text-gray-900 font-semibold">Video Call</Text>
          </View>

          <View className="mb-3">
            <Text className="text-gray-500 text-sm mb-1">Consultation Fee</Text>
            <Text className="text-emerald-600 font-bold text-lg">₹{doctor?.fees}</Text>
          </View>

          <View>
            <Text className="text-gray-500 text-sm mb-1">Duration</Text>
            <Text className="text-gray-900 font-semibold">30 minutes</Text>
          </View>
        </View>

        {/* Action Buttons */}
        {status === 'now' ? (
          <TouchableOpacity
            className="bg-green-500 rounded-2xl py-4 mb-3 flex-row items-center justify-center"
            onPress={handleJoinCall}
          >
            <Text className="text-white text-lg mr-2">📹</Text>
            <Text className="text-white font-bold text-lg">Join Video Call Now</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="bg-blue-500 rounded-2xl py-4 mb-3"
            onPress={handleReschedule}
          >
            <Text className="text-white font-bold text-center text-lg">Reschedule Appointment</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          className="border-2 border-red-500 rounded-2xl py-4"
          onPress={handleCancelAppointment}
        >
          <Text className="text-red-500 font-bold text-center text-lg">Cancel Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AppointmentDetail;
