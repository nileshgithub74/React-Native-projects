import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

type SearchBarProps = {
  onChangeText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText }) => {
  const navigation = useNavigation<any>();

  const handleClear = () => {
    console.log('Clear recent searches');
  };

  return (
    <View className="flex-1 bg-blue-600 px-4 ">
      {/* Search Bar */}
      <View className="mt-12  h-20 flex-row items-center rounded-xl bg-white px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-lg font-medium">← Back</Text>
        </TouchableOpacity>

        <TextInput
          className="ml-4 flex-1 text-base text-lg"
          placeholder="Search for doctors..."
          onChangeText={onChangeText}
          clearButtonMode="while-editing"
        />
      </View>

      {/* Recent Searches Header */}
      <View className="mt-12 flex-row items-center justify-between">
        <Text className="text-lg font-semibold">
          Recent Searches
        </Text>

        <TouchableOpacity onPress={handleClear}>
          <Text className="font-medium text-blue-500">
            Clear
          </Text>
        </TouchableOpacity>
      </View>

       
    
    </View>
  );
};

export default SearchBar;