import React from 'react';
import {TouchableHighlight} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function FAB() {
  const navigator = useNavigation();
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => navigator.navigate('addItem')}>
      <Icon name="add" size={35} color="#FFF" />
    </TouchableHighlight>
  );
}
