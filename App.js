// App.js
import React, { useState } from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider as PaperProvider } from 'react-native-paper';
import SplashScreen from './src/screens/SplashScreen'; // Adjust the path to where your SplashScreen is located

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleFinishLoading = () => {
    setIsLoading(false);
  };
  console.log('App component rendered'); // Log when this component renders

  return (
    <PaperProvider>
      {isLoading ? (
        <SplashScreen onFinish={handleFinishLoading} />
      ) : (
        <AppNavigation />
      )}
    </PaperProvider>
  );
}
