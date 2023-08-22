import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BasicHealthInfo from '../screens/auth/BasicHealthInfo';
import ForgotPassword from '../screens/auth/ForgotPassword';
import Login from '../screens/auth/Login';
import OtpVerification from '../screens/auth/OtpVerification';
import ProfileSetup from '../screens/auth/ProfileSetup';
import ResetPassword from '../screens/auth/ResetPassword';
import SignUp from '../screens/auth/SignUp';
import SplashScreen from '../screens/auth/SplashScreen';
const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="OtpVerification" component={OtpVerification} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen name="BasicHealthInfo" component={BasicHealthInfo} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
