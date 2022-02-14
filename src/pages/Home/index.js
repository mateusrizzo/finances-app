import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles';

function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.greenHeader}>
          <Text style={styles.headerText}>Suas Finanças</Text>
          <ScrollView
            horizontal={true}
            style={styles.graphStyle}
            showsHorizontalScrollIndicator={false}>
            <View
              style={{
                backgroundColor: '#F45D2D',
                width: 60,
                height: 190,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$120,00</Text>
            </View>
            <View
              style={{
                backgroundColor: '#C1DCEB',
                width: 60,
                height: 130,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$95,30</Text>
            </View>
            <View
              style={{
                backgroundColor: 'orange',
                width: 60,
                height: 120,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$231,79</Text>
            </View>
            <View
              style={{
                backgroundColor: '#F45D2D',
                width: 60,
                height: 210,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$178,56</Text>
            </View>
            <View
              style={{
                backgroundColor: '#C1DCEB',
                width: 60,
                height: 220,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$89,90</Text>
            </View>
            <View
              style={{
                backgroundColor: '#F45D2D',
                width: 60,
                height: 250,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$1356,11</Text>
            </View>
            <View
              style={{
                backgroundColor: '#C1DCEB',
                width: 60,
                height: 190,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$31,46</Text>
            </View>
            <View
              style={{
                backgroundColor: 'orange',
                width: 60,
                height: 170,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$223,14</Text>
            </View>
            <View
              style={{
                backgroundColor: '#F45D2D',
                width: 60,
                height: 90,
                alignSelf: 'flex-end',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                justifyContent: 'flex-end',
              }}>
              <Text style={styles.graphValueText}>R$748,99</Text>
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
      <View style={styles.itemContainer}>
        <View>
          <Text style={styles.itemTitle}>IFood</Text>
          <Text style={styles.itemDate}>09/02/2022</Text>
        </View>
        <Text style={styles.itemValue}>R$52,99</Text>
      </View>
    </ScrollView>
  );
}

export default Home;
