import React, { useState } from 'react';
import {
    Image, ScrollView, Text, View
} from 'react-native';
import AppButton from '../../../components/AppButton';
import AppCheckbox from '../../../components/AppCheckbox';
import AppDropDownSideways from '../../../components/AppDropDownSideways';
import AppRadio from '../../../components/AppRadio';
import AppTextInputSideways from '../../../components/AppTextInputSideways';
import { pregnancyComplications } from '../../../constants';
import styles from '../styles';


export default function BasicHealthInfo({navigation}) {

  
    const [complications, setComplications] = useState([])

    return (
        <View style={styles.container}>

            <Image
                style={styles.backgroundImage}
                source={require('../../../assets/images/butterflyback.png')} />

            <Image source={require('../../../assets/images/logo.png')} />

            <Text style={styles.header}>Basic Health Info</Text>
            <ScrollView>
                <AppTextInputSideways title='Trimester' placeholder='Enter your trimester' />
                <AppTextInputSideways title={`Baby Name\n(if any)`} placeholder='Enter baby name' />
                <AppDropDownSideways
                    data={[
                        { label: 'Boy', value: '1' },
                        { label: 'Girl', value: '2' },
                        { label: 'Not known', value: '3' },
                    ]}
                    labelField="label"
                    valueField='value'
                    onChange={(e) => { console.log(e) }}
                    title="Gender of baby" />
                <AppTextInputSideways title='No. of previous pregnancies' placeholder='Enter your number' />

                <AppTextInputSideways
                    title={`Est. due date`}
                    editable={false}
                    pointerEvents='none'
                    onPress={() => { }}
                    placeholder='Select date'
                    rightImage={require('../../../assets/images/calendar.png')}
                />
                <View style={styles.profileSetupSec}>
                    <Text style={styles.profileSetupLabel}>Planned{'\n'}birth type</Text>
                    <View style={styles.profileSetupValue}>
                        <AppRadio items={["Vaginal", "C-Section", "TOLAC"]} />
                    </View>
                </View>

                <View style={[styles.profileSetupSec]}>
                    <Text style={styles.profileSetupLabel}>Pregnancy Complications</Text>
                    <View style={styles.profileSetupValue}>
                        <AppCheckbox onValueChanged={setComplications} items={pregnancyComplications} />
                    </View>
                </View>
                {complications.includes('Other') && <AppTextInputSideways title={``} placeholder='Enter other complications' />}
                <AppButton label='Continue' onPress={() => navigation.goBack () } />
            </ScrollView>
        </View>
    );
}
