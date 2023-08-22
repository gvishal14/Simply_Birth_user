import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../constants';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
interface Props {
    planType: string,
    handleToggle: Function,
    toggleCard: Boolean,
    allData: any,
}
export default function Cards(props: Props) {
    console.log("allData", props.allData.title)
    return (
        <View style={{ ...styles.container, borderWidth: props.toggleCard == props.allData.id ? 2 : 0, borderColor: props.toggleCard == props.allData.id ? 'rgba(216, 119, 119, 1)' : 'rgba(176, 176, 176, 0)' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <Text style={styles.planText}>{props.allData.title}</Text>
                <Text style={styles.titleText}>{props.allData.description}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Text style={styles.priceText}>{props.allData.price}</Text>
                <Text style={{ ...styles.priceText, color: 'rgba(0, 0, 0, 0.75)' }}>{props.planType}</Text>
            </View>
            <View style={{ marginBottom: 5 }}>

                {props.toggleCard == props.allData.id
                    ? props.allData.moreDetails.map((item) => <Text>{'\u25CF'}{' '}{item.title}</Text>)
                    : props.allData.moreDetails.slice(0, 2).map((item) => <Text>{'\u25CF'}{' '}{item.title}</Text>)}
                <TouchableOpacity
                    onPress={() => props.handleToggle(props.allData.id)}
                    style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: COLORS.PRIMARY }}>See all benefits</Text>
                    <Image source={IMAGES.DROPDOWN1} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: horizontalScale(20),
        paddingVertical: verticalScale(10),
        margin: moderateScale(8),
        backgroundColor: 'rgba(255, 255, 255, 1)',
        //height: verticalScale(170),
        width: horizontalScale(380),
        borderRadius: moderateScale(25),
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
    },
    planText: {
        fontFamily: FONTS.w500,
        fontSize: moderateScale(18),
        color: 'rgba(0, 0, 0, 0.75)',
    },
    titleText: {
        fontFamily: FONTS.w700,
        fontSize: moderateScale(22),
        color: 'rgba(216, 119, 119, 1)',
    },
    priceText: {
        fontSize: moderateScale(22),
        fontFamily: FONTS.w500,
        color: COLORS.PRIMARY
    }
})