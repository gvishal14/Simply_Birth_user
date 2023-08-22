import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    Image, Text, View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppTextInput from '../../../components/AppTextInput';
import styles from '../styles';


export default function SignUp() {
    const { navigate, goBack } = useNavigation()

    function onSubmit() {
        navigate('OtpVerification')
    }

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image style={styles.logo} source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>Signup</Text>

            <AppTextInput placeholder="Enter your name" title='Name' />
            <AppTextInput placeholder="Enter your email" title='Email' />
            <AppTextInput placeholder="Enter your phone number" title='Phone Number' />
            <AppButton label='Sign Up' onPress={onSubmit} />

            <View style={styles.dividerCont}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>or signup using</Text>
                <View style={styles.divider} />
            </View>

            <View style={{ flex: 1 }} />
            <Text style={{ alignSelf: 'center' }} onPress={() => goBack()}>
                Already a member? <Text style={{ color: '#D87777' }}>Login</Text>
            </Text>
        </View>
    );
}