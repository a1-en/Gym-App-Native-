import React, { useState } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { Appbar, Card, Title, TextInput, Button, Snackbar } from 'react-native-paper';
import { LineChart } from 'react-native-chart-kit';

export default function ProgressScreen() {
  const [inputData, setInputData] = useState('');
  const [dataPoints, setDataPoints] = useState([65, 72, 68, 75, 85, 95]); // Initial progress data
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const handleAddData = () => {
    const newData = parseFloat(inputData);
    if (!isNaN(newData)) {
      setDataPoints([...dataPoints, newData]);
      setInputData('');
      setSnackbarVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.Content title="Your Progress" titleStyle={styles.headerTitle} />
      </Appbar.Header>
      <View style={styles.content}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.chartTitle}>Your Progress Over Time</Title>
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', ...Array(dataPoints.length - 6).fill('')],
                datasets: [{ data: dataPoints }],
              }}
              width={Dimensions.get('window').width - 40}
              height={220}
              yAxisSuffix="kg"
              chartConfig={{
                backgroundColor: '#e26a00',
                backgroundGradientFrom: '#fb8c00',
                backgroundGradientTo: '#ffa726',
                decimalPlaces: 2,
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              }}
              style={styles.chart}
            />
          </Card.Content>
        </Card>

        {/* Input for adding new data */}
        <View style={styles.inputContainer}>
          <TextInput
            label="Add Your Progress"
            value={inputData}
            onChangeText={setInputData}
            keyboardType="numeric"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleAddData} style={styles.button}>
            Add Data
          </Button>
        </View>
      </View>

      {/* Snackbar for confirmation */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={2000}
        style={styles.snackbar}
      >
        Progress added successfully!
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
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#222222',
  },
  chartTitle: {
    color: '#FFFFFF',
  },
  chart: {
    marginVertical: 8,
    alignSelf: 'center', // Centering the chart
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#C70039',
  },
  snackbar: {
    backgroundColor: '#4CAF50',
  },
});
