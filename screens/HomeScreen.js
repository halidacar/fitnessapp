import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";
const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
      <ScrollView style={{ marginTop: 0 }}>
        <View
          style={{
            backgroundColor: "orange",
            padding: 10,
            height: 220,
            width: "%100",
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
                0
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 10 }}>
                Workouts
              </Text>
            </View>
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                0
              </Text>
              <Text style={{ color: "#D0D0D0", fontSize: 17, marginTop: 10 }}>
                KCAL
              </Text>
            </View>
            <View>
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 16 }}
              >
                0
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
          <FitnessCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({});
