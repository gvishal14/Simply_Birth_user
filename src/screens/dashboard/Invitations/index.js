import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackHeader from '../../../components/BackHeader';

export default function Invitation() {
  return (
    <View>
      <BackHeader title="Invitations" />
      <FlatList />
    </View>
  );
}

const styles = StyleSheet.create({});
