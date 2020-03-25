import React from 'react';
import {Text, View, FlatList, StyleSheet, Image} from 'react-native';
import yelp from '../api/yelp';
import {useEffect, useState} from 'react';

const ResultsShowScreen = ({route}) => {
  const id = route.params.id;
  const [result, setResult] = useState(null);
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }
  console.log(result.photos);
  return (
    <View>
      <Text>ResultsShowScreen {result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});

export default ResultsShowScreen;
