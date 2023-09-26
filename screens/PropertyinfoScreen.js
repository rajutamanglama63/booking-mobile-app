import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { pixelNormalise } from "../components/Normalise";
import Amenities from "../components/Amenities";

const PropertyinfoScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${route.params.name}`,
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

  const difference = route.params.oldPrice - route.params.newPrice;
  const offerPrice = (Math.abs(difference) / route.params.oldPrice) * 100;
  return (
    <>
      <View>
        <ScrollView>
          <Pressable
            style={{ flexDirection: "row", flexWrap: "wrap", margin: 5 }}
          >
            {route.params.photos.slice(0, 5).map((photo) => (
              <View key={photo.id} style={{ margin: 6 }}>
                <Image
                  style={{
                    width: 120,
                    height: pixelNormalise(80),
                    borderRadius: pixelNormalise(4),
                  }}
                  source={{ uri: photo.image }}
                />
              </View>
            ))}
            <Pressable
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", marginLeft: 20 }}>
                show more
              </Text>
            </Pressable>
          </Pressable>

          <View
            style={{
              marginHorizontal: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                {route.params.name}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 5,
                }}
              >
                <MaterialIcons name="stars" size={24} color="green" />
                <Text>{route.params.rating}</Text>
                <View
                  style={{
                    backgroundColor: "#003580",
                    width: 100,
                    borderRadius: 5,
                    paddingVertical: 2,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 12,
                    }}
                  >
                    Genius Level
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                backgroundColor: "#17B169",
                paddingHorizontal: 6,
                paddingVertical: 4,
                borderRadius: 6,
              }}
            >
              <Text style={{ fontSize: 15, color: "white" }}>
                Travel sustinable
              </Text>
            </View>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <Text
            style={{
              marginTop: 10,
              fontSize: 17,
              fontWeight: "500",
              marginHorizontal: 12,
            }}
          >
            Price for 1 Night and {route.params.adults} adults
          </Text>

          <View
            style={{
              marginTop: 4,
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              marginHorizontal: 12,
            }}
          >
            <Text
              style={{
                color: "red",
                fontSize: 20,
                textDecorationLine: "line-through",
              }}
            >
              {route.params.oldPrice * route.params.adults}
            </Text>
            <Text style={{ fontSize: 20 }}>
              Rs {route.params.newPrice * route.params.adults}
            </Text>
          </View>

          <View
            style={{
              marginHorizontal: 12,
              marginTop: 7,
              backgroundColor: "green",
              paddingHorizontal: 4,
              paddingVertical: 5,
              width: 78,
              borderRadius: 4,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              {offerPrice.toFixed(0)} % OFF
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <View
            style={{
              flexDirection: "row",
              margin: 12,
              alignItems: "center",
              gap: 60,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check in
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.startDate}
              </Text>
            </View>

            <View>
              <Text
                style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}
              >
                Check out
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
              >
                {route.params.selectedDates.endDate}
              </Text>
            </View>
          </View>

          <View style={{ margin: 12 }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginBottom: 3 }}>
              Rooms and Guests
            </Text>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#007FFF" }}
            >
              {route.params.rooms} rooms {route.params.adults} adults{" "}
              {route.params.children} children
            </Text>
          </View>

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />

          <Amenities />

          <Text
            style={{
              borderColor: "#E0E0E0",
              borderWidth: 3,
              height: 1,
              marginTop: 15,
            }}
          />
        </ScrollView>

        <Pressable
          style={{
            backgroundColor: "#6CB4EE",
            position: "absolute",
            bottom: 20,
            padding: 15,
            width: "95%",
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            Select Availability
          </Text>
        </Pressable>
      </View>
    </>
  );
};

export default PropertyinfoScreen;

const styles = StyleSheet.create({});
