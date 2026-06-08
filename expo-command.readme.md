@React Native Course Notes

Suraj Sir tldraw notes : https://www.tldraw.com/f/mQeviE3IZLi8quAUEoGja?d=v-1662.19783.3512.1743.page

#Mobile screen mirroring on laptop screen

```
https://scrcpy.org/
AirDroid cast
```

# To create App with latest sdk 55

```
npx create-expo-app@latest --template default@sdk-55
```

#Blank template screen

```
npx create-expo-app -t blank-typescript@sdk-55
```

# To Reset Project to Basic Level

```
npm run reset-project
```

# To Run React Native Project

```
npx expo start
```

---

react native dependency

for icons refere : https://ionic.io/ionicons/usage

---

https://reactnavigation.org/docs/getting-started

# To Run React Native Project

```
npx create-expo-app -t blank-typescript@sdk-55

npm install @react-navigation/native

npx expo install @react-navigation/native @react-navigation/native-stack

npx expo install react-native-screens react-native-safe-area-context
```

---

# Expo Router

https://docs.expo.dev/router/introduction/

```
npx create-expo-app@latest --template default@sdk-55

npm run reset-project

npx expo start




```

Expo Router is build on top of react navigation
it follows basdd routing aarchitecture

---

const themes = {
light: {
background: '#FFFFFF',
card: '#F5F5F5',
text: '#1A1A1A',
subtext: '#666666',
accent: '#6C63FF',
},
dark: {
background: '#121212',
card: '#1E1E1E',
text: '#FFFFFF',
subtext: '#AAAAAA',
accent: '#9D97FF',
},
};
