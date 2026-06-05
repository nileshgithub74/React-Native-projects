import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const AppointmentSchedule = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { doctor, patientInfo } = route.params || {};

  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedReminder, setSelectedReminder] = useState('10 min');

  const timeSlots = ['10:00 AM', '11:00 AM', '12:00 PM', '13:00 PM', '14:00 PM'];
  const reminderOptions = ['10 min', '15 min', '30 min'];

  // Get month and year
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const monthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

  // Get days in month
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    
    const days = [];
    // Add empty slots for days before month starts
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }
    // Add actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const calendarDays = getDaysInMonth(currentDate);

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const handleSetAppointment = () => {
    const formattedDate = selectedDate.toISOString().split('T')[0];
    navigation.navigate('appointmentSuccess', {
      doctor,
      appointmentDate: formattedDate,
      appointmentTime: selectedTime
    });
  };

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <View className="px-4 pt-12 pb-4 flex-row items-center border-b border-gray-100">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-blue-500 text-base">← Back</Text>
        </TouchableOpacity>
        <Text className="text-xl font-bold text-gray-900">Appointment</Text>
      </View>

      <View className="px-4 py-6">
        {/* Calendar Month Header */}
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity onPress={handlePreviousMonth}>
            <Text className="text-gray-600 text-xl">←</Text>
          </TouchableOpacity>
          <Text className="text-gray-700 font-semibold text-base">{monthYear}</Text>
          <TouchableOpacity onPress={handleNextMonth}>
            <Text className="text-gray-600 text-xl">→</Text>
          </TouchableOpacity>
        </View>

        {/* Calendar Day Headers */}
        <View className="flex-row justify-between mb-3">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <View key={day} className="w-10 items-center">
              <Text className="text-gray-500 text-xs font-semibold">{day}</Text>
            </View>
          ))}
        </View>

        {/* Calendar Grid */}
        <View className="flex-row flex-wrap mb-6">
          {calendarDays.map((day, index) => {
            if (!day) {
              return <View key={`empty-${index}`} className="w-10 h-10 m-1" />;
            }

            const isSelected = isSameDay(day, selectedDate);
            const isPast = isPastDate(day);

            return (
              <TouchableOpacity
                key={day.toISOString()}
                onPress={() => !isPast && setSelectedDate(day)}
                disabled={isPast}
                className="w-10 h-10 items-center justify-center m-1"
              >
                <View
                  className={`w-10 h-10 rounded-full items-center justify-center ${
                    isSelected ? 'bg-blue-500' : 'bg-transparent'
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      isSelected
                        ? 'text-white font-bold'
                        : isPast
                        ? 'text-gray-300'
                        : 'text-gray-700'
                    }`}
                  >
                    {day.getDate()}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Available Time Slot */}
        <View className="flex-row items-center justify-between mb-3">
          <Text className="text-gray-900 font-bold text-base">Available Time Slot</Text>
          <TouchableOpacity>
            <Text className="text-blue-500 text-sm">See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-6">
          {timeSlots.map((time) => (
            <TouchableOpacity
              key={time}
              onPress={() => setSelectedTime(time)}
              className={`rounded-xl px-6 py-3 mr-3 ${
                selectedTime === time ? 'bg-blue-500' : 'bg-gray-100'
              }`}
            >
              <Text
                className={`font-semibold ${
                  selectedTime === time ? 'text-white' : 'text-gray-700'
                }`}
              >
                {time}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Reminder Me Before */}
        <Text className="text-gray-900 font-bold text-base mb-3">Reminder Me Before</Text>
        <View className="flex-row mb-8">
          {reminderOptions.map((reminder) => (
            <TouchableOpacity
              key={reminder}
              onPress={() => setSelectedReminder(reminder)}
              className={`rounded-xl px-6 py-3 mr-3 ${
                selectedReminder === reminder ? 'bg-blue-500' : 'bg-gray-100'
              }`}
            >
              <Text
                className={`font-semibold ${
                  selectedReminder === reminder ? 'text-white' : 'text-gray-700'
                }`}
              >
                {reminder}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Set Appointment Button */}
        <TouchableOpacity
          className="bg-blue-500 rounded-2xl py-4"
          onPress={handleSetAppointment}
        >
          <Text className="text-white text-center font-bold text-lg">Set Appointment</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default AppointmentSchedule;
