import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function GraphBar(props) {
  return (
    <View style={styles(props).bar}>
      <Text style={styles(props).graphValueText}>{props.value}</Text>
    </View>
  );
}
