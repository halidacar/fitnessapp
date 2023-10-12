import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useState, useContext, Alert } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { FitnessItems } from "../Context";
import { AsyncStorage } from "react-native";

const FitScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const excersise = route.params.excersises;
  const current = excersise[index];

  const {
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
    workout,
    setWorkout,
  } = useContext(FitnessItems);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem("calories", String(calories));
      await AsyncStorage.setItem("minutes", String(minutes));
      await AsyncStorage.setItem("workout", String(workout));
      console.log("Veriler kaydedildi:", calories, minutes, workout);
    } catch (error) {
      console.error("Veriler kaydedilemedi:", error);
    }
  };

  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 370 }}
        source={{ uri: current.image }}
      />
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {current.name}
      </Text>
      <Text
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        x{current.sets}
      </Text>
      {index + 1 >= excersise.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, current.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "blue",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 30,
            borderRadius: 20,
            padding: 10,
            width: 150,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "white",
            }}
          >
            DONE
          </Text>
        </Pressable>
      )}

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 50,
        }}
      >
        <Pressable
          onPress={() => {
            if (index == 0) {
              navigation.goBack();
            } else {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index - 1);
              }, 2000);
            }
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 15,
            marginHorizontal: 15,
            width: 100,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            PREV
          </Text>
        </Pressable>

        {index + 1 >= excersise.length ? (
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 15,
              marginHorizontal: 15,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              navigation.navigate("Rest");
              setTimeout(() => {
                setIndex(index + 1);
              }, 2000);
            }}
            style={{
              backgroundColor: "green",
              padding: 10,
              borderRadius: 15,
              marginHorizontal: 15,
              width: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
