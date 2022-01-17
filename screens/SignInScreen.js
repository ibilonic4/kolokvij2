import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import * as Google from "expo-google-app-auth";

export function SignInScreen({ route, navigation }) {
    const handleGoogleSignIn = () => {
      const config = {
        iosClientId:
          "50:41:67:66:D9:E7:33:EA:38:34:AA:6B:67:14:4C:AA:5F:36:C3:98",
        androidClientId:
          "34492508694-2kjbf0npeaffc06vfoq3a00gftb5hk16.apps.googleusercontent.com",
        scopes: ["profile", "email"],
      };

      Google.logInAsync(config)
      .then((result) => {
        const { type, user } = result;
        if (type == "success") {
          const { email, name, photoUrl } = user;
          console.log("Signin successfull");
          setTimeout(
            () => navigation.navigate("Wines", { email, name, photoUrl }),
            1000
          );
        } else {
          console.log("Siging not successfull");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <Button
          title="Google SignIn"
          onPress={handleGoogleSignIn}
          style={styles.button}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonContainer: {
      backgroundColor: "#1ecbe1",
    },
    button: {
      color: "black",
      width: 200,
      height: 200,
    },
  });