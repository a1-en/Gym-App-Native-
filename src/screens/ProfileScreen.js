import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView } from 'react-native';
import { Appbar, TextInput, Button, Card, Title, Snackbar, Menu, Divider } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

export default function ProfileScreen() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [preferences, setPreferences] = useState(null); // State to hold saved preferences

  const fitnessGoals = [
    'Lose Weight',
    'Gain Muscle',
    'Improve Endurance',
    'Increase Flexibility',
    'General Fitness',
  ];

  const handleImagePick = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const handleSavePreferences = () => {
    const savedPreferences = { name, age, fitnessGoal, profileImage };
    setPreferences(savedPreferences);
    console.log('Saved Preferences:', savedPreferences);
    setSnackbarVisible(true);

    // Clear the form fields
    setName('');
    setAge('');
    setFitnessGoal('');
    setProfileImage(null); // Reset the profile image
  };

  return (
    <View style={styles.container}>
      {/* Appbar for the header */}
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Profile" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      {/* Scrollable Profile Form */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>Profile & Preferences</Title>
            {profileImage && (
              <Image source={{ uri: profileImage }} style={styles.profileImage} />
            )}
            <Button mode="outlined" onPress={handleImagePick} style={styles.imageButton}>
              Upload Profile Picture
            </Button>
            <TextInput
              label="Name"
              style={styles.input}
              mode="outlined"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              label="Age"
              style={styles.input}
              mode="outlined"
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
            />
            
            {/* Button to open Menu */}
            <Button
              mode="outlined"
              onPress={() => setMenuVisible(true)}
              style={styles.input}
            >
              {fitnessGoal || 'Select Fitness Goal'}
            </Button>

            {/* Menu for selecting fitness goals */}
            <Menu
              visible={menuVisible}
              onDismiss={() => setMenuVisible(false)}
              anchor={<Button onPress={() => setMenuVisible(true)} mode="outlined">{fitnessGoal || 'Select Fitness Goal'}</Button>}
            >
              {fitnessGoals.map((goal, index) => (
                <Menu.Item
                  key={index}
                  onPress={() => {
                    setFitnessGoal(goal);
                    setMenuVisible(false);
                  }}
                  title={goal}
                />
              ))}
              <Divider />
              <Menu.Item onPress={() => setMenuVisible(false)} title="Cancel" />
            </Menu>

            <Button
              mode="contained"
              onPress={handleSavePreferences}
              style={styles.button}
            >
              Save
            </Button>

            {/* Display the selected goal and saved preferences below after saving */}
            {preferences && (
              <View style={styles.preferencesContainer}>
                <Text style={styles.selectedGoal}>Saved Preferences:</Text>
                <Text style={styles.preferenceText}>Name: {preferences.name}</Text>
                <Text style={styles.preferenceText}>Age: {preferences.age}</Text>
                <Text style={styles.preferenceText}>Fitness Goal: {preferences.fitnessGoal}</Text>
                {preferences.profileImage && (
                  <Image source={{ uri: preferences.profileImage }} style={styles.savedProfileImage} />
                )}
              </View>
            )}
          </Card.Content>
        </Card>
      </ScrollView>

      {/* Snackbar for confirmation */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        style={styles.snackbar}
      >
        Preferences saved successfully!
      </Snackbar>
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
  headerTitle: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  scrollContainer: {
    paddingBottom: 20, // Add some padding to the bottom for better scrolling
  },
  card: {
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#222222',
  },
  title: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#C70039',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  imageButton: {
    marginBottom: 10,
  },
  snackbar: {
    backgroundColor: '#4CAF50',
  },
  selectedGoal: {
    color: '#FFFFFF',
    marginTop: 10,
  },
  preferencesContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#333333',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#444444',
  },
  preferenceText: {
    color: '#FFFFFF',
  },
  savedProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    alignSelf: 'center',
  },
});
