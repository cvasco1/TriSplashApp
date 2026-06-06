import { router } from "expo-router";
import { useEffect, useRef } from "react";
import {
  Animated,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function SplashScreen() {
  const opacity = useRef(new Animated.Value(0)).current;
  const scale = useRef(new Animated.Value(1.3)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 2500,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.replace("/(tabs)");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedBg,
          { opacity, transform: [{ scale }] },
        ]}
      >
        <ImageBackground
          source={require("../assets/images/tri.png")}
          style={styles.background}
        />
      </Animated.View>
      
        <View style={styles.textContainer}>
          <Text style={styles.slogan}>
            Más que una selección, somos un país entero
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  animatedBg: {
    ...StyleSheet.absoluteFillObject,
  },

  background: {
    flex: 1,
  },

  textContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  slogan: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.5)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 4,
  },
});