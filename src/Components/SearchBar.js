import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Icon name="search" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={newTerm => onTermChange(newTerm)}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#dfdfdf',
    height: 50,
    borderRadius: 5,
    margin: 8,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: 'center',
    marginHorizontal: 8,
  },
});
export default SearchBar;
