import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import db from '../config';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getDate() {
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    if (date < 10) {
      date = '0' + date;
    }
    if (month < 10) {
      month = '0' + month;
    }

    today = date + '-' + month + '-' + year;
    return today;
  }

  componentDidMount = async () => {
    var today = await this.getDate();
    var students_ref = db.ref('class/').on('value', (data) => {
      var class_a = data.val();
      var presentStudents = [];
      var absentStudents = [];
      for (var i in class_a) {
        if (class_a[i][today] !== undefined) {
          if (class_a[i][today] === 'Present') {
            presentStudents.push(class_a[i])['Name'];
          }
          if (class_a[i][today] === 'Absent') {
            absentStudents.push(class_a[i]);
          }
        }
      }

      presentStudents.sort(function (a, b) {
        return a.Roll_No - b.Roll_No;
      });

      absentStudents.sort(function (a, b) {
        return a.Roll_No - b.Roll_No;
      });

      this.setState({
        present_students: presentStudents,
        absent_students: absentStudents,
      });
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>PRESENT Students List</Text>
        <View style={styles.presentContainer}>
          {console.log(this.props.navigation.getParam('presentName'))}
          {this.state.present_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.Name}</Text>
          ))}
        </View>
        <Text style={styles.title}>ABSENT Students List</Text>

        <View style={styles.absentContainer}>
          {this.state.absent_students.map((student, index) => (
            <Text style={{ fontSize: 18 }}>{student.Name}</Text>
          ))}
        </View>
        <View
          style={{
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={styles.text}>
            No. of Present: {this.state.present_students.length}
          </Text>
          <Text style={styles.text}>
            No. of Absent: {this.state.absent_students.length}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  presentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  absentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'red',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20,
    color: 'purple',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: 'yellow',
    marginTop: 20,
  },
});
