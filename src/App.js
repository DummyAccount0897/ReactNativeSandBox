import React, { Component } from "react";
import { Button, StyleSheet, View } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <Button onPress={() => {}} title="Example button" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

export default App;
