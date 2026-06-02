import { View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const HeaderComponent = () => {
  const handleNotificationPress = () => {
    console.log('Notification clicked');
  };

  const navigation = useNavigation<any>();

  return (
    <View className="bg-gray-100">
      <View className="h-64 rounded-md bg-blue-600 px-6 pt-12">
        <View className="flex-row items-center justify-between">
          {/* Left Section */}
          <View className="flex-row items-center mt-4">
            <Image source={require('@/assets/img/avatar.png')} className="h-14 w-14 rounded-full" />

            <View className="ml-4">
              <Text className="text-lg text-white opacity-80">Welcome Back</Text>
              <Text className="text-2xl font-bold text-white">User</Text>
            </View>
          </View>

          {/* Notification Button */}
          <TouchableOpacity
            onPress={handleNotificationPress}
            className="rounded-full bg-white/20 p-3"
            activeOpacity={0.7}>
            <Image source={require('@/assets/img/icon.png')} className="h-6 w-6" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('search')}
          className="mt-10 h-16 flex-row items-center border  rounded-xl bg-white/10 px-4">
          <Image source={require('@/assets/img/search.png')} />

          <Text className="ml-3 text-lg text-white opacity-80">Search for doctors...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;
