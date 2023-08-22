import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../utils/Metrics';
import {Card} from 'react-native-elements';
import {FONTS, COLORS} from '../../../constants';

import Video from 'react-native-video';

export default function Learn({navigation}) {
  const {navigate} = useNavigation();
  const [tabSelectedIndex, setTabSelectedIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoPlayer = useRef();
  const handleCustomIndexSelect = index => {
    setTabSelectedIndex(index);
  };

  const BlogsList = [
    {
      id: '1',
      title: 'Baby development (1 month)',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: {
        uri: 'https://images.unsplash.com/photo-1586102728466-46b99b3bc411?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      },
    },
    {
      id: '2',
      title: 'Common worries and fears for parents',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: {
        uri: 'https://images.unsplash.com/photo-1560707854-fb9a10eeaace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
    },
    {
      id: '3',
      title: 'Baby development (1 month)',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: {
        uri: 'https://images.unsplash.com/photo-1470843810958-2da815d0e041?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      },
    },
    {
      id: '4',
      title: 'Common worries and fears for parents',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      image: {
        uri: 'https://images.unsplash.com/photo-1489087584469-437d40177a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
    },
  ];

  const VideosList = [
    {
      id: '1',
      title: 'Videos 1',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      videos: {
        uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
    },
    {
      id: '2',
      title: 'Common worries and fears for parents',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      videos: {
        uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
    },
    {
      id: '3',
      title: 'Baby development (1 month)',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      videos: {
        uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
    },
    {
      id: '4',
      title: 'Baby development (1 month)',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      videos: {
        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
      },
    },
  ];

  const Blogs = () => {
    return (
      <View>
        <View style={styles.searchView}>
          <TextInput style={styles.searchText} placeholder="Search blogs" />
          <TouchableOpacity>
            <Image
              style={styles.imgSearch}
              source={require('../../../assets/images/search.png')}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={BlogsList}
          renderItem={({item}) => (
            <Card containerStyle={styles.card}>
              <Image
                style={styles.imageload}
                resizeMode="cover"
                loadingStyle={styles.loadingstyle}
                source={item.image}
              />
              <View>
                <Text style={styles.Title}>{item.title}</Text>
                <Text style={styles.Description}>{item.description}</Text>
              </View>
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  const Videos = () => {
    return (
      <View>
        <View style={styles.searchView}>
          <TextInput style={styles.searchText} placeholder="Search videos" />
          <TouchableOpacity>
            <Image
              source={require('../../../assets/images/search.png')}
              style={styles.imgSearch}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={VideosList}
          renderItem={({item}) => (
            <Card containerStyle={styles.card}>
              <Video
                style={styles.videoStyle}
                source={item.videos}
                paused={!isPlaying}
                controls={true}
                repeat={true}
                ref={ref => (videoPlayer.current = ref)}
              />
              <View>
                <Text style={styles.Title}>{item.title}</Text>
                <Text style={styles.Description}>{item.description}</Text>
              </View>
            </Card>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.outerView}>
        <Text style={styles.learn}>Learn </Text>
        <SegmentedControlTab
          values={['Blogs', 'Videos']}
          selectedIndex={tabSelectedIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={moderateScale(50)}
          tabsContainerStyle={styles.tabsContainer}
          tabStyle={styles.tabs}
          activeTabStyle={{backgroundColor: COLORS.PRIMARY}}
          tabTextStyle={styles.tabText}
          activeTabTextStyle={{color: 'white'}}
        />
      </View>
      <View style={styles.segmentedTab}>
        {tabSelectedIndex === 0 && <Blogs />}
        {tabSelectedIndex === 1 && <Videos />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: horizontalScale(15),
  },
  outerView: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    justifyContent: 'space-between',
  },
  learn: {
    fontSize: moderateScale(27.5),
    marginTop: verticalScale(3),
  },
  tabsContainer: {
    height: verticalScale(44),
    width: horizontalScale(206),
    backgroundColor: COLORS.WHITE,
  },
  tabs: {
    borderColor: COLORS.PRIMARY,
    borderRadius: moderateScale(1),
    alignItems: 'center',
  },
  tabText: {
    color: COLORS.LIGHT_GREY,
    fontFamily: FONTS.w500,
    fontSize: moderateScale(18),
  },
  segmentedTab: {
    marginTop: moderateScale(21),
    backgroundColor: '#F5F5F5',
    margin: 0,
  },
  searchView: {
    flexDirection: 'row',
    height: verticalScale(46),
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#F5F5F5',
  },
  searchText: {
    fontSize: moderateScale(19),
    paddingLeft: horizontalScale(10),
  },
  imgSearch: {
    height: verticalScale(30),
    width: horizontalScale(30),
    marginTop: moderateScale(8),
    marginRight: moderateScale(8),
  },
  card: {
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(1),
    margin: moderateScale(8),
    marginBottom: moderateScale(10),
    padding: 0,
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.2,
    elevation: 5,
  },
  imageload: {
    alignSelf: 'center',
    height: verticalScale(220),
    width: horizontalScale(380),
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
    overflow: 'hidden',
  },
  Title: {
    fontSize: moderateScale(21.5),
    fontFamily: FONTS.w700,
    color: COLORS.BLACK,
    marginTop: moderateScale(11),
    paddingLeft: horizontalScale(15),
  },
  Description: {
    fontSize: moderateScale(19.5),
    fontFamily: FONTS.w300,
    flexWrap: 'wrap',
    color: COLORS.GREY,
    marginTop: moderateScale(5),
    marginBottom: moderateScale(10),
    paddingLeft: horizontalScale(15),
  },
  loadingstyle: {
    size: 'large',
    color: COLORS.PRIMARY,
  },
  videoStyle: {
    height: verticalScale(220),
    width: horizontalScale(390),
    borderTopRightRadius: moderateScale(10),
    borderTopLeftRadius: moderateScale(10),
    overflow: 'hidden',
  },
});
