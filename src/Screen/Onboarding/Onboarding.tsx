import { View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Onboarding = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View className="flex-1">
      <ImageBackground
        source={require('../../assets/img/splash.png')}
        style={{ flex: 1 }}
        resizeMode="cover">
        {/* TOP IMAGE SECTION */}
        <View className="mt-8 flex-1 items-center justify-center">
          <Image
            source={require('../../assets/img/doctor.png')}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* BOTTOM CARD SECTION */}
        <View className="flex-[0.5] rounded-tl-2xl rounded-tr-2xl bg-white px-6 pt-6">
          <Text className="text-center text-4xl font-semibold">Welcome to Medicare</Text>

          <Text className="mt-3 text-center text-lg text-gray-400">
            Book appointments with your doctors
          </Text>

          {/* DOTS PLACEHOLDER */}
          <View className="mt-6 flex-row justify-center space-x-4">
            <View className="h-2 w-4 rounded-full bg-blue-500" />
            <View className="h-2 w-2 rounded-full bg-gray-300" />
            <View className="h-2 w-2 rounded-full bg-gray-300" />
          </View>

          {/* buuton */}
          <TouchableOpacity
            onPress={() => {
              navigation.replace('login');
            }}
            className="mt-10   items-center rounded-2xl  bg-blue-500 py-4">
            <Text className="text-2xl"> Get Started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Onboarding;
