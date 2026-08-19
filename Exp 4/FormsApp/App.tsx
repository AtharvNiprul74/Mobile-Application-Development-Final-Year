/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import { Alert, Image, Pressable, StatusBar, StyleSheet, Text, TextInput, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import RegistrationForm from './Components/RegistrationForm';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {

  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [validForm, setValidForm] = useState(false)
  const [register, setRegister] = useState(false)

  const validateData = () => {
    if (!userName.trim() || !password.trim())
      Alert.alert("Warning", "Please Enter All Fields...")

    else
      setValidForm(true)
  }

  if (validForm) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.pane}>
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeTitle}>Welcome To App</Text>

            <Text style={styles.welcomeText}>React Native Application</Text>

            <Text style={styles.greet}>Welcome Back {userName}</Text>

            <View style={styles.imageBorder}>
              <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtBCemWDFLSHm2yvHDdEpcTqiF6YBbHvw9pnhT-qiMFw&s=10' }} style={styles.images} />
            </View>

            <Pressable style={styles.logoutBtn} onPress={() => { setValidForm(false); setUserName(" "); setPassword(" ") }}>
              <Text style={styles.logoutText}> Logout</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView >
    );
  }

  if (register) {
    return <RegistrationForm setRegister={setRegister} />
  }

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.pane}>
          <View style={styles.card}>
            <Text style={styles.header}>Login Form</Text>
            <TextInput style={styles.textInput} placeholder="Enter Username" onChangeText={setUserName} />
            <TextInput style={styles.textInput} placeholder="Enter Password" secureTextEntry onChangeText={setPassword} />
            <View style={styles.btnGroup}>
              <Pressable style={styles.btn} onPress={validateData}><Text style={styles.btnText}>Login</Text></Pressable>
              <Pressable style={styles.btn} onPress={() => setRegister(true)}><Text style={styles.btnText}>Sign Up</Text></Pressable>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  pane: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 2,
    borderRadius: 10,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    fontSize: 27,
    marginVertical: 10
  },
  textInput: {
    borderWidth: 2,
    borderStyle: 'dashed',
    width: "80%",
    height: 50,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },
  btn: {
    width: "40%",
    height: "50",
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#0275d8"
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  },

  welcomeCard: {
    borderWidth: 2,
    borderRadius: 20,
    width: "80%",
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10
  },

  welcomeText: {
    fontSize: 18,
    marginBottom: 20
  },

  greet: {
    marginBottom: 2,
    fontSize: 18
  },

  imageBorder: {
    borderWidth: 2,
    borderStyle: 'dotted',
    borderRadius: 20,
    padding: 10
  },

  images: {
    height: 200,
    width: 200,
    borderRadius: 10,
    resizeMode: 'contain'
  },
  logoutBtn: {
    width: "60%",
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#d9534f",
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
})

export default App;
