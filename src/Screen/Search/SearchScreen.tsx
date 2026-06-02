import { View } from 'react-native'
import React, { useCallback } from 'react'
import SearchBar from '../SearchBar/SearchBar'

const SearchScreen = () => {

    const onChangeText = useCallback((text:string)=>{
        console.log("Search text :", text);
    },[]);


  return (
    <View className='flex-1 flex-row bg-gray-200'>
       <View className='w-full h-36  bg-blue-600'>
        <SearchBar onChangeText={onChangeText} />

       </View>
    </View>
  )
}

export default SearchScreen