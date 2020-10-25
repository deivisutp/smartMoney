import React from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  const saldo = 1000000.0;

  const entries = [
    {key: '1', description: 'Padaria da esquina', amount: 10},
    {key: '2', description: 'Supermercado Giassi', amount: 130},
    {key: '3', description: 'Posto Ipíranga', amount: 150},
  ];

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 150},
    {key: '3', description: 'Aluguel', amount: 500},
    {key: '4', description: 'Lazer', amount: 400},
    {key: '5', description: 'Outros', amount: 130},
  ];

  return (
    <View>
      <BalanceLabel currentBalance={saldo}/>
      <View>
        <Picker>
          <Picker.Item label="Todas as categorias"></Picker.Item>
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias"></Picker.Item>
        </Picker>
      </View>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList entries={entries} />
      <View>
        <Button title="Salvar" />
        <Button title="Fechar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default Report;
