import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONTS, IMAGES } from '../constants';
import { horizontalScale, moderateScale, verticalScale } from '../utils/Metrics';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}
export default function BackHeader(props: Props) {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() =>
        goBack('Drawer')
      }>
        <Image
          source={IMAGES.BACK_ARROW}
          style={styles.backArrowImg}
        />
      </Pressable>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', columnGap: moderateScale(20), alignItems: 'center', marginHorizontal: moderateScale(10) },
  backArrowImg: { width: horizontalScale(11), height: verticalScale(20) },
  titleText: { fontSize: moderateScale(26), fontFamily: FONTS.w600, color: COLORS.BLACK }
});
