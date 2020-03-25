import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const ResultDetail = ({result}) => (
  <View style={{margin: 8}}>
    <Image style={styles.image} source={{uri: result.image_url}} />
    <Text style={styles.name}>{result.name}</Text>
    <Text>
      {result.rating}★ {result.review_count} Reviews
    </Text>
  </View>
);

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 150,
    borderRadius: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ResultDetail;
