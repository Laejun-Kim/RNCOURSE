import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";

const GoalInput = ({ onAddGoal, isVisible, onCancel }) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/target.png")} style={styles.image} />
        <TextInput
          style={styles.textInput}
          onChangeText={goalInputHandler}
          placeholder="추가할 목표"
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderColor: "#cccccc",
    borderWidth: 1,
    padding: 5,
    width: "100%",
    // marginRight: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});
