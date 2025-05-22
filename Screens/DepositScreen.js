import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import api from '../api/axios';

export default function DepositScreen() {
  const [investmentLevel, setInvestmentLevel] = useState('');
  const [investmentAmount, setInvestmentAmount] = useState('');

  const handleActivate = async () => {
    try {
      const response = await api.post('/user/activate', {
        investmentLevel,
        investmentAmount: Number(investmentAmount),
      });
      Alert.alert('Success', 'Investment activated!');
    } catch (error) {
      Alert.alert('Error', error.response?.data?.message || error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deposit</Text>
      <TextInput
        placeholder="Investment Level"
        style={styles.input}
        value={investmentLevel}
        onChangeText={setInvestmentLevel}
      />
      <TextInput
        placeholder="Investment Amount"
        style={styles.input}
        value={investmentAmount}
        onChangeText={setInvestmentAmount}
        keyboardType="numeric"
      />
      <Button title="Activate Investment" onPress={handleActivate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
});
