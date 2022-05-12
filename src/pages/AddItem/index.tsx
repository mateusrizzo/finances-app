import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  categorySelected,
  spendingSelected,
  addType,
} from '../../store/editButtons';
import {RootState} from '../../store';

import Header from '../../components/Header';

import styles from './styles';

export default function AddItem() {
  const optionSelected = useSelector(
    (state: RootState) => state.selectedButton.value,
  );
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header title="Adicionar" isHome={false} />
      <View style={styles.buttonsContainer}>
        <TouchableHighlight
          style={
            optionSelected === addType.category
              ? styles.selectedButton
              : styles.unselectedButton
          }
          onPress={() => {
            dispatch(categorySelected());
          }}>
          <Text
            style={
              optionSelected === addType.category
                ? styles.selectedText
                : styles.unselectedText
            }>
            Categoria
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={
            optionSelected === addType.spending
              ? styles.selectedButton
              : styles.unselectedButton
          }
          onPress={() => {
            dispatch(spendingSelected());
          }}>
          <Text
            style={
              optionSelected === addType.spending
                ? styles.selectedText
                : styles.unselectedText
            }>
            Gasto
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
