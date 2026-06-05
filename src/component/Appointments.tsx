import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

// Mock data - in real app, this would come from API/state management
const mockAppointments = [
  {
    id: 1,
    doctor: {
      name: 'Dr. Sarah',
      speciality: 'Dermatologist',
      image: 'https://images.pexels.com/photos/5214995/pexels-photo-5214995.jpeg',
      rating: 4.8,
      fees: 500,
    },
    date: '05 Mar',
    time: '12:00 AM',
    status: 'upcoming', // 'upcoming' or 'now'
  },
];

const Appointments = () => {
  const navigation = useNavigation<any>();

  if (mockAppointments.length === 0) {
    return null;
  }

  const handleAppointmentClick = (appointment: any) => {
    // Navigate to appointment detail page
    navigation.navigate('appointmentDetail', { appointment });
  };

  return (
    <View className="px-4 mb-6">
      {/* Section Heading */}
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-gray-900 font-bold text-lg">My Appointments</Text>
        <TouchableOpacity>
          <Text className="text-blue-500 text-sm font-semibold">See all</Text>
        </TouchableOpacity>
      </View>

      {/* Appointment Cards */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {mockAppointments.map((appointment) => (
          <View
            key={appointment.id}
            className="bg-blue-500 rounded-2xl p-4 mr-4 w-80"
          >
            <View className="flex-row items-center mb-4">
              <Image
                source={{ uri: appointment.doctor.image }}
                className="w-16 h-16 rounded-xl bg-white/20 mr-3"
                resizeMode="cover"
              />
              <View className="flex-1">
                <Text className="text-white font-bold text-lg mb-1">
                  {appointment.doctor.name}
                </Text>
                <Text className="text-white/80 text-sm">
                  {appointment.doctor.speciality}
                </Text>
              </View>
            </View>

            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center">
                <Text className="text-white/90 text-sm mr-1">📅</Text>
                <Text className="text-white font-semibold">
                  {appointment.date}
                </Text>
              </View>

              <View className="flex-row items-center">
                <Text className="text-white/90 text-sm mr-1">🕐</Text>
                <Text className="text-white font-semibold">
                  {appointment.time}
                </Text>
              </View>
            </View>

            {/* Join Call Button - Only shows when appointment time is now */}
            {appointment.status === 'now' && (
              <TouchableOpacity 
                className="bg-white rounded-xl py-2 px-4"
                onPress={() => navigation.navigate('videoCall', { 
                  doctor: appointment.doctor,
                  appointmentTime: appointment.time 
                })}
              >
                <Text className="text-blue-500 font-bold text-center">
                  📹 Join Video Call
                </Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Appointments;
