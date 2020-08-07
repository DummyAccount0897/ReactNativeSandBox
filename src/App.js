import React, { useState } from "react";
import { Button, StyleSheet, View, TextInput, Text } from "react-native";

const App = () => {
  const [textInputValue, setTextInputValue] = useState("Place holder");

  return (
    <View style={styles.app}>
      <Button onPress={() => {}} title="Example button" />
      <TextInput
        style={styles.textInput}
        value={textInputValue}
        onChangeText={(textInputValue) => setTextInputValue(textInputValue)}
      />
      <Text>{textInputValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    marginVertical: 20,
    maxWidth: 500
  },
  textInput: {
    textColor: "black",
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 20,
    padding: 4,
    height: 40
  }
});

export default App;
