import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import GraphBar from '../../components/GraphBar';

import styles from './styles';

function Home() {
  return (
    <ScrollView>
      <View>
        <View style={styles.greenHeader}>
          <Text style={styles.headerText}>Suas Finanças</Text>
          <ScrollView
            horizontal={true}
            style={styles.graphStyle}
            showsHorizontalScrollIndicator={false}>
            <GraphBar color="#F45D2D" height={190} value="R$120,00" />
            <GraphBar color="#C1DCEB" height={130} value="R$95,30" />
            <GraphBar color="orange" height={120} value="R$231,79" />
            <GraphBar color="#F45D2D" height={210} value="R$178,56" />
            <GraphBar color="#C1DCEB" height={220} value="R$89,90" />
            <GraphBar color="#F45D2D" height={250} value="R$1356,11" />
            <GraphBar color="#C1DCEB" height={190} value="R$31,46" />
            <GraphBar color="orange" height={170} value="R$223,14" />
            <GraphBar color="#F45D2D" height={90} value="R$748,99" />
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
