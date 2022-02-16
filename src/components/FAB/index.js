import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function FAB() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.plusIcon}>+</Text>
    </TouchableOpacity>
  );
}
