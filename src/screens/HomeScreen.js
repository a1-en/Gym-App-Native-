// src/screens/HomeScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.appBar}>
        <Icon name="fitness-center" size={30} color="#FFFFFF" />
        <Text style={styles.appBarTitle}>FitLife</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Card containerStyle={styles.card}>
          <Image source={require('../images/12.jpg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Workout Plans</Text>
          <Card.Divider />
          <Text style={styles.cardContent}>
            Explore personalized workout plans to achieve your fitness goals.
          </Text>
          <Button
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#FF5733", "#C70039"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={styles.button}
            title="Get Started"
            onPress={() => navigation.navigate('Plans')}
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Image source={require('../images/1.jpg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Nutrition Guide</Text>
          <Card.Divider />
          <Text style={styles.cardContent}>
            Discover healthy recipes and meal plans tailored for you.
          </Text>
          <Button
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#FF5733", "#C70039"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={styles.button}
            title="View Recipes"
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Image source={require('../images/111.jpg')} style={styles.cardImage} />
          <Text style={styles.cardTitle}>Track Progress</Text>
          <Card.Divider />
          <Text style={styles.cardContent}>
            Monitor your workouts and nutrition to stay on track.
          </Text>
          <Button
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ["#FF5733", "#C70039"],
              start: { x: 0, y: 0.5 },
              end: { x: 1, y: 0.5 },
            }}
            buttonStyle={styles.button}
            title="See Progress"
            onPress={() => navigation.navigate('Progress')}
          />
        </Card>
      </View>

      {/* Add a spacer to ensure content does not overlap with the tab bar */}
      <View style={styles.spacer} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 20,
    paddingBottom: 20, // Ensure this padding is enough for the tab bar
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C70039',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  appBarTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 24,
    marginLeft: 10,
  },
  cardsContainer: {
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#222222',
    elevation: 3,
    marginBottom: 20,
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
    textAlign: 'center',
    marginVertical: 10,
  },
  cardContent: {
    marginVertical: 10,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    marginTop: 10,
  },
  spacer: {
    height: 80, // Adjust height based on the tab bar height
  },
});

export default HomeScreen;
