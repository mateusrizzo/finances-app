import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function GraphBar(props) {
  return (
    <>
      <View style={styles(props).bar}>
        <Text
          style={styles(props).category}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {props.category}
        </Text>
        <Text
          style={styles(props).graphValueText}
          numberOfLines={1}
          adjustsFontSizeToFit={true}>
          {props.value}
        </Text>
      </View>
    </>
  );
}
