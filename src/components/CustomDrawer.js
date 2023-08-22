import {Image, StyleSheet, View, Pressable} from 'react-native';
import React from 'react';
import {COLORS, IMAGES} from '../constants';
import {moderateScale} from '../utils/Metrics';
import DrawerProps from './DrawerProps';
import Profile from './Profile';
import BackHeader from './BackHeader';
const CustomDrawer = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.2, backgroundColor: COLORS.PRIMARY}}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{alignItems: 'flex-end'}}>
          <Image style={styles.crossImage} source={IMAGES.CROSS} />
        </Pressable>
        <View style={styles.profile}>
          <Profile height={moderateScale(130)} width={moderateScale(130)} />
        </View>
      </View>
      <View style={{flex: 0.8, ...styles.description}}>
        <DrawerProps title="Home" onPress={() => navigation.navigate('Home')} />
        <DrawerProps
          title="Invitations"
          onPress={() => navigation.navigate('Invitation')}
        />
        <DrawerProps
          title="Book home visit"
          onPress={() => navigation.navigate('HomeVisit')}
        />
        <DrawerProps
          title="About us"
          onPress={() => navigation.navigate('AboutUs')}
        />
        <DrawerProps title="FAQs" onPress={() => navigation.navigate('FAQs')} />
        <DrawerProps
          title="Terms & Conditions"
          onPress={() => navigation.navigate('TermsAndConditions')}
        />
        <DrawerProps
          title="How It Works"
          onPress={() => navigation.navigate('HowItWorks')}
        />
        <DrawerProps
          title="Logout"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Auth', params: {screen: 'Login'}}],
            })
          }
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  crossImage: {
    top: moderateScale(20),
    right: moderateScale(20),
  },
  profile: {
    position: 'relative',
    zIndex: -100,
    top: moderateScale(50),
    padding: 20,
  },
  description: {
    top: moderateScale(80),
  },
});
