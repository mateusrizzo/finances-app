import React from 'react';
import {TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function EditButton() {
  return (
    <TouchableHighlight style={styles.editButton}>
      <Icon name="edit" size={30} color="#FFF" />
    </TouchableHighlight>
  );
}
