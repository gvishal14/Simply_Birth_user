import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Payment from '../screens/dashboard/Payment';
import Notifications from '../screens/dashboard/Notifications';
import OpenProfile from '../screens/dashboard/Profile/OpenProfile';
import EditProfile from '../screens/dashboard/Profile/EditProfile';
import RecentChats from '../screens/dashboard/RecentChats';
import CareGiverAppointment from '../screens/dashboard/CareGiverAppointment';

const Stack = createNativeStackNavigator();
function DashboardStackNavigatior() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Notification" component={Notifications} />
      <Stack.Screen name="OpenProfile" component={OpenProfile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="RecentChats" component={RecentChats} />
      <Stack.Screen
        name="CareGiverAppointment"
        component={CareGiverAppointment}
      />
    </Stack.Navigator>
  );
}
export default DashboardStackNavigatior;

const styles = StyleSheet.create({});
