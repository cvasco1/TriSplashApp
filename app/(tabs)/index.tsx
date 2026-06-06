import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const verJugadores = () => {
  setModalVisible(true);
  };

  return (
  <>
    <ImageBackground
      source={require("../../assets/images/fondo_amarillo.png")}
      style={styles.background}
    >
      <Image
        source={require("../../assets/images/logo_izquierdo.png")}
        style={styles.logo}
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>
          Selección de Ecuador 🇪🇨
        </Text>

        <Text style={styles.subtitle}>
          Explora nuestra cultura, paisajes y tradiciones.
        </Text>

        <View style={styles.infoContainer}>
          <Text style={styles.info}>
            👨‍🏫 Entrenador: Sebastián Beccacece
          </Text>

          <Text style={styles.info}>
            🌎 Participaciones en Mundiales: 5
          </Text>

          <Text style={styles.info}>
            🏟️ Estadio Principal: Rodrigo Paz Delgado
          </Text>

          <Text style={styles.info}>
            ⭐ Mejor participación: Octavos de final (2006)
          </Text>

          <Text style={styles.info}>
            🏆 Apodo: La Tri
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>
            Ver mejores jugadores actuales
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>

    <Modal
      visible={modalVisible}
      transparent={true}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>

          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>

          <Text style={styles.modalTitle}>
            ⭐ Mejores Jugadores Actuales
          </Text>

          <Text style={styles.player}>🇪🇨 Moisés Caicedo</Text>
          <Text style={styles.player}>🇪🇨 Willian Pacho</Text>
          <Text style={styles.player}>🇪🇨 Piero Hincapié</Text>
          <Text style={styles.player}>🇪🇨 Kendry Páez</Text>
          <Text style={styles.player}>🇪🇨 Enner Valencia</Text>

        </View>
      </View>
    </Modal>
  </>
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
    marginBottom: 25,
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },

  infoContainer: {
    width: "100%",
    backgroundColor: "rgba(255,255,255,0.15)",
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
  },

  info: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
  },

  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalOverlay: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0,0,0,0.6)",
},

modalContainer: {
  width: "90%",
  backgroundColor: "#fff",
  borderRadius: 20,
  padding: 25,
},

closeButton: {
  position: "absolute",
  top: 15,
  right: 15,
  zIndex: 10,
},

closeText: {
  fontSize: 24,
  fontWeight: "bold",
  color: "#000",
},

modalTitle: {
  fontSize: 24,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 20,
  color: "#003893",
},

player: {
  fontSize: 18,
  marginBottom: 12,
  color: "#333",
},

});