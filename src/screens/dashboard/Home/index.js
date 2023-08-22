import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  Modal,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import AppButton from '../../../components/AppButton';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Metrics';
import styles from '../styles';
import Cards from '../../../components/Cards';
import Profile from '../../../components/Profile';
import {FONTS, COLORS, IMAGES} from '../../../constants';
import Headers from '../../../components/Headers';

const Monthly = [
  {
    id: '1',
    title: 'Basic Plan',
    description: 'Soothing',
    price: '$10',
    moreDetails: [
      {id: 1, title: '24 hours unlimited chat with care team'},
      {id: 2, title: 'Weekly newsletter sent to personal email'},
      {id: 2, title: 'Access to monthly mindfulness group sessions'},
      {
        id: 3,
        title: '1 video session per month with a member of the care team',
      },
    ],
  },
  {
    id: '2',
    title: 'Premium Plan',
    description: 'Uplifting',
    price: '$15',
    moreDetails: [
      {id: 1, title: '24 hours unlimited chat with care team'},
      {id: 2, title: 'Weekly newsletter sent to personal email'},
      {id: 3, title: 'Access to monthly mindfulness group sessions'},
      {
        id: 4,
        title: 'Upto 3 video sessions per month with a member of the care team',
      },
      {id: 5, title: '1 home visit from assigned doula or nurse'},
      {id: 6, title: 'Access to local resource database'},
    ],
  },
  {
    id: '3',
    title: 'Advanced Premium Plan',
    description: 'Traquility',
    price: '$20',
    moreDetails: [
      {id: 1, title: '24 hours unlimited chat with care team'},
      {id: 2, title: 'Weekly newsletter sent to personal email'},
      {id: 3, title: 'Access to monthly mindfulness group sessions'},
      {
        id: 4,
        title: 'Upto 5 video sessions per month with a member of the care team',
      },
      {
        id: 5,
        title: '2 home visit from assigned doula or nurse',
      },
      {
        id: 6,
        title: 'Access to local resource database',
      },
      {
        id: 7,
        title: 'Personalized monthly gift delivered to home',
      },
    ],
  },
];
const Yearly = [
  {
    id: '4',
    title: 'Basic Plan',
    description: 'Soothing',
    price: '$100',
    moreDetails: [
      {id: 1, title: '24 hours unlimited chat with care team'},
      {id: 2, title: 'Weekly newsletter sent to personal email'},
      {id: 3, title: 'Access to monthly mindfulness group sessions'},
      {
        id: 4,
        title: '1 video session per month with a member of the care team',
      },
    ],
  },
  {
    id: '5',
    title: 'Premium Plan',
    description: 'Uplifting',
    price: '$150',
    moreDetails: [
      {id: 1, title: '24 hours unlimited chat with care team'},
      {id: 2, title: 'Weekly newsletter sent to personal email'},
      {id: 3, title: 'Access to monthly mindfulness group sessions'},
      {
        id: 4,
        title: 'Upto 3 video sessions per month with a member of the care team',
      },
      {id: 5, title: '1 home visit from assigned doula or nurse'},
      {id: 6, title: 'Access to local resource database'},
    ],
  },
  {
    id: '6',
    title: 'Advanced Premium Plan',
    description: 'Traquility',
    price: '$200',
    moreDetails: [
      {id: 1, title: '24 hours unlimited chat with care team'},
      {id: 2, title: 'Weekly newsletter sent to personal email'},
      {id: 3, title: 'Access to monthly mindfulness group sessions'},
      {
        id: 4,
        title: 'Upto 5 video sessions per month with a member of the care team',
      },
      {
        id: 5,
        title: '2 home visit from assigned doula or nurse',
      },
      {
        id: 6,
        title: 'Access to local resource database',
      },
      {
        id: 7,
        title: 'Personalized monthly gift delivered to home',
      },
    ],
  },
];
const CareTeam = [
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
const Learn = [
  {
    description: 'Baby development (1 month)',
  },
];
export default function Home() {
  const {navigate} = useNavigation();
  const [visibleModal, setVisiblemodal] = useState(true);
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const [flatlistData, setFlatlistData] = useState(Monthly);
  const [toggleCard, setToggleCard] = useState(1000);

  const handleSingleIndexSelect = index => {
    if (index == 0) {
      setFlatlistData(Monthly);
    } else {
      setFlatlistData(Yearly);
    }
    setTabSelectedIndex(index);
  };

  const handleToggle = id => {
    setToggleCard(id == toggleCard ? 1000 : id);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={visibleModal} transparent={true}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(251, 243, 232, 1)',
                margin: moderateScale(8),
                borderRadius: moderateScale(10),
                shadowColor: COLORS.SHADOW,
                height: verticalScale(830),
                shadowOffset: {width: 0, height: 1},
                shadowOpacity: 0.8,
                shadowRadius: 5,
              }}>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.modalHeading}>Pick your plan</Text>
                <Text style={styles.modalSubheading}>
                  Your plan starts after{' '}
                  <Text
                    style={{fontSize: FONTS.w700, fontSize: moderateScale(22)}}>
                    7 days
                  </Text>{' '}
                  free trial
                </Text>
                <Text style={styles.descriptionHeading}>
                  For the first month you will be charged
                  <Text
                    style={{fontSize: FONTS.w700, fontSize: moderateScale(22)}}>
                    {' '}
                    $5
                  </Text>{' '}
                  irrespective of any plan you choose
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <SegmentedControlTab
                  values={['Monthly', 'Yearly']}
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
                <FlatList
                  data={flatlistData}
                  renderItem={({item}) => {
                    return (
                      <View>
                        <Cards
                          allData={item}
                          planType={tabSelectedIndex == 0 ? '/m' : '/y'}
                          handleToggle={id => handleToggle(id)}
                          toggleCard={toggleCard}
                        />
                      </View>
                    );
                  }}
                  keyExtractor={item => item.id}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginLeft: moderateScale(10),
                }}>
                <AppButton
                  label="SKIP"
                  width={horizontalScale(165)}
                  color={'rgba(231, 158, 137, 1)'}
                  onPress={() => setVisiblemodal(false)}
                />
                <AppButton
                  label="BUY"
                  width={horizontalScale(165)}
                  onPress={() => {
                    setVisiblemodal(false),
                      navigate('DashboardNavigator', {
                        screen: 'Payment',
                      });
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>

      
      <View styles={styles.container}>
        <View
          style={{
            backgroundColor: 'rgba(236, 182, 136, 0.31)',
            height: verticalScale(112),
            width: horizontalScale(388),
            borderRadius: moderateScale(15),
            marginHorizontal: moderateScale(5),
          }}>
          <Text
            style={{
              fontFamily: FONTS.w700,
              fontSize: moderateScale(26),
              padding: horizontalScale(10),
            }}>
            Hi Stacy!
          </Text>
          <Text
            style={{
              fontFamily: FONTS.w300,
              fontSize: moderateScale(18),
              marginHorizontal: horizontalScale(10),
            }}>
            Have a beautiful day!
          </Text>
          <View style={{justifyContent: 'flex-end', flexDirection: 'row'}}>
            <Image
              style={{
                bottom: moderateScale(80),
                height: verticalScale(110),
                width: horizontalScale(125),
                right: moderateScale(25),
                resizeMode: 'contain',
              }}
              source={IMAGES.BACKGROUND}
            />
          </View>
        </View>
        <Text
          style={{
            ...styles.heading,
            marginTop: 10,
            marginHorizontal: horizontalScale(5),
          }}>
          My Care Team
        </Text>
        <FlatList
          data={CareTeam}
          horizontal
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  ...styles.flatlist,
                  height: verticalScale(72),
                  width: horizontalScale(184),
                }}>
                <View style={styles.profileView}>
                  <Profile />
                </View>
                <View style={styles.textView}>
                  <Text style={styles.nameList}>{item.name}</Text>
                  <Text style={styles.descriptionList}>{item.description}</Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
        <Text
          style={{
            ...styles.heading,
            marginHorizontal: horizontalScale(5),
          }}>
          Meet-ups
        </Text>
        <FlatList
          data={CareTeam}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  ...styles.flatlist,
                  height: verticalScale(72),
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View style={styles.profileView}>
                    <Profile />
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.nameList}>{item.name}</Text>
                    <Text style={styles.descriptionList}>
                      {item.description}
                    </Text>
                  </View>
                </View>
                <View style={{marginHorizontal: moderateScale(5)}}>
                  <View style={styles.moment}>
                    <Image source={IMAGES.CALENDAR} />
                    <Text style={styles.momentDescription}>23Jan</Text>
                  </View>
                  <View style={{...styles.moment, marginTop: moderateScale(5)}}>
                    <Image source={IMAGES.CLOCK} />
                    <Text style={styles.momentDescription}>10:00 AM</Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
        <Text
          style={{
            ...styles.heading,
            marginHorizontal: horizontalScale(5),
          }}>
          Learn
        </Text>
      </View>
    </SafeAreaView>
  );
}
