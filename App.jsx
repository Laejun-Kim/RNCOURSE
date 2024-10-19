import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  <div></div>;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Hello World!!</Text>
      </View>
      <Text style={styles.dummyText}>Hello World22222!!</Text>
      <Button title="여기에 버튼이름" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "blue",
    padding: 16,
  },
});
