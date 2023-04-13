import React from 'react';
import {
  GanerateQR,
  HomeScreen,
  QrScanner,
  ScanQR,
  SplashScreen,
} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerTitleStyle: {color: 'white', fontSize: 22},
        headerStyle: {backgroundColor: 'green'},
      }}>
      <Stack.Group>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          headerMode="screen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: 'Home'}}
        />
        <Stack.Screen
          name="QrScanner"
          component={QrScanner}
          options={{headerTitle: 'Qr Scanner', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="ScanQR"
          component={ScanQR}
          options={{headerTitle: 'Scan QR', headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="GanerateQR"
          component={GanerateQR}
          options={{headerTitle: 'Ganerate QR', headerTitleAlign: 'center'}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default Routers;
