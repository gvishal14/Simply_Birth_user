import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text, View, FlatList, Pressable} from 'react-native';
import AppTextInput from '../../../components/AppTextInput';
import {COLORS} from '../../../constants';
import styles from '../styles';
import Profile from '../../../components/Profile';
import {moderateScale} from '../../../utils/Metrics';
const Message = [
  {
    name: 'Julie Hill',
    message: 'Hello! Yes I’ll be there on time.',
    status: true,
    unReadMessage: true,
  },
  {
    name: 'Amy Thompson',
    message: 'Hi Amy!',
    status: false,
    unReadMessage: false,
  },
];
export default function AllChats() {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.header}>Chat</Text>
        <AppTextInput placeholder="Search Message" />
        <FlatList
          data={Message}
          renderItem={({item, index}) => {
            return (
              <Pressable
                onPress={() =>
                  navigate('DashboardNavigator', {screen: 'RecentChats'})
                }>
                <View
                  style={{...styles.flatlist, justifyContent: 'space-between'}}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.profileView}>
                      <Profile height={60} width={60} />
                      <View style={styles.statusContainer}>
                        <View
                          style={{
                            ...styles.status,
                            backgroundColor: item.status
                              ? COLORS.ONLINE
                              : COLORS.OFFLINE,
                          }}></View>
                      </View>
                    </View>
                    <View
                      style={{
                        ...styles.unRead,
                        backgroundColor: item.unReadMessage
                          ? COLORS.SECONDARY
                          : COLORS.WHITE,
                      }}>
                      {item.unReadMessage && (
                        <Text style={styles.unreadText}>1</Text>
                      )}
                    </View>
                    <View style={styles.textView}>
                      <Text
                        style={{
                          ...styles.nameList,
                          fontSize: moderateScale(20),
                        }}>
                        {item.name}
                      </Text>
                      <Text style={styles.descriptionList}>{item.message}</Text>
                    </View>
                  </View>
                  <View style={{...styles.moment, marginRight: 10}}>
                    <Text
                      style={{
                        ...styles.momentDescription,
                        bottom: moderateScale(15),
                      }}>
                      10:00 AM
                    </Text>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}
