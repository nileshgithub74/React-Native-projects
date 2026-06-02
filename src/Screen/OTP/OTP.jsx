import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { OtpInput } from 'react-native-otp-entry';

const OTP = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    Keyboard.dismiss();
    console.log('OTP entered:', otp);
    // Add your OTP verification logic here
    navigation.replace('home'); 
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-white"
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-6">
          {/* Header */}
          <View className="mt-16 mb-8">
            <Text className="text-3xl font-semibold text-center">
              Verify OTP
            </Text>
            <Text className="text-gray-400 text-lg text-center mt-4">
              Enter the 6-digit code sent to your phone
            </Text>
          </View>

          {/* OTP Input */}
          <View className="mt-8">
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => setOtp(text)}
              onFilled={(text) => {
                setOtp(text);
                Keyboard.dismiss();
              }}
              focusColor="#3B82F6"
              theme={{
                containerStyle: { marginBottom: 20 },
                pinCodeContainerStyle: {
                  width: 50,
                  height: 50,
                  borderRadius: 12,
                  borderWidth: 2,
                  borderColor: '#E5E7EB',
                },
                focusedPinCodeContainerStyle: {
                  borderColor: '#3B82F6',
                },
                filledPinCodeContainerStyle: {
                  borderColor: '#3B82F6',
                },
                pinCodeTextStyle: {
                  fontSize: 24,
                  color: '#000',
                },
              }}
            />
          </View>

          {/* Resend Code */}
          <View className="mt-6">
            <TouchableOpacity onPress={() => console.log('Resend OTP')}>
              <Text className="text-blue-500 text-center text-lg">
                Didn't receive code? Resend
              </Text>
            </TouchableOpacity>
          </View>

          {/* Verify Button */}
          <TouchableOpacity
            onPress={handleVerifyOTP}
            className="bg-blue-400 items-center mt-12 rounded-2xl py-4"
          >
            <Text className="text-white text-xl font-semibold">
              Verify OTP
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OTP;
