import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Home from './Components/Home';
import QuickCart from './Components/Cart';
import { SafeAreaView } from 'react-native-safe-area-context';

function App() {

  const [screen, setScreen] = useState('cart');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>

        <TouchableOpacity onPress={() => setScreen('home')} style={styles.button}>
          <Text style={styles.buttonText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setScreen('cart')} style={styles.button}>
          <Text style={styles.buttonText}>
            QuickCart
          </Text>
        </TouchableOpacity>

      </View>


      <View style={styles.content}>
        {screen === 'home' ? (<Home />) : (<QuickCart />)}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  navbar: {
    height: 60,
    backgroundColor: '#222',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  button: {
    padding: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
  },

});

export default App;

