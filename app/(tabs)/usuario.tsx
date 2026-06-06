import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Usuario() {
  return (
    <ImageBackground
      source={require("../../assets/images/logo.png")}
      style={styles.background}
    >
      {/* Logo superior izquierdo */}
      <Image
        source={require("../../assets/images/fef.png")}
        style={styles.logo}
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Bienvenido a La Tri 🇪🇨
        </Text>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>
            Iniciar Sesión
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupText}>
            Crear Cuenta
          </Text>
        </TouchableOpacity>
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
    top: 50,
    left: 15,
    width: 100,
    height: 100,
    resizeMode: "contain",
    zIndex: 10,
  },

  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 40,
    textAlign: "center",
  },

  loginButton: {
    width: "85%",
    backgroundColor: "#FFD100",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },

  loginText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },

  signupButton: {
    width: "85%",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#FFFFFF",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
  },

  signupText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});