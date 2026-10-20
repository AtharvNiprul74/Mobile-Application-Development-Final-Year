# Mobile Application Development – Final Year

A collection of React Native practical experiments completed as part of the **B.Tech Computer Science Engineering (AI & ML)** course at **DKTE Society's Textile & Engineering Institute, Ichalkaranji**.

Each experiment lives in its own folder and is a self-contained React Native project, progressing from a basic first app to topics such as forms, navigation, state management, local storage, API integration, authentication, and device features.

---

## Table of Contents

- [Course Information](#course-information)
- [Technologies Used](#technologies-used)
- [Repository Structure](#repository-structure)
- [Experiment Summary](#experiment-summary)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Firebase Configuration Notes](#firebase-configuration-notes)
- [Testing](#testing)
- [Learning Objectives](#learning-objectives)
- [Author](#author)

---

## Course Information

| Item | Details |
| --- | --- |
| **Course Name** | Mobile Application Development |
| **Course Code** | 01AMP410 |
| **Program** | B.Tech Computer Science Engineering (AI & ML) |
| **Institute** | DKTE Society's Textile & Engineering Institute, Ichalkaranji |

---

## Technologies Used

The following technologies and concepts are used across this repository.

> **Note:** Not every experiment uses every technology listed below. Dependencies and setup requirements may vary by experiment, so check each project's `package.json` for its exact dependencies.

- **React Native**: cross-platform mobile app framework
- **JavaScript / TypeScript**: primary programming languages
- **Node.js**: JavaScript runtime and package management
- **Android Studio**: Android SDK, emulator, and build tools
- **React Hooks**: state and lifecycle management in functional components
- **Context API**: shared state across components
- **AsyncStorage**: local, persistent key-value storage
- **Axios**: HTTP client for API requests
- **Firebase Authentication**: user sign-in and account management
- **Firebase Cloud Messaging (FCM)**: push notifications

---

## Repository Structure

```text
Mobile-Application-Development-Final-Year/
├── Exp 1/
│   └── MyFirstApp/
├── Exp 2/
│   └── LoginForm/
├── Exp 3/
│   └── ListScroll/
├── Exp 4/
│   └── FormsApp/
├── Exp 5/
│   └── CartApp/
├── Exp 6/
│   └── NavigateApp/
├── Exp 7/
│   └── CartData/
├── Exp 8/
│   └── NotesCrud/
├── Exp 9/
│   └── APIaxios/
├── Exp 10/
│   └── AuthApp/
├── Exp 11/
│   └── DeviceFeaturesApp/
└── README.md
```

---

## Experiment Summary

| Exp. No. | Topic | Folder |
| :---: | --- | --- |
| 1 | First React Native App | [`Exp 1/MyFirstApp`](./Exp%201/MyFirstApp) |
| 2 | Login Form | [`Exp 2/LoginForm`](./Exp%202/LoginForm) |
| 3 | Scrollable Lists | [`Exp 3/ListScroll`](./Exp%203/ListScroll) |
| 4 | Forms Application | [`Exp 4/FormsApp`](./Exp%204/FormsApp) |
| 5 | Cart Application | [`Exp 5/CartApp`](./Exp%205/CartApp) |
| 6 | Screen Navigation | [`Exp 6/NavigateApp`](./Exp%206/NavigateApp) |
| 7 | Cart with Data Handling | [`Exp 7/CartData`](./Exp%207/CartData) |
| 8 | Notes App with CRUD Operations | [`Exp 8/NotesCrud`](./Exp%208/NotesCrud) |
| 9 | API Integration using Axios | [`Exp 9/APIaxios`](./Exp%209/APIaxios) |
| 10 | Authentication App | [`Exp 10/AuthApp`](./Exp%2010/AuthApp) |
| 11 | Device Features App | [`Exp 11/DeviceFeaturesApp`](./Exp%2011/DeviceFeaturesApp) |

---

## Prerequisites

Make sure the following are installed before running any experiment:

- [Node.js](https://nodejs.org/) (LTS version recommended) and npm
- [Git](https://git-scm.com/)
- [Android Studio](https://developer.android.com/studio) with:
  - Android SDK and platform tools
  - At least one Android Virtual Device (AVD), or a physical device for testing
- JDK (version compatible with your React Native version)
- Environment variables configured (`ANDROID_HOME`, and `platform-tools` added to `PATH`)

For complete environment setup, follow the official guide: [React Native – Set Up Your Environment](https://reactnative.dev/docs/environment-setup).

Verify your installation:

```bash
node -v
npm -v
git --version
adb --version
```

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AtharvNiprul74/Mobile-Application-Development-Final-Year.git
cd Mobile-Application-Development-Final-Year
```

### 2. Open an experiment folder

Replace the path with the experiment you want to run. Folder names containing spaces must be wrapped in quotes.

```bash
cd "Exp 1/MyFirstApp"
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the Metro bundler

```bash
npx react-native start
```

### 5. Run on Android

Start an emulator (or connect a physical device) and, in a new terminal inside the same experiment folder, run:

```bash
npx react-native run-android
```

> **Note:** Depending on how an experiment was created (for example, with Expo instead of the React Native CLI), the run commands may differ. Check the project's `package.json` scripts for the correct commands.

### Example: running Experiment 8

```bash
cd "Exp 8/NotesCrud"
npm install
npx react-native start
# In a second terminal:
npx react-native run-android
```

---

## Firebase Configuration Notes

Firebase setup applies only to the experiments that use it, mainly the authentication experiment (`Exp 10/AuthApp`) and the device features experiment (`Exp 11/DeviceFeaturesApp`) where push notifications are used. Other experiments do not require Firebase.

### General steps

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Add an **Android app** to the project using the experiment's Android package name. You can find it in `android/app/build.gradle` (`applicationId`).
3. Download the generated `google-services.json` file.
4. Place the file at:

```text
   <experiment-folder>/android/app/google-services.json
```

5. Confirm that the Google Services Gradle plugin is configured in the project's `android/build.gradle` and `android/app/build.gradle`, following the [React Native Firebase documentation](https://rnfirebase.io/).
6. Rebuild the app after adding or changing Firebase configuration.

### Firebase Authentication (`Exp 10/AuthApp`)

- Enable the required sign-in method (for example, **Email/Password**) in the Firebase Console under **Authentication → Sign-in method**.
- Make sure the app's package name matches the one registered in Firebase.

### Firebase Cloud Messaging (`Exp 11/DeviceFeaturesApp`)

- Firebase Cloud Messaging is used for push notifications. Follow the React Native Firebase messaging setup for your project's version.
- On Android 13 and above, the app must request the notification permission at runtime.
- Test notifications can be sent from the Firebase Console under **Engage → Messaging**.
- Push notifications are best verified on a physical device or an emulator image that includes Google Play services.

### Security note

`google-services.json` and any API keys are project-specific. Do not commit credentials from a project you want to keep private; use your own Firebase project when running these experiments.

---

## Testing

### Android emulator

1. Open **Android Studio → Device Manager** and create or start an AVD.
2. Confirm the emulator is detected:

```bash
   adb devices
```

3. Run the experiment:

```bash
   npx react-native run-android
```

For Firebase-based experiments, use an emulator image with **Google Play** services.

### Physical Android device

1. Enable **Developer options** and **USB debugging** on the device.
2. Connect the device via USB and accept the debugging prompt.
3. Verify the connection:

```bash
   adb devices
```

4. If the app cannot reach the Metro bundler, forward the port:

```bash
   adb reverse tcp:8081 tcp:8081
```

5. Run the experiment:

```bash
   npx react-native run-android
```

Experiments involving device features, such as hardware access or notifications, are best verified on a physical device.

### Common troubleshooting

```bash
# Clear Metro bundler cache
npx react-native start --reset-cache

# Clean the Android build
cd android
./gradlew clean
cd ..
```

On Windows, use `gradlew clean` instead of `./gradlew clean`.

---

## Learning Objectives

By completing these experiments, the following skills are developed:

- Setting up a React Native development environment for Android
- Building user interfaces with core React Native components and styling
- Creating and validating input forms
- Rendering and scrolling lists efficiently
- Managing component state with React Hooks
- Sharing state across components using the Context API
- Implementing navigation between screens
- Persisting data locally with AsyncStorage
- Performing CRUD operations in a mobile application
- Consuming REST APIs using Axios
- Implementing user authentication with Firebase Authentication
- Working with device features and push notifications using Firebase Cloud Messaging
- Testing and debugging apps on Android emulators and physical devices

---

## Author

**Atharv Niprul**

- GitHub: [@AtharvNiprul74](https://github.com/AtharvNiprul74)
- Program: B.Tech Computer Science Engineering (AI & ML)
- Institute: DKTE Society's Textile & Engineering Institute, Ichalkaranji

---

*This repository is maintained for academic and learning purposes.*