import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageComponent = ({ imageUrl }) => {
  return (
    <Image
      source={imageUrl}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ImageComponent;
