import { View, Text } from 'react-native'
import React from 'react'
import HeaderComponent from '@/component/Header'
import CategoriesComponent from '@/component/Categories'

const HomeScreen = () => {
  return (
    <View className='flex-1'>
       <HeaderComponent/>
       <CategoriesComponent/>
      

    </View>
  )
}

export default HomeScreen