import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>SCHOOL ATTENDANCE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'black',
  },
  text:{
    color: 'white',
    padding: 10,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

