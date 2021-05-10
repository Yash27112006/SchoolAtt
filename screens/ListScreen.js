import * as React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import AppHeader from '../components/AppHeader';
import ListStudents from '../components/ListStudents';
import db from '../config';
var today;
export default class ListScreen extends React.Component{
  constructor() {
    super();
    this.state = {
      all_students: [],
      presentBTNList: [],
      absentBTNList: []
    };
  }

  componentDidMount = async () => {
    var class_ref = await db.ref('/').on('value', (data) => {
      // class_ref.on('value', (data) => {
      var all_students = [];
      var class_a = data.val().class_A;
      for (var i in class_a) {
        all_students.push(class_a[i]);
      }
      all_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({ all_students: all_students });
    });

    today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    if (date<10){
      date = '0' + date;
    }
    if (month<10){
      month = '0' + month;
    }

    today = date + '-' + month + '-' + year;
    console.log(today)
    return today;
  };

  goToMainScreen = () => {
    
    this.props.navigation.navigate('HomeScreen',{presentName: this.state.presentBTNList});  };

  render() {
    return (
      <ScrollView>
        <View>
          <AppHeader />
          <ListStudents />
          <View style={styles.grid}>
            <Text style={styles.name}>1.           Aryan Dutt</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Present',
                  Name: 'Aryan Dutt',
                  Roll_No: 1,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/01/').update({
                  [today]: 'Absent',
                  Name: 'Aryan Dutt',
                  Roll_No: 1,
                }),
                  { disabled: true };
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>2.         Alvin Kharal</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Present',
                  Name: 'Alvin Kharal',
                  Roll_No: 2,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/02/').update({
                  [today]: 'Absent',
                  Name: 'Alvin Kharal',
                  Roll_No: 2,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>3.     Chahat Munjal</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Present',
                  Name: 'Chahat Munjal',
                  Roll_No: 3,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/03/').update({
                  [today]: 'Absent',
                  Name: 'Chahat Munjal',
                  Roll_No: 3,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>4.                      Jatin</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Present',
                  Name: 'Jatin',
                  Roll_No: 4,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/04/').update({
                  [today]: 'Absent',
                  Name: 'Jatin',
                  Roll_No: 4,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>5.   Naman Papneja</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Present',
                  Name: 'Naman Papneja',
                  Roll_No: 5,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/05/').update({
                  [today]: 'Absent',
                  Name: 'Naman Papneja',
                  Roll_No: 5,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>6.    Pranmay Singh</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Present',
                  Name: 'Pranmay Singh',
                  Roll_No: 6,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/06/').update({
                  [today]: 'Absent',
                  Name: 'Pranmay Singh',
                  Roll_No: 6,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>7.             Rachit Raj</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Present',
                  Name: 'Rachit Raj',
                  Roll_No: 7,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/07/').update({
                  [today]: 'Absent',
                  Name: 'Rachit Raj',
                  Roll_No: 7,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>8.      Reyan Ahmed</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Present',
                  Name: 'Reyan Ahmed',
                  Roll_No: 8,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/08/').update({
                  [today]: 'Absent',
                  Name: 'Reyan Ahmed',
                  Roll_No: 8,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>9.         Srehan Dutt</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Present',
                  Name: 'Srehan Dutt',
                  Roll_No: 9,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/09/').update({
                  [today]: 'Absent',
                  Name: 'Srehan Dutt',
                  Roll_No: 9,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>10.       Syed Ahmed</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Present',
                  Name: 'Syed Ahmed',
                  Roll_No: 10,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/10/').update({
                  [today]: 'Absent',
                  Name: 'Syed Ahmed',
                  Roll_No: 10,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>11.              Taqueer</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/11/').update({
                  [today]: 'Present',
                  Name: 'Taqueer',
                  Roll_No: 11,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/11/').update({
                  [today]: 'Absent',
                  Name: 'Taqueer',
                  Roll_No: 11,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>12.               Vishesh</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/12/').update({
                  [today]: 'Present',
                  Name: 'Vishesh',
                  Roll_No: 12,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/12/').update({
                  [today]: 'Absent',
                  Name: 'Vishesh',
                  Roll_No: 12,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.grid}>
            <Text style={styles.name}>13.                    Yash</Text>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => {
                db.ref('class/13/').update({
                  [today]: 'Present',
                  Name: 'Yash',
                  Roll_No: 13,
                });
              }}>
              <Text style={styles.text}>PRESENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttons2}
              onPress={() => {
                db.ref('class/13/').update({
                  [today]: 'Absent',
                  Name: 'Yash',
                  Roll_No: 13,
                });
              }}>
              <Text style={styles.text}>ABSENT</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.buttons1} onPress={this.goToMainScreen}>
            <Text style={styles.text1}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    color: 'green',
    backgroundColor: 'lightgreen',
    borderWidth: 2,
    borderRadius: 15,
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  buttons2: {
    color: 'green',
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 15,
    width: 70,
    marginTop: 15,
    marginRight: 5,
    left: 7,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 5,
    padding: 5,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  buttons1: {
    alignSelf: 'center',
    backgroundColor: 'blue',
    borderWidth: 3,
    width: 100,
    left: 20,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  text1: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
