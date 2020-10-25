import React, { useState, useEffect, Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterLabel = ({ counter }) => {
  return <Text style={styles.text}>{counter}</Text>;
};

const CounterFuncional = () => {
  const [counter, setCounter] = useState(0);

  const count = () => {
    setCounter(counter => counter + 1);
  };
  
  return (
    <View>
      <CounterLabel counter={counter} />
      <Button title="Contar" onPress={() => count()} />
    </View>
  );
};

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  count() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
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
      <CounterFuncional />
      <CounterClass />
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

