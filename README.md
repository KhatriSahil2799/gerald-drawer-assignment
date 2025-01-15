# React Native Navigation Project with Drawer and Tab Navigation

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
</p>

## Overview

This project demonstrates a **React Native** application built with **Expo**, featuring a **Drawer Navigator** as the primary navigation. It contains a **Bottom Tab Navigator** and nested **Stack Navigators**, with animations powered by **react-native-reanimated**.

### Please find the attached video for your reference, recorded in debug mode

https://github.com/user-attachments/assets/736e3868-05b8-48a9-bbc8-9692ed8daea4



### Navigation Structure:

- **Drawer Menu** (Parent Component)
  - **Bottom Tab Navigator**
    - **Home (Stack Navigator)**:
      - Screen 1
      - Screen 2
    - **Contact**

---

## Features

1. **Custom Animated Drawer**:

   - Built using **react-native-reanimated** for smooth and dynamic animations.
   - Customizable width and appearance based on screen size.
   - Responsive and visually appealing design.

2. **Bottom Tab Navigation**:

   - Includes:
     - **Home**: A stack navigator with nested screens.
     - **Contact**: A standalone screen.
   - Customized tab bar icons using **react-native-vector-icons**.

3. **Stack Navigation**:

   - **Home** stack includes:
     - **Screen 1**: Features a button to navigate to **Screen 2**.
     - **Screen 2**: A secondary screen in the stack.

4. **Expo Compatibility**:

   - Built with **Expo**, providing seamless integration and enhanced development capabilities.

5. **Optimized Codebase**:

   - Modularized components for maintainability.
   - TypeScript types for better type safety and error handling.

6. **Responsive Design**:
   - Drawer dynamically adapts to screen dimensions using `useWindowDimensions`.

---

## Installation and Setup

### Prerequisites

Ensure the following tools are installed on your system:

- Node.js
- Yarn or npm
- Expo CLI

### Steps

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. Install dependencies:
  
    ```bash
    yarn install
    # or
    npm install
    ```

3. Start the Expo server:
    ```bash
    yarn install
    # or
    npm install
    ```
4. Run the app on your device or emulator:
    Scan the QR code using the Expo Go app.
    Or use the following commands:
    ```bash
    yarn android   # For Android
    yarn ios       # For iOS (requires macOS)
    ```

## Folder Structure
    src/
    ├── components/         # Custom UI components (e.g., Animated Drawer)
    ├── navigation/         # Navigation configuration (Drawer, Tabs, Stacks)
    ├── screens/            # App screens (Screen1, Screen2, Contact)
    ├── utils/              # Utility functions and constants
    └── App.tsx             # Entry point


## Tools and Libraries Used
    expo:                             Development environment for React Native.
    @react-navigation/native:         Navigation library.
    react-native-reanimated:          Smooth animations for the custom drawer.
    @react-navigation/drawer:         Drawer navigation integration.
    @react-navigation/bottom-tabs:    Bottom tab navigation.
    @react-navigation/native-stack:   Stack navigation.
    react-native-vector-icons:        Icon library.




