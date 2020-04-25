import React from 'react';
import {List} from 'react-native-paper';

const MenuScroll = ({item}) => (
  <List.Accordion
    title={`Food Option ${item}`}
    left={props => <List.Icon {...props} icon="folder" />}>
    <MenuScroll />
  </List.Accordion>
);

export default MenuScroll;
