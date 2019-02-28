/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, TextInput, StyleSheet, Text, View } from "react-native";
import Gauge from "./src/components/Gauge";
import GaugeTicks from "./src/components/Gauge-ticks";
import CustomGauge from "./src/components/Custom-gauge";
import Progress from "./src/components/Progress";

export default class App extends Component {
  state = {
    value: 0
  };

  onChange = value => {
    this.setState({
      value: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Speedometer Value"
          style={styles.textInput}
          onChangeText={this.onChange}
        />
        {/* <Progress size={300} currentValue={this.state.value} /> */}
        <CustomGauge size={300} currentValue={this.state.value} />
        {/* <Gauge size={300} currentValue={this.state.value} /> */}
        {/* <GaugeTicks size={300} currentValue={this.state.value} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#F5FCFF"
    // backgroundColor: "black"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
