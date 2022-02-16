import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import GraphBar from '../../components/GraphBar';
import TransactionItem from '../../components/TransactionItem';
import FAB from '../../components/FAB';

import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.greenHeader}>
            <Text style={styles.headerText}>Suas Finanças</Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <GraphBar
                color="#F45D2D"
                height={190}
                value="R$120,00"
                category="Supermercado"
              />
              <GraphBar
                color="#C1DCEB"
                height={130}
                value="R$95,30"
                category="Lazer"
              />
              <GraphBar
                color="orange"
                height={120}
                value="R$231,79"
                category="Internet"
              />
              <GraphBar
                color="#F45D2D"
                height={210}
                value="R$178,56"
                category="Conta de Luz"
              />
              <GraphBar
                color="#C1DCEB"
                height={110}
                value="R$89,90"
                category="Transporte"
              />
              <GraphBar
                color="#F45D2D"
                height={250}
                value="R$1356,11"
                category="Aluguel"
              />
              <GraphBar
                color="#C1DCEB"
                height={190}
                value="R$31,46"
                category="Farmácia"
              />
              <GraphBar
                color="orange"
                height={170}
                value="R$223,14"
                category="Cursos"
              />
              <GraphBar
                color="#F45D2D"
                height={90}
                value="R$748,99"
                category="Cofrinho"
              />
            </ScrollView>
          </View>
        </View>
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
