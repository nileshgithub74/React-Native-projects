import { ScrollView } from 'react-native';
import React from 'react';
import HeaderComponent from '@/component/Header';
import CategoriesComponent from '@/component/Categories';
import DoctorsHorizontalList from '@/component/Doctorlist/DoctorsHorizontalList';
import SectionHeading from '@/component/SectionHeading';
import Appointments from '@/component/Appointments';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <HeaderComponent />
      <CategoriesComponent />
      <Appointments />
      <SectionHeading
        title="Top Doctors"
        onPressHandler={() => navigation.navigate('doctorList')}
      />
      <DoctorsHorizontalList />
    </ScrollView>
  );
};

export default HomeScreen;
