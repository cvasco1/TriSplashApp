import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require("../../assets/images/fondo_amarillo.png")}
      style={styles.background}
    >
      {/* Logo superior izquierdo */}
      <Image
        source={require("../../assets/images/logo_izquierdo.png")}
        style={styles.logo}
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Bienvenido a Ecuador
        </Text>

        <Text style={styles.subtitle}>
          Explora nuestra cultura, paisajes y tradiciones.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  logo: {
    position: "absolute",
    top: 60,
    left: 20,
    width: 70,
    height: 70,
    resizeMode: "contain",
    zIndex: 10,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.25)",
    paddingHorizontal: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },
});