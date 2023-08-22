import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View, ImageSourcePropType, Pressable, Image } from 'react-native';
import { FONTS } from '../constants';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';

interface Props extends TextInputProps {
    title: string,
    rightImage?: ImageSourcePropType,
    onPress?: () => void,
    width: number
}

export default function AppTextInput(props: Props) {
    return (
        <View style={{ marginVertical: verticalScale(10) }}>
            <Text style={{ fontSize: moderateScale(20), fontFamily: FONTS.w300 }}>{props.title}</Text>
            <TextInput placeholderTextColor={'#37354166'} style={{
                minHeight: verticalScale(45), paddingHorizontal: horizontalScale(10),
                width: props.width ? props.width : horizontalScale(400),
                marginTop: verticalScale(5),
                fontSize: moderateScale(18), borderRadius: moderateScale(5), backgroundColor: '#F5F5F5'
            }} {...props} />
            <TextInput placeholderTextColor={'#37354166'} style={{
                marginTop: verticalScale(5),
                fontSize: moderateScale(18),
                flex: 1,
                fontFamily: FONTS.w400,
            }} {...props} />
        </View>
    );
}

const styles = StyleSheet.create({

});