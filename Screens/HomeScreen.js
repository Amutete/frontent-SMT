import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/home-banner.png')} style={styles.banner} />
      <Text style={styles.title}>Welcome to RTP App</Text>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Work')}>
          <Image source={require('../assets/images/work-icon.png')} style={styles.icon} />
          <Text>Work</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profit')}>
          <Image source={require('../assets/images/profit-icon.png')} style={styles.icon} />
          <Text>Profit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyPage')}>
          <Image source={require('../assets/images/profile-icon.png')} style={styles.icon} />
          <Text>My Page</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Deposit')}>
          <Image source={require('../assets/images/deposit-icon.png')} style={styles.icon} />
          <Text>Deposit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Withdrawal')}>
          <Image source={require('../assets/images/withdrawal-icon.png')} style={styles.icon} />
          <Text>Withdrawal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  banner: { width: '100%', height: 150, marginBottom: 20, resizeMode: 'contain' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20 },
  button: { alignItems: 'center' },
  icon: { width: 64, height: 64, marginBottom: 5 },
});
