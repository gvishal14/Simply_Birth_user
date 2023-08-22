import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
// import Icon from 'react-native-vector-icons/Ionicons'
import {COLORS, IMAGES} from '../../../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../utils/Metrics';
import AppTextInputSideways from '../../../../components/AppTextInputSideways';
import AppButton from '../../../../components/AppButton';
import BackHeader from '../../../../components/BackHeader';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BackHeader title="Edit Profile" />
      <Text style={styles.textarea}>Your Photo</Text>

      <View style={{flex: 0.4}}>
        <TouchableOpacity>
          <Image
            style={{
              height: verticalScale(95),
              width: verticalScale(95),
              borderRadius: 50,
              backgroundColor: '#D9D9D980',
              position: 'absolute',
            }}
            source={{uri: 'https://i.pravatar.cc/300'}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.imgSearch}>
            <Image
              style={{
                height: verticalScale(18),
                width: verticalScale(18),
                justifyContent: 'center',
                marginTop: 6,
                marginLeft: 7,
              }}
              source={IMAGES.IMAGE_PICKER}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <AppTextInputSideways
          title="First Name"
          placeholder="Enter your name"
        />
        <AppTextInputSideways title="Age" placeholder="Enter your age" />
        <AppTextInputSideways
          title="Address"
          placeholder="Enter your address"
        />
        <AppTextInputSideways title="City" placeholder="Enter your city" />
        <AppTextInputSideways title="State" placeholder="Enter your state" />
        <AppButton
          label="Update"
          onPress={() =>
            navigation.navigate('DashboardNavigator', {screen: 'OpenProfile'})
          }
        />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },
  imgSearch: {
    backgroundColor: '#F5ABAC',
    height: 30,
    width: 30,
    borderRadius: 50,
    marginStart: 60,
  },
  textarea: {
    fontSize: 20,
    paddingVertical: verticalScale(15),
  },
  textPlan: {
    fontSize: 20,
    paddingLeft: 20,
    // paddingVertical: verticalScale(15),
  },
});
