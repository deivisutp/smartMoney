import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

import Colors from '../../styles/Colors';

//SwitchNavigator/TabNavigator/DrawerNavigator {react-navigation}
//npm i react-navigation --save               para usar react-navigation-tabs
//npm i react-native-gesture-handler --save   para usar react-navigation-drawer
//npm i react-native-reanimated --save        para usar react-native-gesture e react-native-reanimated
const Main = ({navigation}) => {
  const saldo = 1000000.0;

  const entriesGrouped = [
    {key: '1', description: 'Alimentação', amount: 200},
    {key: '2', description: 'Combustível', amount: 150},
    {key: '3', description: 'Aluguel', amount: 500},
    {key: '4', description: 'Lazer', amount: 400},
    {key: '5', description: 'Outros', amount: 130},
  ];

  return (
    <View style={styles.container}>
      <BalancePanel currentBalance={saldo} 
        onNewEntryPress={() => navigation.navigate('NewEntry')}/>
      <EntrySummary entriesGrouped={entriesGrouped} />
      <EntryList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
export default Main;
