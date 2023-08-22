import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import Profile from '../../../components/Profile';
import {moderateScale} from '../../../utils/Metrics';
import styles from '../styles';
const Team = [
  {
    id: 1,
    name: 'Willie Foster',
    description: 'Nurse',
    experience: '2 years experience',
  },
  {
    id: 2,
    name: 'Julie Hill',
    description: 'Doula',
    experience: '4 years experience',
  },
];
export default function CareTeam() {
  const {navigate, reset} = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>My Care Team</Text>
        <FlatList
          data={Team}
          renderItem={({item, index}) => {
            return (
              <View style={styles.flatlist}>
                <View style={styles.profileView}>
                  <Profile height={70} width={70} />
                </View>
                <View style={styles.textView}>
                  <Text
                    style={{...styles.nameList, fontSize: moderateScale(20)}}>
                    {item.name}
                  </Text>
                  <Text style={styles.descriptionList}>{item.description}</Text>
                  <Text style={styles.descriptionList}>{item.experience}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
