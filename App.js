import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import StackNavigator from "./StackNavigator";
import { FitnessContext } from "./Context";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "fff",
  },
});
