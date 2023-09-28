import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Amenities from "../components/Amenities";

const RoomsScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Available rooms",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const [selected, setSelected] = useState([]);

  return (
    <>
      <ScrollView>
        {route.params.rooms.map((item, index) => (
          <Pressable
            key={index}
            style={{ margin: 10, backgroundColor: "white", padding: 10 }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{ color: "#007FFF", fontSize: 17, fontWeight: "500" }}
              >
                {item.name}
              </Text>
              <AntDesign
                style={{ color: "#007FFF" }}
                name="infocirlceo"
                size={24}
                color="black"
              />
            </View>

            <Text style={{ margin: 3, fontSize: 16 }}>Pay at the property</Text>
            <Text style={{ margin: 3, fontSize: 16, color: "green" }}>
              Room cancellation available
            </Text>

            <View
              style={{ flexDirection: "row", gap: 15, alignItems: "center" }}
            >
              <Text
                style={{
                  color: "red",
                  fontSize: 18,
                  textDecorationLine: "line-through",
                }}
              >
                {route.params.oldPrice}
              </Text>
              <Text style={{ fontSize: 18 }}>{route.params.newPrice}</Text>
            </View>

            <Amenities />

            {selected.includes(item.name) ? (
              <Pressable
                style={{
                  borderColor: "#318CE7",
                  backgroundColor: "#F0F8FF",
                  borderWidth: 2,
                  width: "100%",
                  padding: 10,
                  borderRadius: 5,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                    color: "#318CE7",
                    fontWeight: "bold",
                    fontSize: 16,
                  }}
                >
                  SELECTED
                </Text>
                <Entypo
                  onPress={() => setSelected([])}
                  name="circle-with-cross"
                  size={24}
                  color="red"
                />
              </Pressable>
            ) : (
              <Pressable
                onPress={() => setSelected(item.name)}
                style={{
                  padding: 10,
                  borderColor: "#007FFF",
                  borderWidth: 2,
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#777FFF",
                    fontSize: 16,
                    fontWeight: "700",
                  }}
                >
                  SELECT
                </Text>
              </Pressable>
            )}
          </Pressable>
        ))}
      </ScrollView>

      {selected.length > 0 ? (
        <Pressable
          onPress={() =>
            navigation.navigate("User", {
              oldPrice: route.params.oldPrice,
              newPrice: route.params.newPrice,
              name: route.params.name,
              children: route.params.children,
              adults: route.params.adults,
              rating: route.params.rating,
              startDate: route.params.startDate,
              endDate: route.params.endDate,
            })
          }
          style={{
            backgroundColor: "#007FFF",
            padding: 8,
            marginBottom: 30,
            borderRadius: 3,
            marginHorizontal: 15,
          }}
        >
          <Text
            style={{ textAlign: "center", color: "white", fontWeight: "bold" }}
          >
            Reserve
          </Text>
        </Pressable>
      ) : null}
    </>
  );
};

export default RoomsScreen;

const styles = StyleSheet.create({});
