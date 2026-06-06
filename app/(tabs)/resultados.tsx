import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Resultados() {
  const partidos = [
    { rival: "🇸🇦 Arabia Saudita", resultado: "2 - 1", fecha: "30 May 2026" },
    { rival: "🇳🇱 Países Bajos", resultado: "1 - 1", fecha: "31 Mar 2026" },
    { rival: "🇲🇦 Marruecos", resultado: "1 - 1", fecha: "27 Mar 2026" },
    { rival: "🇳🇿 Nueva Zelanda", resultado: "2 - 0", fecha: "18 Nov 2025" },
    { rival: "🇨🇦 Canadá", resultado: "0 - 0", fecha: "13 Nov 2025" },
    { rival: "🇲🇽 México", resultado: "1 - 1", fecha: "14 Oct 2025" },
    { rival: "🇺🇸 Estados Unidos", resultado: "1 - 1", fecha: "10 Oct 2025" },
    { rival: "🇦🇷 Argentina", resultado: "1 - 0", fecha: "09 Sep 2025" },
    { rival: "🇵🇾 Paraguay", resultado: "0 - 0", fecha: "04 Sep 2025" },
    { rival: "🇵🇪 Perú", resultado: "0 - 0", fecha: "10 Jun 2025" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        📊 Últimos 10 Resultados
      </Text>

      {partidos.map((partido, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.rival}>
            🇪🇨 Ecuador vs {partido.rival}
          </Text>

          <Text style={styles.resultado}>
            ⚽ Resultado: {partido.resultado}
          </Text>

          <Text style={styles.fecha}>
            📅 {partido.fecha}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#003893",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 3,
  },

  rival: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
  },

  resultado: {
    marginTop: 8,
    fontSize: 16,
    color: "#006400",
    fontWeight: "600",
  },

  fecha: {
    marginTop: 5,
    fontSize: 14,
    color: "#666",
  },
});