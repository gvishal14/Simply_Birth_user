import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

import {COLORS, IMAGES} from '../../../../constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../utils/Metrics';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import AppButton from '../../../../components/AppButton';
import Cards from '../../../../components/Cards';
import BackHeader from '../../../../components/BackHeader';

const OpenProfile = ({navigation}) => {
  const [listData, setListData] = useState(Monthly);
  const [toggleCard, setToggleCard] = useState(1000);
  const handleToggle = id => {
    setToggleCard(id == toggleCard ? 1000 : id);
  };
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
  ];
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <BackHeader title="Profile" />
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: verticalScale(30),
        }}>
        <Image
          style={styles.imgSearch}
          source={{uri: 'https://i.pravatar.cc/300'}}
        />
        <Text style={styles.textarea}>Stacy Thomas</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <AppButton
          label="Edit Profile"
          width={horizontalScale(165)}
          color={COLORS.PRIMARY}
          onPress={() =>
            navigation.navigate('DashboardNavigator', {screen: 'EditProfile'})
          }
        />
        <AppButton
          label="Logout"
          width={horizontalScale(165)}
          color={'rgba(231, 158, 137, 1)'}
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{name: 'Auth', params: {screen: 'Login'}}],
            })
          }
        />
      </View>
      <ScrollView>
        <Text style={styles.textPlan}>Your Plan</Text>
        <FlatList
          data={listData}
          renderItem={({item}) => {
            return (
              <View>
                <Cards
                  allData={item}
                  handleToggle={id => handleToggle(id)}
                  toggleCard={toggleCard}
                />
              </View>
            );
          }}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

export default OpenProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },
  imgSearch: {
    // alignItems: 'center',
    // resizeMode: 'cover',
    borderRadius: 100,
    height: 120,
    width: 120,
  },
  textarea: {
    fontSize: 26,
    paddingVertical: verticalScale(15),
  },
  textPlan: {
    fontSize: 20,
    paddingLeft: 20,
  },
});
