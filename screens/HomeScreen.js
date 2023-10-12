import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  const { minutes, calories, workout } = useContext(FitnessItems);

  const [savedData, setSaveData] = useState("");

  const save = async () => {
    try {
      const dataToSave = {
        minutes: minutes.toString(),
        calories: calories.toString(),
        workout: workout.toString(),
      };
      await AsyncStorage.setItem("saveData", JSON.stringify(dataToSave));
      alert("Veriler başarıyla kaydedildi!");
      console.log(dataToSave);
    } catch (error) {
      alert("Veriler kaydedilemedi: " + error);
    }
  };

  const load = async () => {
    try {
      const savedData = await AsyncStorage.getItem("saveData");
      if (savedData !== null) {
        const parsedData = JSON.parse(savedData);
        setSaveData(parsedData);
        console.log(parsedData);
      }
    } catch (error) {
      alert("Veriler yüklenemedi: " + error);
    }
  };
  useEffect(() => {
    load();
  }, []);
  useEffect(() => {
    console.log("savedData:", savedData); // savedData'nın içeriğini kontrol et
  }, [savedData]);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ScrollView style={{ marginTop: 0 }}>
        <View
          style={{
            backgroundColor: "orange",
            padding: 10,
            height: 220,
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              margin: 10,
              fontWeight: "bold",
            }}
          >
            HOME WORKOUT
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 25,
            }}
          >
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                {workout}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 10 }}>
                Workouts
              </Text>
            </View>
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                {calories}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 10 }}>
                KCAL
              </Text>
            </View>
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                {minutes}
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 10 }}>
                MINS
              </Text>
            </View>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={{
                width: "90%",
                height: 120,
                marginTop: 20,
                borderRadius: 7,
              }}
              source={{
                uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
              }}
            />
          </View>
        </View>
        <Pressable
          style={{ position: "absolute", top: 20, right: 100 }}
          onPress={() => save()}
        >
          <Entypo name="save" size={30} color="black" />
        </Pressable>
        <Pressable
          onPress={() => load()}
          style={{ position: "absolute", top: 20, right: 35 }}
        >
          <AntDesign name="printer" size={30} color="black" />
        </Pressable>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            top: 95,
            marginHorizontal: 30,
          }}
        >
          <Text
            style={{
              top: -5,
              fontSize: 20,
              color: "black",
              fontWeight: "bold",
            }}
          >
            TOTAL =
          </Text>
          <Text
            style={{
              width: 70,
              height: 50,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Minutes: {savedData.minutes}
          </Text>
          <Text
            style={{
              width: 70,
              height: 50,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Calories: {savedData.calories}
          </Text>
          <Text
            style={{
              width: 70,
              height: 50,
              color: "black",
              fontWeight: "bold",
            }}
          >
            Workout: {savedData.workout}
          </Text>
        </View>
        <FitnessCards />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
