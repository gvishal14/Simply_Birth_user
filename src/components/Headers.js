import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale, verticalScale} from '../utils/Metrics';
import Profile from './Profile';
import {IMAGES} from '../constants';
import {useNavigation} from '@react-navigation/native';
const Headers = props => {
  const {onPress} = props;
  const {openDrawer, navigate} = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: moderateScale(15),
        backgroundColor: 'white',
      }}>
      <Pressable onPress={() => openDrawer()}>
        <Image source={IMAGES.DRAWER} />
      </Pressable>
      <Image
        style={{
          height: verticalScale(61),
          width: horizontalScale(77),
          marginLeft: moderateScale(30),
        }}
        source={IMAGES.LOGO}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Pressable
          onPress={() => {
            navigate('DashboardNavigator', {screen: 'Notification'});
          }}>
          <Image
            style={{
              marginRight: moderateScale(25),
              top: 10,
            }}
            source={IMAGES.BELL}
          />
        </Pressable>
        <Pressable
          onPress={() =>
            navigate('DashboardNavigator', {screen: 'OpenProfile'})
          }>
          <Profile />
        </Pressable>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({});
