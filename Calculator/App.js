import { StatusBar } from "expo-status-bar";
import React, { useState, useAlku } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Calculator from "./Calculator";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.otsikko}>Calculator!</Text>
      <Button
        title="Historia"
        onPress={() =>
          navigation.navigate("Historia", { historia: "tietoja siirretaan" })
        }
      />
    </View>
  );
}

function HistoryScreen({ route, navigation }) {
  const { historia } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.otsikko}>Historia!</Text>
      <Text>{historia}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator with pages" component={HomeScreen} />
        <Stack.Screen name="Historia" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  otsikko: {
    fontWeight: "bold",
    margin: 10,
    padding: 5,
  },
  head: {
    fontSize: 20,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    margin: 5,
    width: "50%",
  },
  buttonit: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 5,
    margin: 5,
  },
});
