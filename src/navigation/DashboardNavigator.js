import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import Headers from '../components/Headers';
import {COLORS} from '../constants';
import CareTeam from '../screens/dashboard/CareTeam';
import AllChats from '../screens/dashboard/AllChats';
import Home from '../screens/dashboard/Home';
import Learn from '../screens/dashboard/Learn';
import Meet from '../screens/dashboard/Meet';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrics';

const Tab = createBottomTabNavigator();
function DashboardNavigator({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Headers />
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: COLORS.PRIMARY,
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: 'white',
            height: verticalScale(55),
            paddingBottom: 10,
            width: horizontalScale(400),
            marginLeft: moderateScale(15),
            bottom: moderateScale(4),
            borderRadius: moderateScale(50),
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOffset: {width: 0, height: 1},
            shadowOpacity: 0.8,
            shadowRadius: moderateScale(5),
          },
        }}>
        <Tab.Screen name="CareTeam" component={CareTeam} />
        <Tab.Screen name="Meet" component={Meet} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AllChats" component={AllChats} />
        <Tab.Screen name="Learn" component={Learn} />
      </Tab.Navigator>
    </View>
  );
}
export default DashboardNavigator;
