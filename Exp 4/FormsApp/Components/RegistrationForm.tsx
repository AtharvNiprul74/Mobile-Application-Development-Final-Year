import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function RegistrationForm() {

    const [name, setName] = useState("")
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [validForm, setValidForm] = useState(false)


    const registerUser = () => {
        if (!name.trim() || !userName.trim() || !email.trim() || !password.trim() || !confirmPass.trim()) {
            Alert.alert("Warning", "Please Enter All Fields...")
        }
        else if (password !== confirmPass) {
            Alert.alert("Error", "Confirmed Password not matched...")
        }
        else {
            setValidForm(true)
        }
    }

    if (validForm) {

    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.pane}>

                <View style={styles.card}>

                    <Text style={styles.header}>Registration Form</Text>

                    <TextInput style={styles.textInput} placeholder="Enter Full Name" onChangeText={setName} />

                    <TextInput style={styles.textInput} placeholder="Enter Username" onChangeText={setUserName} />

                    <TextInput style={styles.textInput} placeholder="Enter Email" keyboardType="email-address" onChangeText={setEmail} />

                    <TextInput style={styles.textInput} placeholder="Enter Password" secureTextEntry onChangeText={setPassword} />

                    <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry onChangeText={setConfirmPass} />

                    <Pressable style={styles.btn} onPress={registerUser}>
                        <Text style={styles.btnText}>Register</Text>
                    </Pressable>

                </View>

            </View>
        </SafeAreaView>
    );
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
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    header: {
        fontSize: 30,
        marginVertical: 10
    },

    textInput: {
        borderWidth: 2,
        borderStyle: 'dashed',
        width: "80%",
        height: 50,
        borderRadius: 10,
        marginVertical: 8,
        paddingHorizontal: 10
    },

    btn: {
        width: "65%",
        height: 50,
        borderRadius: 15,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0275d8"
    },

    btnText: {
        fontSize: 18,
        color: 'white'
    }
});

export default RegistrationForm;