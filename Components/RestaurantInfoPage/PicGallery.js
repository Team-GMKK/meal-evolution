import React, {Component} from 'react';
import {View} from 'react-native';
import {Headline, Paragraph} from 'react-native-paper';
import {SliderBox} from 'react-native-image-slider-box';

export default class PicGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?taco",
        "https://source.unsplash.com/1024x768/?water",
        "https://source.unsplash.com/1024x768/?girl",
        "https://source.unsplash.com/1024x768/?tree", // Network image
      ],
    };
  }
  // other component code ...
  render() {
    const {images} = this.state;
    return (
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={300}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          inactiveDotColor="#777"
        />
        <View>
          <Headline>Hello</Headline>
          <Paragraph>This is the description of the picture</Paragraph>
        </View>
      </View>
    );
  }
};