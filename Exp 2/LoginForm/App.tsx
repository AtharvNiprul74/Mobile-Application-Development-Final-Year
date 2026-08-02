/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { useState } from 'react';
import { Alert, Button, Image, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View } from 'react-native';
import {
    SafeAreaProvider,
    SafeAreaView,
    useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <AppContent />
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
    },
    card: {
        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid',
        margin: 10,
        marginTop: 240,
        padding: 20
    },
    inputBox: {
        margin: 8,
        borderWidth: 1,
        borderStyle: 'dashed'
    }
});

function AppContent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [counter, setCounter] = useState(0);

    const handleSubmit = () => {
        if (email.trim() && password.trim()) {
            setIsSubmitted(true)
        }
        else {
            Alert.alert("Warning", "Fields Cannot be empty....")
        }
    }

    // welcome to page
    // return (
    //     <>
    //         <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
    //             <Text style={{ textAlign: 'center', marginTop: 200, fontSize: 18, color: 'aqua' }}>Welcome To React Native Application</Text>
    //             <Text style={{ textAlign: 'center', fontSize: 17, fontStyle: 'italic', color: 'white' }}>Atharv Anil Niprul</Text>
    //         </SafeAreaView>
    //     </>
    // )

    //login page
    /*
    if (isSubmitted) {
        return (
            <>
                <SafeAreaView style={styles.safeArea}>
                    <View style={styles.container}>
                        <View style={styles.card}>
                            <Text style={{ textAlign: 'center', fontSize: 25, color: 'green' }}>
                                Data Submitted Successfully!
                            </Text>
                            <Text style={{ textAlign: 'center', marginTop: 10 }}>
                                Email: {email}
                            </Text>
                            <Button title="Go Back" onPress={() => setIsSubmitted(false)} />
                        </View>
                    </View>
                </SafeAreaView>
            </>
        );
    }/*


    /*return (
        <>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={{ textAlign: 'center', fontSize: 25 }}>Login Form</Text>
                        <TextInput placeholder='Enter Email Address' onChangeText={setEmail} value={email} style={styles.inputBox}></TextInput>
                        <TextInput placeholder='Enter Password' onChangeText={setPassword} value={password} style={styles.inputBox} secureTextEntry></TextInput>
                        <Button title='Submit Form' onPress={handleSubmit} />
                    </View>
                </View>
            </SafeAreaView>
        </>
    );*/

    //student card
    // return (
    //     <>
    //         <SafeAreaView style={{ flex: 1, justifyContent: 'center', backgroundColor: '#eee' }}>
    //             <View style={{ margin: 20, padding: 20, borderWidth: 2, borderStyle: 'dashed', borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
    //                 <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb6HgNgoYGJL25gIM-4YoPyN7_G7-UgOmoFbk8dzDOWw&s=10' }} style={{ width: 110, height: 110, borderRadius: 55 }}></Image>
    //                 <View style={{ borderWidth: 2, padding: 15, width: 180 }}>
    //                     <Text style={{ fontSize: 17, marginVertical: 8 }}>Name:Atharv</Text>
    //                     <Text style={{ fontSize: 17, marginVertical: 8 }}>PRN:24UAM310</Text>
    //                     <Text style={{ fontSize: 17, marginVertical: 8 }}>Branch:CSE(Ai/Ml)</Text>
    //                     <Text style={{ fontSize: 17, marginVertical: 8 }}>Year:Final Year</Text>
    //                 </View>
    //             </View>
    //         </SafeAreaView>
    //     </>
    // )

    //Simple Counter App
    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f2f2f2',
                }}>

                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: 'bold',
                        marginBottom: 25,
                    }}>
                    Counter App
                </Text>

                <View
                    style={{
                        width: 170,
                        height: 170,
                        borderRadius: 85,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        elevation: 8,
                        marginBottom: 35,
                    }}>
                    <Text
                        style={{
                            fontSize: 55,
                            fontWeight: 'bold',
                        }}>
                        {counter}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                    }}>

                    <TouchableOpacity
                        onPress={() => setCounter(counter - 1)}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: '#ff5252',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 15,
                        }}>

                        <Text
                            style={{
                                color: 'white',
                                fontSize: 35,
                                fontWeight: 'bold',
                            }}>
                            -
                        </Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => setCounter(counter + 1)}
                        style={{
                            width: 70,
                            height: 70,
                            borderRadius: 35,
                            backgroundColor: '#2196F3',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginHorizontal: 15,
                        }}>

                        <Text
                            style={{
                                color: 'white',
                                fontSize: 35,
                                fontWeight: 'bold',
                            }}>
                            +
                        </Text>

                    </TouchableOpacity>

                </View>

            </SafeAreaView>
        </>
    )

}

export default App;
