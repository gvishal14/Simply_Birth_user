import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';
import React from 'react';
import Headers from '../../../components/Headers';
import styles from '../styles';
import {moderateScale} from '../../../utils/Metrics';
import Profile from '../../../components/Profile';
import AppTextInput from '../../../components/AppTextInput';
const Team = [
  {
    id: 1,
    name: 'Willie Foster',
    experience: '2 years experience',
  },
  {
    id: 2,
    name: 'Julie Hill',
    experience: '4 years experience',
  },
];
export default function HomeVisit({navigation}) {
  return (
    <View style={styles.container}>
      <Headers />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.header}>Caregivers</Text>
        <Text style={styles.sortByText}>Sort by</Text>
        <AppTextInput placeholder="Select Km" width={115} />
      </View>
      <FlatList
        data={Team}
        renderItem={({item, index}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('DashboardNavigator', {
                screen: 'CareGiverAppointment',
              })
            }>
            <View style={styles.flatlist}>
              <View style={styles.profileView}>
                <Profile height={60} width={60} />
              </View>
              <View>
                <Text style={{...styles.nameList, fontSize: moderateScale(20)}}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    columnGap: moderateScale(80),
                  }}>
                  <Text style={styles.descriptionList}>Gynaecologist</Text>
                  <Text style={styles.descriptionList}>{item.experience}</Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
