import React from 'react';
import {View, ScrollView} from 'react-native';

import Graph from '../../components/Graph';
import TransactionItem from '../../components/TransactionItem';
import FAB from '../../components/FAB';
import Header from '../../components/Header';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Graph />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
        <TransactionItem title="IFood" date="09/02/2022" value="R$52,99" />
      </ScrollView>
      <FAB />
    </View>
  );
}

export default Home;
