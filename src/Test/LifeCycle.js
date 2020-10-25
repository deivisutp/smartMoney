import React, { useState, Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterLabel = ({ counter }) => {
  return <Text style={styles.text}>{counter}</Text>;
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  count() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return(
      <View>
        <CounterLabel counter={this.state.counter} />
        <Button title="Contar" onPress={() => this.count()} />
      </View>
    )
  }
}

const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 150,
    marginVertical: 100
  },
  text: {
    fontSize: 38,
    textAlign: "center"
  }
});

export default App;

