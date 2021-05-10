import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class ListStudents extends React.Component{
  render(){
    return(
      <View style= {styles.listContainer}>
        <View style={styles.grid}>
      <Text style={styles.text}>Roll No.  </Text>
      <Text style={styles.text}>    Name            </Text>
      <Text style={styles.text1}>   Status             </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer:{
    backgroundColor: 'blue',
     borderWidth: 1,
    borderColor: 'black',
    width : '330px' ,
      height : '35px',
      marginLeft: -5
  },
   text: {
    backgroundColor: "orange",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  text1: {
    backgroundColor: "orange",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  grid: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
});
