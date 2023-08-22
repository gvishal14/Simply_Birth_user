import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics'

interface Props {
    title: string,
    onPress?: () => void,
    height?: number,
    width?: number
}
export default function Profile(props: Props) {

    return (
        <View style={{
        }}>
            <Image source={{ uri: 'https://i.pravatar.cc' }} style={{
                height: props.height ? props.height : moderateScale(50),
                width: props.width ? props.width : moderateScale(50),
                borderRadius: moderateScale(100),
                resizeMode: 'contain'
            }} />
        </View>
    )
}

const styles = StyleSheet.create({})