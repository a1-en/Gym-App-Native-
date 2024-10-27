import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar, Text, Card } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      {/* Appbar for the header */}
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Workout Schedule" titleStyle={styles.headerTitle} />
      </Appbar.Header>
      {/* Main content */}
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.title}>Your Workout Schedule</Text>
          <Calendar
            onDayPress={(day) => console.log('Selected day', day)}
            markedDates={{
              '2024-10-10': { marked: true, dotColor: 'blue' },
              '2024-10-11': { marked: true, dotColor: 'blue' },
            }}
            theme={{
              backgroundColor: '#222222', // Card background color
              calendarBackground: '#222222', // Calendar background color
              dayTextColor: '#FFFFFF', // Day text color
              todayTextColor: '#FF5733', // Today’s date color
              selectedDayBackgroundColor: '#FF5733', // Selected day background color
              selectedDayTextColor: '#FFFFFF', // Selected day text color
              arrowColor: '#FF5733', // Arrow color for navigation
            }}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Background color
  },
  headerTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  appBar: {
    backgroundColor: '#222222',
    elevation: 4,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#222222', // Card background color
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF', // Title color
    marginBottom: 10,
  },
});
