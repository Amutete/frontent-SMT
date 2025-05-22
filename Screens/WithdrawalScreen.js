import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function WithdrawalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Withdrawal Screen</Text>
      {/* TODO: Implement withdrawal functionality */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24 },
});
