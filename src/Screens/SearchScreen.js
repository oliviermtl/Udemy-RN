import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../Components/SearchBar';
import useResults from '../Hooks/useApiResults';
import ResultsList from '../Components/ResultsList';

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = price => {
    // "$", "$$","$$$"
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar
        onTermSubmit={() => searchApi(term)}
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title="Cheapos" />
        <ResultsList results={filterResultsByPrice('$$')} title="Bit pricier" />
        <ResultsList results={filterResultsByPrice('$$$')} title="Big Bucks" />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});
export default SearchScreen;
