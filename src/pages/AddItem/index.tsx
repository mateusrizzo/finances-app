import React, {useState} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

import Header from '../../components/Header';

import styles from './styles';

export default function AddItem() {
  const [categorySelected, setCategorySelected] = useState(false);
  const [spendingSelected, setSpendingSelected] = useState(true);
  return (
    <View style={styles.container}>
      <Header title="Adicionar" isHome={false} />
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={
            categorySelected ? styles.selectedButton : styles.unselectedButton
          }
          onPress={() => {
            setCategorySelected(true);
            setSpendingSelected(false);
          }}>
          <Text
            style={
              categorySelected ? styles.selectedText : styles.unselectedText
            }>
            Categoria
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={
            spendingSelected ? styles.selectedButton : styles.unselectedButton
          }
          onPress={() => {
            setCategorySelected(false);
            setSpendingSelected(true);
          }}>
          <Text
            style={
              spendingSelected ? styles.selectedText : styles.unselectedText
            }>
            Gasto
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
