## 1. What is Chocolatey?

**Chocolatey** is a package manager for Windows that allows you to install, update, and uninstall software using simple command-line commands. It automates software management, making it faster, easier, and more reliable than downloading installers manually.

### Install Chocolatey

Run the following command in **PowerShell (as Administrator)**:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force;
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072;
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

---

## 2. What is React Native? Difference Between React and React Native

### React Native

**React Native** is an open-source framework developed by Meta that allows developers to build native mobile applications for Android and iOS using JavaScript and React. It uses native UI components, providing near-native performance while allowing most of the code to be shared across platforms.

### React vs React Native

| React | React Native |
| :----- | :----------- |
| Used to build **web applications**. | Used to build **Android and iOS mobile applications**. |
| Renders HTML elements like `<div>`, `<button>`, and `<h1>`. | Renders native components like `<View>`, `<Text>`, and `<Button>`. |
| Runs inside a **web browser**. | Runs as a **native mobile app** on Android and iOS devices. |
| Uses **CSS** for styling. | Uses **JavaScript objects (`StyleSheet`)** for styling. |

### Real-Time Example

Suppose you are building an **Amazon** application:

- **React:** Builds the **Amazon website** that users access through browsers like Chrome, Edge, or Firefox.
- **React Native:** Builds the **Amazon mobile app** that users install from the Play Store or App Store.

## 3. Where is React Native Used at Company Level?

Companies use **React Native** to develop **cross-platform mobile applications** for Android and iOS from a single codebase. This reduces development time, lowers maintenance costs, and ensures a consistent user experience across both platforms.

### Why Companies Choose React Native

-  Single codebase for both Android and iOS.
-  Faster development and easier maintenance.
-  Lower development cost compared to building separate native apps.
-  Code reuse between platforms.
-  Near-native performance for most business applications.

### Real-World Companies Using React Native

- **Meta** – Facebook and Instagram
- **Microsoft** – Microsoft Teams
- **Shopify** – Shopify Mobile
- **Discord** – Mobile App
- **Walmart** – Shopping App

### Real-Time Example

Suppose a company wants to launch a **food delivery app**.

- Instead of hiring separate **Android** and **iOS** teams,
- they build the app once using **React Native**.
- The same codebase is used to create apps for both platforms, reducing development time and cost.