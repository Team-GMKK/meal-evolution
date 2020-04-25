import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Headline, Text, Appbar, withTheme} from 'react-native-paper';
import PicGallery from './PicGallery';
import MenuScroll from './MenuScrollContainer';
import Layout from '../Layout/Skeleton';

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  topAppBar: theme => ({
    height: 30,
    backgroundColor: theme.colors.primary,
  }),

});

const RestaurantPage = ({theme}) => {
  return (
    <View style={style.wrapper}>
      <PicGallery />
      <MenuScroll />
    </View>
  );
};

export default withTheme(RestaurantPage);
