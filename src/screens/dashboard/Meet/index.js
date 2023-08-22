import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList, Image} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AppButton from '../../../components/AppButton';
import Headers from '../../../components/Headers';
import Profile from '../../../components/Profile';
import SegmentedTab from '../../../components/SegmentedTab';
import {COLORS, FONTS, IMAGES} from '../../../constants';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Metrics';
import styles from '../styles';
const MeetUp = [
  {
    id: '1',
    name: 'Willie Foster',
    description: 'Nurse',
  },
  {
    id: '2',
    name: 'Julie Hill',
    description: 'Doula',
  },
];
export default function Meet() {
  const {navigate} = useNavigation();
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const handleSingleIndexSelect = index => {
    setTabSelectedIndex(index);
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{...styles.heading, fontSize: moderateScale(26)}}>
            Meet Up
          </Text>
          <SegmentedControlTab
            values={['Consult', 'Sessions']}
            selectedIndex={tabSelectedIndex}
            onTabPress={handleSingleIndexSelect}
            borderRadius={moderateScale(50)}
            tabsContainerStyle={{
              height: verticalScale(40),
              width: horizontalScale(200),
            }}
            tabStyle={{
              borderColor: COLORS.PRIMARY,
              alignItems: 'center',
            }}
            activeTabStyle={{backgroundColor: COLORS.PRIMARY}}
            tabTextStyle={{
              color: 'rgba(0, 0, 0, 0.6)',
              fontFamily: FONTS.w500,
              fontSize: moderateScale(18),
            }}
            activeTabTextStyle={{color: 'white'}}
          />
        </View>
        {tabSelectedIndex === 0 && (
          <View>
            <Text style={{...styles.heading, marginTop: moderateScale(5)}}>
              Upcoming Consultations
            </Text>
            <FlatList
              data={MeetUp}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.flatlist}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.profileView}>
                        <Profile height={50} width={50} />
                      </View>
                      <View style={styles.textView}>
                        <Text style={styles.nameList}>{item.name}</Text>
                        <Text style={styles.descriptionList}>
                          {item.description}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            columnGap: moderateScale(5),
                          }}>
                          <View style={styles.moment}>
                            <Image source={IMAGES.CALENDAR} />
                            <Text style={styles.momentDescription}>23 Jan</Text>
                          </View>
                          <View style={styles.moment}>
                            <Image source={IMAGES.CLOCK} />
                            <Text style={styles.momentDescription}>
                              10:00 AM
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{top: moderateScale(20)}}>
                        <AppButton
                          label="Start"
                          height={35}
                          width={97}
                          fontSize={18}
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
        {tabSelectedIndex === 1 && (
          <View>
            <Calendar
              theme={{arrowColor: 'rgba(146, 145, 165, 1)'}}
              initialDate={'2023-02-27'}
              minDate={'2012-05-10'}
              maxDate={'2012-05-30'}
            />
            <FlatList
              data={MeetUp}
              renderItem={({item, index}) => {
                return (
                  <View style={styles.flatlist}>
                    <View style={{flexDirection: 'row'}}>
                      <View style={styles.profileView}>
                        <Profile height={50} width={50} />
                      </View>
                      <View style={styles.textView}>
                        <Text style={styles.nameList}>{item.name}</Text>
                        <Text style={styles.descriptionList}>
                          {item.description}
                        </Text>
                        <View
                          style={{
                            flexDirection: 'row',
                            columnGap: moderateScale(5),
                          }}>
                          <View style={styles.moment}>
                            <Image source={IMAGES.CALENDAR} />
                            <Text style={styles.momentDescription}>23 Jan</Text>
                          </View>
                          <View style={styles.moment}>
                            <Image source={IMAGES.CLOCK} />
                            <Text style={styles.momentDescription}>
                              10:00 AM
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={{top: moderateScale(20)}}>
                        <AppButton
                          label="Register"
                          height={35}
                          width={97}
                          fontSize={18}
                        />
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
