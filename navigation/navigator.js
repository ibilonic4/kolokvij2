import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInScreen } from "../screens/SignInScreen";
import { WinesScreen } from "../screens/WinesScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ title: "SignIn screen" }}
        />
        <Stack.Screen
          name="Wines"
          component={WinesScreen}
          options={{ title: "Wines screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "SignIn") {
            iconName = focused ? "signin" : "home-outline";
          } else if (route.name === "Wines") {
            iconName = focused ? "wines" : "settings-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "green",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerTitle: "SignIn",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            paddingBottom: 5,
            color: "#1f4d29",
          },
          headerStyle: {
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            shadowColor: "transparent",
          },
          title: "SIGNIN",
          tabBarStyle: {
            paddingTop: 5,
          },
        }}
      />
      <Tab.Screen
        name="Wines"
        component={WinesScreen}
        options={{
          headerTitle: "Wines",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 25,
            paddingBottom: 5,
            color: "#1f4d29",
          },
          headerStyle: {
            borderBottomColor: "gray",
            borderBottomWidth: 0.2,
            shadowColor: "transparent",
          },
          title: "WINES",
          tabBarStyle: {
            paddingTop: 5,
          },
        }}
      />
    </Tab.Navigator>
  );
}