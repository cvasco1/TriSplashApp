import { StyleSheet, Text, View } from "react-native";

export default function Partidos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Próximos Partidos de La Tri 🇪🇨</Text>

      <View style={styles.card}>
        <Text style={styles.match}>🇪🇨 Ecuador vs 🇨🇮 Costa de Marfil</Text>
        <Text style={styles.date}>14 de junio de 2026</Text>
        <Text style={styles.time}>🕕 18:00 (Hora de Ecuador)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.match}>🇪🇨 Ecuador vs 🇨🇼 Curazao</Text>
        <Text style={styles.date}>20 de junio de 2026</Text>
        <Text style={styles.time}>🕘 19:00 (Hora de Ecuador)</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.match}>🇪🇨 Ecuador vs 🇩🇪 Alemania</Text>
        <Text style={styles.date}>25 de junio de 2026</Text>
        <Text style={styles.time}>🕒 15:00 (Hora de Ecuador)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#003893", // azul inspirado en la bandera de Ecuador
    textAlign: "center",
    marginBottom: 30,
  },

  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
  },

  match: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  date: {
    marginTop: 8,
    fontSize: 15,
    color: "#666",
  },

  time: {
  marginTop: 5,
  fontSize: 15,
  color: "#003893",
  fontWeight: "bold",
  },

});