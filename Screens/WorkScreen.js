import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WorkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Work Screen</Text>
      {/* TODO: Add work-related UI and API integration */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});
