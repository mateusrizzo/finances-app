import React from 'react';
import {View, Text} from 'react-native';

import EditButton from '../EditButton';

import styles from './styles';

export default function Header({title, isHome}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>
      {isHome ? <EditButton /> : null}
    </View>
  );
}
