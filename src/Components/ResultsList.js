import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

import ResultDetail from './ResultDetail';
const ResultsList = ({title, results}) => {
  const navigation = useNavigation();

  if (!results) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={() => results.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.setParams({id: item.id});
                navigation.navigate('ResultsShow', {id: item.id});
              }}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default ResultsList;
