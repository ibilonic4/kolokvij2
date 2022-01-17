import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";

export function WinesScreen({ route, navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { name } = route.params;
    const { email } = route.params;
    const { photoUrl } = route.params;

    const getSparklingWines = async () => {
        try {
          const response = await fetch(
            "https://api.sampleapis.com/wines/sparkling"
          );
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      useEffect(() => {
        getSparklingWines();
      }, []);




function handleSignInPress() {
  navigation.navigate("SignIn");
}


return (
    <View style={styles.screen}>
      <Text>Login successfull</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Image
                      style={styles.tinyLogo}
                      source={{ 
                        uri: `${photoUrl}`,
                      }}
                    />
            
      


      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
                <View style={styles.item}>
                  <View style={styles.image}>
                    <Image
                      style={styles.tinyLogo}
                      source={{
                        uri: `${item.image}`,
                      }}
                    />
                  </View>
                  <View style={styles.text}>
                    <Text>{item.id}</Text>
                    <Text>{item.winery}</Text>
                    <Text>{item.wine}</Text>
                    <Text>{item.location}</Text>
                    <Text>{item.rating.average}</Text>
                    <Text>{item.rating.reviews}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </View>
      <Button title="Go to the SignIn screen!" onPress={handleSignInPress} />
    </View>
  );

                    }

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    tinyLogo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    item: {
        flexDirection: "row",
        margin: 10,
    },
    text: {
        padding: 11,
    },
});

