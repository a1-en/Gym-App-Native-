import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, Modal, TouchableOpacity, FlatList } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements'; // Import Icon
import { Appbar } from 'react-native-paper';
import ExerciseTimer from '../screens/Timer'; // Import the ExerciseTimer component

export default function WorkoutPlanScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isTimerVisible, setTimerVisible] = useState(false); // State to control timer visibility

  const plans = [
    {
      title: 'Beginner Plan',
      description: 'Start your fitness journey with easy workouts',
      image: require('../images/3.jpg'),
    },
    {
      title: 'Intermediate Plan',
      description: 'Take your training to the next level',
      image: require('../images/4.jpg'),
    },
    {
      title: 'Advanced Plan',
      description: 'Intense workouts for professionals',
      image: require('../images/5.jpg'),
      isPaid: true,
    },
    {
      title: 'Weight Loss Plan',
      description: 'Focus on burning fat and losing weight',
      image: require('../images/6.jpg'),
    },
    {
      title: 'Muscle Gain Plan',
      description: 'Designed for building muscle mass',
      image: require('../images/7.jpg'),
      isPaid: true,
    },
    {
      title: 'Cardio Plan',
      description: 'Enhance your cardiovascular fitness',
      image: require('../images/8.jpg'),
    },
  ];

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
    setModalVisible(true);
  };

  const handleStartWorkout = () => {
    setTimerVisible(true); // Show the timer when workout starts
  };

  const renderCard = ({ item }) => (
    <Card containerStyle={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Card.Title style={styles.cardTitle}>{item.title}</Card.Title>
      <Card.Divider />
      <Text style={styles.cardDescription}>{item.description}</Text>
      {item.isPaid && <Text style={styles.paidLabel}>Paid</Text>}
      <View style={styles.buttonContainer}>
        <Button
          icon={
            <Icon
              name="eye"
              type="font-awesome" // You can also use "material" or "material-community" depending on your icons
              size={15}
              color="#ffffff"
            />
          }
          buttonStyle={styles.button}
          onPress={() => handleViewDetails(item)}
          containerStyle={styles.buttonWrapper}
          titleStyle={styles.buttonTitle}
          size="sm"
        />
        <Button
          icon={
            <Icon
              name="play" // Use a play icon for start workout
              type="font-awesome"
              size={15}
              color="#ffffff"
            />
          }
          buttonStyle={styles.startButton}
          onPress={handleStartWorkout}
          containerStyle={styles.startButtonWrapper}
          titleStyle={styles.startButtonTitle}
          size="sm"
        />
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
       <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Workout Plans" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      {/* Show timer if a workout is started */}
      {isTimerVisible && <ExerciseTimer />}

      <FlatList
        data={plans}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        showsVerticalScrollIndicator={false}
      />

      {selectedPlan && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedPlan.title}</Text>
              <Text style={styles.modalDescription}>{selectedPlan.description}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.closeButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingBottom: 80, // Adjust this based on the height of your tab bar

  },
  appBar: {
    backgroundColor: '#222222',
    elevation: 4,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#222222',
    elevation: 3,
    margin: 10,
    flex: 1,
    maxWidth: '48%',
  },
  cardImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FF5733',
  },
  cardDescription: {
    color: '#FFFFFF',
    marginVertical: 10,
    textAlign: 'center',
  },
  paidLabel: {
    color: '#FF5733',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonWrapper: {
    flex: 1,
    marginRight: 5,
  },
  startButtonWrapper: {
    flex: 1,
    marginLeft: 5,
  },
  button: {
    borderRadius: 20,
    backgroundColor: '#FF5733',
  },
  startButton: {
    borderRadius: 20,
    backgroundColor: '#4CAF50',
  },
  buttonTitle: {
    fontSize: 12,
    marginLeft: 5, // Space for the icon
  },
  startButtonTitle: {
    fontSize: 12,
    marginLeft: 5, // Space for the icon
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#222222',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF5733',
    marginBottom: 10,
  },
  modalDescription: {
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    borderRadius: 20,
    backgroundColor: '#FF5733',
    padding: 10,
  },
  closeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  headerTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  row: {
    justifyContent: 'space-between',
  },
});
