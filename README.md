# Animated Drawer 
Built using React Navigation and Reanimated, powered by React Native - (0.76.3) New Architecture

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
</p>

## Overview

This project demonstrates a **React Native** application built with **Expo**, featuring a **Drawer Navigator** as the primary navigation. It contains a **Bottom Tab Navigator** and nested **Stack Navigators**, with animations powered by **react-native-reanimated**.

### Demo - Recorded in DEBUG Mode

https://github.com/user-attachments/assets/8c907ab0-e64f-48f2-9d0a-9ac681c3a60f


# Navigation Structure

- **Drawer Menu** (Parent Component)
  - **Bottom Tab Navigator**
    - **Home (Stack Navigator)**:
      - Screen 1
      - Screen 2
    - **Contact**

---

## Key Features

### 1. **Custom Animated Drawer**
- The `AnimatedCustomDrawer` leverages the `useDrawerProgress` shared value for animations, interpolating styles to animate both the drawer and the Bottom Tab stack seamlessly.
- Built using **react-native-reanimated** for smooth and dynamic animations.
- Fully customizable width and appearance based on screen size.
- Offers a responsive and visually appealing design.

### 2. **Bottom Tab Navigation**
- Includes:
  - **Home**: A stack navigator with nested screens.
  - **Contact**: A standalone screen.
- Tab bar icons are customized using **react-native-vector-icons**.

### 3. **Stack Navigation**
- The **Home** stack includes:
  - **Screen 1**: Features a button to navigate to **Screen 2**.
  - **Screen 2**: Serves as the secondary screen in the stack.

### 4. **Expo Integration**
- Built with **Expo**, ensuring seamless integration and enhanced developer capabilities.

### 5. **Optimized Codebase**
- Modularized components for better maintainability.
- Utilizes TypeScript types to enhance type safety and minimize errors.

### 6. **Responsive Design**
- The drawer dynamically adapts to screen dimensions using `useWindowDimensions` and `useSafeAreaViewInsets`.

---


## Folder Structure (Key Highlights)

- **`src/components/`**: Custom UI components (e.g., **Animated Drawer**).  
- **`src/navigation/`**: Handles navigation (Drawer, Tabs, Stacks).  
- **`src/screens/`**: App screens (**Screen1**, **Screen2**, **Contact**).  
- **`src/utils/`**: Utility functions and constants.  
- **`App.tsx`**: The **entry point** of the application.

---

## Tools and Libraries Used

### Core Tools
- **Expo** (`52.0.16`): Development environment for React Native.  
- **React Native** (`0.76.3`): Framework for building mobile apps.

### Navigation Libraries
- **@react-navigation/native**: Core navigation library.  
- **@react-navigation/drawer**: For drawer navigation.  
- **@react-navigation/bottom-tabs**: For bottom tab navigation.  
- **@react-navigation/native-stack**: For stack navigation.

### Animation and Icon Libraries
- **react-native-reanimated**: Smooth animations for custom components (e.g., the drawer).  
- **react-native-vector-icons**: Icon library for custom tab bar and UI design.




---

## Installation and Setup

### Prerequisites
- Node.js
- Yarn or npm
- Expo CLI

### Steps
1. Clone the repository.
2. Install dependencies:
    ```bash
    yarn install
    # or
    npm install
    ```
3. Run the app:
    - Scan the QR code in the Expo Go app.
    - Or use:
      ```bash
      yarn android   # For Android
      yarn ios       # For iOS (macOS required)
      ```






