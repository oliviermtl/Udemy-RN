import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from './src/Screens/SearchScreen';
import ResultsShowScreen from './src/Screens/ResultsShowScreen';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen
          name="ResultsShow"
          component={ResultsShowScreen}
          initialParams={{id: 0}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
