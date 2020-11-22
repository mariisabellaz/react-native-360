import React, { Component } from "react";
import { View, Text } from "react-360";

export default class Clock extends Component {
  render() {
    return (
      <View style={style.clock}>
        <Text>Relógio aqui</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  clock: {
    width: 100,
    height: 600,
    backgroundColor: "gray",
    borderColor: "blue"
  }
});
