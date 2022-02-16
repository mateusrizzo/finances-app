import React from 'react';
import {View, ScrollView} from 'react-native';

import Graph from '../../components/Graph';
import TransactionsList from '../../components/TransactionsList';
import FAB from '../../components/FAB';
import Header from '../../components/Header';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Graph />
        <TransactionsList />
      </ScrollView>
      <FAB />
    </View>
  );
}

export default Home;
