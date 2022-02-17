import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import edit from '../../assets/icons/edit.png';

import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Suas Finanças</Text>
      <TouchableOpacity style={styles.editButton}>
        <Image style={styles.editIcon} source={edit} />
      </TouchableOpacity>
    </View>
  );
}
