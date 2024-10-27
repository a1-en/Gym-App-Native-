// src/components/SplashScreen.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  console.log('SplashScreen rendered'); // Log when this component renders

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      onFinish();
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        {/* <Text style={styles.title}>FitLife</Text> Ensure this text is directly within <Text> */}
      </View>
    );
  }

  return null; // Render nothing after loading is complete
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C70039',
  },
  logo: {
    width: 200, // Adjust size as needed
    height: 200, // Adjust size as needed
  },
  title: {
    fontSize: 24, // Adjust font size as needed
    fontWeight: 'bold', // Make the text bold
    color: '#FFFFFF', // Text color
    marginTop: 20, // Space between logo and text
  },
});

export default SplashScreen;
