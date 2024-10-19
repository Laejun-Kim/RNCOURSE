import { View, Text, StyleSheet, Pressable } from "react-native";
45;
const GoalItem = ({ text, id, onDelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => onDelete(id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
