import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {List, Card, Paragraph} from 'react-native-paper';
import MenuCard from './MenuCard';
import MenuScroll from './MenuCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})

const MenuScrollContainer = () => {
  return (
    <ScrollView style={style.container}>
      {[1,2,3,4,5,6,7,8].map((item) => (
        <MenuCard key={JSON.stringify(item)} item={item} />
      ))}
    </ScrollView>
  );
};

export default MenuScrollContainer;
