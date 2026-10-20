import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

type Screen = "signup" | "signin" | "reset";

export default function App() {
  const [screen, setScreen] = useState<Screen>("signup");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email.trim() || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email.trim(), password);
      setUserEmail(result.user.email ?? email.trim());
      setPassword("");
      setConfirmPassword("");
      Alert.alert("Success", "Account created successfully!");
    } catch (error: any) {
      Alert.alert("Sign-Up Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignIn = async () => {
    if (!email.trim() || !password) {
      Alert.alert("Error", "Enter your email and password.");
      return;
    }
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email.trim(), password);
      setUserEmail(result.user.email ?? "");
      setPassword("");
      Alert.alert("Success", "Login successful!");
    } catch (error: any) {
      Alert.alert("Login Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePasswordReset = async () => {
    if (!email.trim()) {
      Alert.alert("Error", "Enter your registered email address.");
      return;
    }
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email.trim());
      Alert.alert("Password Reset", "A password-reset email has been sent.");
    } catch (error: any) {
      Alert.alert("Reset Failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUserEmail("");
      setEmail("");
      setPassword("");
      setScreen("signin");
      Alert.alert("Success", "You have signed out.");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  if (auth.currentUser) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>You are successfully authenticated.</Text>
        <Text style={styles.email}>{userEmail || auth.currentUser.email}</Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Student Authentication</Text>
        <Text style={styles.subtitle}>Firebase Authentication Demo</Text>

        <View style={styles.tabs}>
          <TouchableOpacity style={[styles.tab, screen === "signup" && styles.activeTab]} onPress={() => setScreen("signup")}>
            <Text>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, screen === "signin" && styles.activeTab]} onPress={() => setScreen("signin")}>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        {screen !== "reset" && (
          <>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </>
        )}

        {screen === "signup" && (
          <>
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </>
        )}

        <TouchableOpacity
          style={[styles.button, loading && styles.disabledButton]}
          disabled={loading}
          onPress={screen === "signup" ? handleSignUp : screen === "signin" ? handleSignIn : handlePasswordReset}
        >
          <Text style={styles.buttonText}>
            {loading ? "Please wait..." : screen === "signup" ? "Create Account" : screen === "signin" ? "Login" : "Reset Password"}
          </Text>
        </TouchableOpacity>

        {screen === "signin" && (
          <TouchableOpacity style={styles.linkButton} onPress={() => setScreen("reset")}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
        )}

        {screen === "reset" && (
          <TouchableOpacity style={styles.linkButton} onPress={() => setScreen("signin")}>
            <Text style={styles.link}>Back to Login</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB", justifyContent: "center" },
  content: { flexGrow: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 26, fontWeight: "bold", color: "#243B64", textAlign: "center", marginBottom: 8 },
  subtitle: { fontSize: 15, color: "#606B7A", textAlign: "center", marginBottom: 24 },
  tabs: { flexDirection: "row", marginBottom: 20 },
  tab: { flex: 1, padding: 13, alignItems: "center", backgroundColor: "#E2E8F0", borderRadius: 8, marginHorizontal: 4 },
  activeTab: { backgroundColor: "#BBD4FF" },
  label: { fontSize: 15, fontWeight: "600", marginBottom: 6, color: "#243B64" },
  input: { backgroundColor: "#FFFFFF", borderWidth: 1, borderColor: "#CCD5E0", borderRadius: 8, padding: 13, marginBottom: 16, fontSize: 15 },
  button: { backgroundColor: "#2457C5", padding: 15, borderRadius: 8, alignItems: "center", marginTop: 8 },
  disabledButton: { opacity: 0.6 },
  buttonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
  linkButton: { alignItems: "center", marginTop: 18 },
  link: { color: "#2457C5", fontWeight: "600" },
  email: { fontSize: 16, textAlign: "center", marginVertical: 20 },
});