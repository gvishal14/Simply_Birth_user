import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { horizontalScale, verticalScale, moderateScale } from '../utils/Metrics'
import { FONTS } from '../constants'
interface Props {
    title: string,
    onPress?: (() => void)
}
export default function DrawerProps(props: Props) {
    return (
        <View style={{ marginHorizontal: horizontalScale(10) }}>
            <Pressable onPress={props.onPress}>
                <Text style={styles.title}>{props.title}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    title: {
        fontFamily: FONTS.w400,
        fontSize: moderateScale(24),
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: moderateScale(20)
    }
})