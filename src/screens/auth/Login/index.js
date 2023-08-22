import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppTextInput from '../../../components/AppTextInput';
import {horizontalScale} from '../../../utils/Metrics';
import styles from '../styles';
import CheckBox from 'react-native-check-box';
import Background from '../../../components/Background';
import {IMAGES} from '../../../constants';
export default function Login() {
  const {navigate, reset} = useNavigation();
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <Background />
      <Image style={styles.logo} source={IMAGES.LOGO} />

      <Text style={styles.header}>Login</Text>

      <AppTextInput title="Email" placeholder="Enter your email id" />
      <AppTextInput title="Password" placeholder="Enter your password" />

      <View style={styles.forgotCont}>
        <Pressable
          onPress={() => setToggleCheckBox(!toggleCheckBox)}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            isChecked={toggleCheckBox}
            checkedImage={
              <Image
                source={require('../../../assets/images/checked_square.png')}
              />
            }
            unCheckedImage={
              <Image
                source={require('../../../assets/images/unchecked_square.png')}
              />
            }
            onClick={() => setToggleCheckBox(!toggleCheckBox)}
          />
          <Text style={styles.rememberMe}>Remember me</Text>
        </Pressable>
        <Text
          onPress={() => navigate('ForgotPassword')}
          style={styles.forgotPass}>
          Forgot Password?
        </Text>
      </View>

      <AppButton
        onPress={() => reset({routes: [{name: 'Drawer'}]})}
        label="Login"
      />

      <View style={styles.dividerCont}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>or login using</Text>
        <View style={styles.divider} />
      </View>
      <View style={styles.socialLogin}>
        <Pressable>
          <Image source={IMAGES.GOOGLE} />
        </Pressable>
        <Pressable>
          <Image source={IMAGES.FACEBOOK} />
        </Pressable>
        <Pressable>
          <Image source={IMAGES.APPLE} />
        </Pressable>
      </View>
      <View style={{flex: 1}} />
      <Text style={{alignSelf: 'center'}} onPress={() => navigate('SignUp')}>
        New member? <Text style={{color: '#D87777'}}>Signup</Text>
      </Text>
    </View>
  );
}
