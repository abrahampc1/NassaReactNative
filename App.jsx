import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import Home from './src/views/Home';

function App(){
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor : 'rgba(7, 26, 93, 255)',
  },
});

export default App;