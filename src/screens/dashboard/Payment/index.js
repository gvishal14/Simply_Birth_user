import {Image, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from '../styles';
import AppTextInput from '../../../components/AppTextInput';
import AppButton from '../../../components/AppButton';
import {COLORS, FONTS, IMAGES} from '../../../constants';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../../../utils/Metrics';
import Background from '../../../components/Background';
export default function Payment({navigation}) {
  const [visibleModal, setVisiblemodal] = useState(false);
  const showModal = () => {
    setVisiblemodal(true);
    setTimeout(() => {
      setVisiblemodal(false);
      navigation.navigate('Home');
    }, 1000);
  };
  return (
    <View
      style={{
        ...styles.container,
        paddingVertical: verticalScale(40),
      }}>
      <Background />
      <Text style={styles.header}>Payment detail</Text>
      <AppTextInput
        title="Card Holder Name"
        placeholder="Enter card holder name"
      />
      <AppTextInput title="Card Number" placeholder="Enter your card number " />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <AppTextInput
            title="Expiry Date"
            placeholder="Select date"
            width={horizontalScale(203)}
          />
        </View>
        <AppTextInput
          title="CVV"
          placeholder="Enter CVV "
          width={horizontalScale(166)}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontFamily: FONTS.w400,
            fontSize: 24,
            color: 'rgba(55, 53, 65, 1)',
          }}>
          Total payment{' '}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.w800,
            fontSize: 26,
            color: COLORS.SECONDARY,
          }}>
          $100
        </Text>
      </View>
      <AppButton label="Pay" onPress={() => showModal()} />
      <Modal visible={visibleModal} transparent={true} animationType="fade">
        <Pressable
          onPress={() => {
            showModal(), navigation.navigate('Home');
          }}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              margin: moderateScale(8),
              borderColor: COLORS.PRIMARY,
              borderWidth: moderateScale(1),
              borderRadius: moderateScale(10),
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: {width: 0, height: 1},
              shadowOpacity: 0.8,
              shadowRadius: 5,
              height: verticalScale(190),
              width: horizontalScale(348),
            }}>
            <View
              style={{
                backgroundColor: COLORS.PRIMARY,
                height: verticalScale(120),
                width: horizontalScale(120),
                borderRadius: moderateScale(100),
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                top: -40,
                left: horizontalScale(110),
              }}>
              <Image source={IMAGES.TICK} />
            </View>

            <Text
              style={{
                color: COLORS.PRIMARY,
                textAlign: 'center',
                fontFamily: FONTS.w700,
                fontSize: moderateScale(30),
              }}>
              Payment Successful!
            </Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}
