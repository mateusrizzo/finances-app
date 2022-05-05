import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function TransactionItem({title, date, value}) {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemTitle}>{title}</Text>
        <Text style={styles.itemDate}>{date}</Text>
      </View>
      <Text style={styles.itemValue}>{value}</Text>
    </View>
  );
}
