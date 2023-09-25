import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchResults from "../components/SearchResults";
import { data } from "../data/Data";

const SearchScreen = () => {
  const [input, setInput] = useState("");

  const services = [
    {
      id: "0",
      name: "room service",
    },
    {
      id: "2",
      name: "free wifi",
    },
    {
      id: "3",
      name: "Family rooms",
    },
    {
      id: "4",
      name: "Free Parking",
    },
    {
      id: "5",
      name: "swimming pool",
    },
    {
      id: "6",
      name: "Restaurant",
    },
    {
      id: "7",
      name: "Fitness center",
    },
  ];

  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderWidth: 4,
          borderColor: "#FFC72C",
          borderRadius: 10,
          padding: 10,
          margin: 10,
        }}
      >
        <TextInput
          placeholder="Enter your destination"
          value={input}
          onChangeText={(text) => setInput(text)}
        />
        <Feather name="search" size={22} color="black" />
      </View>

      <SearchResults input={input} setInput={setInput} data={data} />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
