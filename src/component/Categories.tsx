import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SYMPTOMS } from '@/Constant/Syptoms';

type RenderProps = {
  name: string;
  index: number;
  selected: number;
  onPress: (index: number) => void;
};

const RenderItems: React.FC<RenderProps> = ({
  name,
  index,
  selected,
  onPress,
}) => {
  const isSelected = selected === index;

  return (
    <TouchableOpacity
      className={`mr-3 rounded-xl px-4 py-2  ${
        isSelected ? 'bg-blue-700' : 'bg-gray-300'
      }`}
      onPress={() => onPress(index)}
    >
      <Text
        className={`font-medium ${
          isSelected ? 'text-white' : 'text-black'
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

const CategoriesComponent = () => {
  const [selected, setSelected] = useState(0);

  return (
    <View className="mt-4">
      <FlatList
        horizontal
        data={SYMPTOMS}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <RenderItems
            name={item.name}
            index={index}
            selected={selected}
            onPress={setSelected}
          />
        )}
      />
    </View>
  );
};

export default CategoriesComponent;