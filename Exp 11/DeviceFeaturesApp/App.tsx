
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  Alert,
  ScrollView,
  PermissionsAndroid,
  Platform,
}
  from 'react-native';

import Geolocation from "react-native-geolocation-service";

import {
  getMessaging,
  getToken,
  requestPermission,
  onMessage,
  AuthorizationStatus,
} from '@react-native-firebase/messaging';

import {
  launchCamera,
  launchImageLibrary,
  type ImagePickerResponse,
} from 'react-native-image-picker';

const App = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [locationMessage, setLocationMessage] = useState("");

  useEffect(() => {
    const messagingInstance = getMessaging();

    const unsubscribe = onMessage(
      messagingInstance,
      async remoteMessage => {
        Alert.alert(
          remoteMessage.notification?.title || 'New Message',
          remoteMessage.notification?.body ||
          'A new message has arrived.',
        );
      },
    );

    return unsubscribe;
  }, []);

  // Function to capture a photograph
  const openCamera = async () => {
    try {
      const result: ImagePickerResponse = await launchCamera({
        mediaType: 'photo',
        cameraType: 'back',
        quality: 0.8,
      });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        Alert.alert(
          'Camera Error',
          result.errorMessage || result.errorCode,
        );
        return;
      }

      const uri = result.assets?.[0]?.uri;

      if (uri) {
        setImageUri(uri);
      }
    } catch {
      Alert.alert('Error', 'Unable to open camera.');
    }
  };

  const getCurrentLocation = async () => {
    try {
      // Request permission on Android
      if (Platform.OS === "android") {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          setLocationMessage("Location permission denied.");
          return;
        }
      }
      setLocationMessage("Getting current location...");
      Geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setLocationMessage("Location retrieved successfully.");
        },
        error => {
          setLocationMessage(
            `Unable to get location: ${error.message}`,
          );
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        },
      );
    } catch {
      setLocationMessage("An error occurred while requesting location.");
    }
  };

  // Function to select an image from the gallery
  const openGallery = async () => {
    try {
      const result: ImagePickerResponse =
        await launchImageLibrary({
          mediaType: 'photo',
          selectionLimit: 1,
          quality: 0.8,
        });

      if (result.didCancel) {
        return;
      }

      if (result.errorCode) {
        Alert.alert(
          'Gallery Error',
          result.errorMessage || result.errorCode,
        );
        return;
      }

      const uri = result.assets?.[0]?.uri;

      if (uri) {
        setImageUri(uri);
      }
    } catch {
      Alert.alert('Error', 'Unable to select image.');
    }
  };

  const requestNotificationPermission = async () => {
    try {
      const messagingInstance = getMessaging();

      const status = await requestPermission(messagingInstance);

      const enabled =
        status === AuthorizationStatus.AUTHORIZED ||
        status === AuthorizationStatus.PROVISIONAL;

      Alert.alert(
        'Notifications',
        enabled
          ? 'Notification permission granted.'
          : 'Notification permission was not granted.',
      );
    } catch (error) {
      Alert.alert(
        'Notification Error',
        'Unable to request notification permission.',
      );
    }
  };
  const getFCMToken = async () => {
    try {
      const messagingInstance = getMessaging();
      const token = await getToken(messagingInstance);

      console.log('FCM Registration Token:', token);

      Alert.alert(
        'FCM Token',
        'Token generated. Check the VS Code terminal.',
      );
    } catch (error) {
      Alert.alert('Error', 'Unable to retrieve FCM token.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Device Features App</Text>

      <View style={styles.button}>
        <Button
          title="Open Camera"
          onPress={openCamera}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Choose from Gallery"
          onPress={openGallery}
        />
      </View>

      {imageUri ? (
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <Text style={styles.message}>
          No image selected yet.
        </Text>
      )}
      <View style={styles.button}>
        <Button
          title="Get Current Location"
          onPress={getCurrentLocation}
        />
      </View>

      <Text style={styles.message}>
        {locationMessage}
      </Text>

      {location && (
        <View style={{ marginTop: 12 }}>
          <Text>
            Latitude: {location.latitude.toFixed(6)}
          </Text>

          <Text>
            Longitude: {location.longitude.toFixed(6)}
          </Text>
        </View>
      )}

      <View style={styles.button}>
        <Button
          title="Request Notification Permission"
          onPress={requestNotificationPermission}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Get FCM Token"
          onPress={getFCMToken}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FA',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1F2937',
  },

  button: {
    width: '100%',
    marginBottom: 16,
  },

  image: {
    width: 250,
    height: 250,
    marginTop: 20,
    borderRadius: 12,
  },

  message: {
    marginTop: 20,
    color: '#555555',
  },
});

export default App;
