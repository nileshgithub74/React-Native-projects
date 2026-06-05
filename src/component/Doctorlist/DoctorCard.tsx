import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 2 cards per screen minus padding and gap

interface DoctorCardProps {
  name: string;
  rating: number;
  image: string;
  fees: number;
  speciality?: string;
  id?: number;
}

const DoctorCard = ({ name, rating, image, fees, speciality, id }: DoctorCardProps) => {
  const navigation = useNavigation<any>();

  const handlePress = () => {
    navigation.navigate('appointment', {
      doctor: { name, rating, image, fees, speciality, id }
    });
  };

  return (
    <TouchableOpacity 
      className="bg-white rounded-2xl overflow-hidden shadow-lg mr-4 mb-4"
      style={styles.card}
      onPress={handlePress}
    >
      <View className="relative">
        <Image 
          source={{ uri: image }} 
          style={styles.cardImage}
          className="bg-gray-200"
          resizeMode="cover"
        />
        <View className="absolute top-2 right-2 bg-white/95 rounded-full px-2 py-1 flex-row items-center shadow-md">
          <Text className="text-yellow-500 text-xs mr-0.5">⭐</Text>
          <Text className="text-gray-800 font-semibold text-xs">{rating}</Text>
        </View>
      </View>

      <View className="p-3">
        <Text className="text-gray-900 text-sm font-bold mb-1" numberOfLines={1}>
          {name}
        </Text>
        
        {speciality && (
          <Text className="text-gray-500 text-xs mb-2" numberOfLines={1}>
            {speciality}
          </Text>
        )}

        <View className="flex-row items-center justify-between mt-1">
          <View className="flex-1 mr-2">
            <Text className="text-gray-500" style={{ fontSize: 10 }}>Fee</Text>
            <Text className="text-emerald-600 text-base font-bold">₹{fees}</Text>
          </View>
         
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    maxWidth: CARD_WIDTH,
  },
  cardImage: {
    width: CARD_WIDTH,
    height: CARD_WIDTH ,
  },
});

export default DoctorCard;
