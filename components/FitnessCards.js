import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = fitness;
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        marginTop: 90,
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      {FitnessData.map((item, key) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              excersises: item.excersises,
              id: item.id,
            })
          }
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
            paddingTop: 10,
          }}
          key={key}
        >
          <Image
            style={{ width: "95%", height: 120, borderRadius: 7 }}
            source={{ uri: item.image }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "white",
              bottom: 15,
              left: 25,
            }}
            name="lightning-bolt"
            size={24}
            color="black"
          />
        </Pressable>
      ))}
    </SafeAreaView>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
