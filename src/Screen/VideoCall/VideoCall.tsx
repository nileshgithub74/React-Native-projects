import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';

const VideoCall = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const { doctor, appointmentTime } = route.params || {};

  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  const handleEndCall = () => {
    navigation.navigate('home');
  };

  return (
    <View className="flex-1 bg-gray-900">
      {/* Doctor Video (Large) */}
      <View className="flex-1 items-center justify-center">
        <Image
          source={{ uri: doctor?.image }}
          className="w-full h-full"
          resizeMode="cover"
        />
        
        {/* Doctor Name Overlay */}
        <View className="absolute top-12 left-4 bg-black/50 rounded-xl px-4 py-2">
          <Text className="text-white font-bold text-lg">{doctor?.name}</Text>
          <Text className="text-white/80 text-sm">{doctor?.speciality}</Text>
        </View>

        {/* Call Duration */}
        <View className="absolute top-12 right-4 bg-black/50 rounded-xl px-4 py-2">
          <Text className="text-white font-bold">⏱ 00:00</Text>
        </View>
      </View>

      {/* Your Video (Small) */}
      <View className="absolute top-32 right-4 w-28 h-36 bg-gray-700 rounded-2xl overflow-hidden border-2 border-white">
        <View className="flex-1 items-center justify-center">
          <Text className="text-white text-4xl">👤</Text>
          <Text className="text-white text-xs mt-2">You</Text>
        </View>
      </View>

      {/* Control Buttons */}
      <View className="absolute bottom-12 left-0 right-0 px-8">
        <View className="flex-row items-center justify-around bg-white/10 rounded-3xl py-4 px-6">
          {/* Mute Button */}
          <TouchableOpacity
            className={`w-14 h-14 rounded-full items-center justify-center ${
              isMuted ? 'bg-red-500' : 'bg-white/20'
            }`}
            onPress={() => setIsMuted(!isMuted)}
          >
            <Text className="text-white text-2xl">{isMuted ? '🔇' : '🎤'}</Text>
          </TouchableOpacity>

          {/* End Call Button */}
          <TouchableOpacity
            className="w-16 h-16 bg-red-500 rounded-full items-center justify-center"
            onPress={handleEndCall}
          >
            <Text className="text-white text-2xl">📞</Text>
          </TouchableOpacity>

          {/* Video Toggle Button */}
          <TouchableOpacity
            className={`w-14 h-14 rounded-full items-center justify-center ${
              isVideoOff ? 'bg-red-500' : 'bg-white/20'
            }`}
            onPress={() => setIsVideoOff(!isVideoOff)}
          >
            <Text className="text-white text-2xl">{isVideoOff ? '📹' : '📷'}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Back Button */}
      <TouchableOpacity
        className="absolute top-12 left-4 w-10 h-10 bg-black/50 rounded-full items-center justify-center"
        onPress={handleEndCall}
      >
        <Text className="text-white text-xl">←</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VideoCall;
