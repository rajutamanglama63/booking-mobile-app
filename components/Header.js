import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";

const Header = () => {
  return (
    <View
      style={{
        height: 65,
        backgroundColor: "#003580",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
          borderWidth: 1,
          borderColor: "white",
          borderRadius: 25,
        }}
      >
        <Ionicons name="bed-outline" size={24} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Stays
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
        }}
      >
        <Ionicons name="airplane-outline" size={26} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Flights
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
        }}
      >
        <Ionicons name="car-outline" size={26} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Car Rental
        </Text>
      </Pressable>

      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 8,
        }}
      >
        <FontAwesome5 name="uber" size={26} color="white" />
        <Text
          style={{
            color: "white",
            marginLeft: 8,
            fontWeight: "bold",
            fontSize: 15,
          }}
        >
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
