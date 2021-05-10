import  React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import ListScreen from './screens/ListScreen';
import AppHeader from './components/AppHeader';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  ListScreen: ListScreen,
  HomeScreen: HomeScreen,
});

const AppContainer = createAppContainer(AppNavigator);
