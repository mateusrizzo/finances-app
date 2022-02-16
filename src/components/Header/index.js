import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default function Header() {
  return (
    <View>
      <Text style={styles.headerText}>Suas Finanças</Text>
    </View>
  );
}
