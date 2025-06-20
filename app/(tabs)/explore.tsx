import { FloatingHelpButton } from "@/components/FloatingHelpButton";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const LOGO = require("@/assets/images/icon.png");
const ASSISTANT = require("@/assets/images/icon-help.png");
// Puedes agregar aquí una imagen de colibrí si la tienes, si no, deja vacío el centro del círculo
// const COLIBRI = require('@/assets/images/colibri.png');

export default function ExploreScreen() {
  const [open, setOpen] = useState<"empresas" | "proyectos" | null>("empresas");

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <View style={styles.headerBg} />
        <View style={styles.headerContent}></View>
      </View>
      <Text style={styles.headerTitle}>Mis Cursos</Text>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Card resumen malla */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Malla Completada</Text>
          <View style={styles.mallaRow}>
            {/* Indicador circular con colibrí */}
            <View style={styles.progressCircleWrap}>
              <View style={styles.progressCircleBg}>
                <View style={styles.progressCircleFg}>
                </View>
                <Text style={styles.progressPercent}>88.4%</Text>
              </View>
              <Text style={styles.materiasAprobadas}>
                Materias Aprobadas:{" "}
                <Text style={{ fontWeight: "bold" }}>46/52</Text>
              </Text>
            </View>
            {/* Leyenda */}
            <View style={styles.leyendaWrap}>
              <Text style={styles.leyendaTitle}>Materias en curso</Text>
              <View style={styles.leyendaItem}>
                <View
                  style={[styles.leyendaDot, { backgroundColor: "#2ECC40" }]}
                />
                <Text style={styles.leyendaText}>Formación de empresas</Text>
              </View>
              <View style={styles.leyendaItem}>
                <View
                  style={[styles.leyendaDot, { backgroundColor: "#2ECC40" }]}
                />
                <Text style={styles.leyendaText}>Gestión de proyectos</Text>
              </View>
              <View style={styles.leyendaItem}>
                <View
                  style={[styles.leyendaDot, { backgroundColor: "#1976D2" }]}
                />
                <Text style={styles.leyendaText}>Legislación informática</Text>
              </View>
              <View style={styles.leyendaItem}>
                <View
                  style={[styles.leyendaDot, { backgroundColor: "#00BFFF" }]}
                />
                <Text style={styles.leyendaText}>Sistemas empresariales</Text>
              </View>
              <View style={styles.leyendaItem}>
                <View
                  style={[styles.leyendaDot, { backgroundColor: "#FF4136" }]}
                />
                <Text style={styles.leyendaText}>Programación móvil</Text>
              </View>
            </View>
          </View>
        </View>
        {/* Card Formación de empresas (expandida) */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cursoHeader}
            activeOpacity={0.8}
            onPress={() => setOpen(open === "empresas" ? null : "empresas")}
          >
            <View style={[styles.cursoDot, { backgroundColor: "#FF4136" }]} />
            <Text style={styles.cursoTitle}>Formación de empresas</Text>
            <MaterialIcons
              name={open === "empresas" ? "expand-less" : "expand-more"}
              size={26}
              color="#1976D2"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
          {open === "empresas" && (
            <View style={styles.cursoContent}>
              <View style={styles.cursoIndicadores}>
                {/* Asistencia */}
                <View style={styles.cursoIndicadorWrap}>
                  <View style={styles.cursoIndicadorCircle}>
                    <Text style={styles.cursoIndicadorPorc}>20%</Text>
                  </View>
                  <Text style={styles.cursoIndicadorLabel}>Asistencia</Text>
                  <Text style={styles.cursoIndicadorSub}>0/40 hr</Text>
                </View>
                {/* Promedio */}
                <View style={styles.cursoIndicadorWrap}>
                  <View
                    style={[
                      styles.cursoIndicadorCircle,
                      { borderColor: "#FF4136" },
                    ]}
                  >
                    <Text
                      style={[styles.cursoIndicadorPorc, { color: "#FF4136" }]}
                    >
                      17.5%
                    </Text>
                  </View>
                  <Text style={styles.cursoIndicadorLabel}>Promedio</Text>
                  <Text style={styles.cursoIndicadorSub}>3.4/20 pts</Text>
                </View>
                {/* Recordatorios */}
                <View style={styles.cursoRecordatorios}>
                  <Text style={styles.cursoRecordatorioTitle}>
                    Recordatorios:
                  </Text>
                  <Text style={styles.cursoRecordatorioItem}>
                    <Text style={styles.cursoRecordatorioFecha}>
                      07/05/2025
                    </Text>
                    {"\n"}Presentación matriz de Stakeholders
                  </Text>
                  <Text style={styles.cursoRecordatorioItem}>
                    <Text style={styles.cursoRecordatorioFecha}>
                      12/05/2025
                    </Text>
                    {"\n"}Presentación de metodologías ágiles
                  </Text>
                </View>
              </View>
            </View>
          )}
        </View>
        {/* Card Gestión de proyectos (plegada) */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cursoHeader}
            activeOpacity={0.8}
            onPress={() => setOpen(open === "proyectos" ? null : "proyectos")}
          >
            <View style={[styles.cursoDot, { backgroundColor: "#2ECC40" }]} />
            <Text style={styles.cursoTitle}>Gestión de proyectos</Text>
            <MaterialIcons
              name={open === "proyectos" ? "expand-less" : "expand-more"}
              size={26}
              color="#1976D2"
              style={{ marginLeft: "auto" }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 32 }} />
      </ScrollView>
      <FloatingHelpButton
        imageSource={ASSISTANT}
        onPress={() => {}}
        bottom={90}
        text="¿En qué puedo ayudarte?"
      />
    </SafeAreaView>
  );
}

const HEADER_HEIGHT = width * 0.32;
const CARD_RADIUS = 16;
const PROGRESS_SIZE = width * 0.28;
const INDICATOR_SIZE = width * 0.18;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F8FB",
  },
  headerContainer: {
    height: HEADER_HEIGHT,
    width: "100%",
    position: "relative",
    backgroundColor: "transparent",
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    zIndex: 2,
    marginTop: 8,
  },
  darkModeBtn: {
    position: "absolute",
    right: 24,
    top: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.13)",
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: "#fff",
  },
  darkModeText: {
    color: "#fff",
    fontSize: 13,
    marginRight: 4,
    fontWeight: "600",
  },
  moonIcon: {
    fontSize: 18,
    color: "#fff",
  },
  headerBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#1976D2",
    borderBottomRightRadius: width * 0.25,
    borderBottomLeftRadius: width * 0.25,
    borderBottomWidth: 6,
    borderBottomColor: "#D32F2F",
    zIndex: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 10,
  },
  headerCurve: {
    position: "absolute",
    top: HEADER_HEIGHT * 0.7,
    left: 0,
    width: "100%",
    height: 32,
    backgroundColor: "#D32F2F",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    zIndex: 2,
  },
  backBtn: {
    position: "absolute",
    left: 16,
    top: HEADER_HEIGHT * 0.45,
    zIndex: 3,
    padding: 6,
  },
  headerTitle: {
    color: "#666",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.5,
    zIndex: 3,
    textAlign: "center",
    marginTop: 8,
  },
  scrollContent: {
    paddingBottom: 120,
    paddingHorizontal: 12,
    alignItems: "stretch",
    backgroundColor: "#F6F8FB",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: CARD_RADIUS,
    padding: 16,
    marginBottom: 18,
    borderWidth: 2,
    borderColor: "#E0E0E0",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#1976D2",
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  mallaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  progressCircleWrap: {
    alignItems: "center",
    width: PROGRESS_SIZE + 8,
  },
  progressCircleBg: {
    width: PROGRESS_SIZE,
    height: PROGRESS_SIZE,
    borderRadius: PROGRESS_SIZE / 2,
    borderWidth: 8,
    borderColor: "#E0E0E0",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 6,
    backgroundColor: "#F8FAFF",
  },
  progressCircleFg: {
    width: PROGRESS_SIZE * 0.68,
    height: PROGRESS_SIZE * 0.68,
    borderRadius: PROGRESS_SIZE * 0.34,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: PROGRESS_SIZE * 0.16,
    left: PROGRESS_SIZE * 0.16,
    zIndex: 2,
  },
  progressPercent: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 22,
    color: "#1976D2",
    alignSelf: "center",
    top: "38%",
    left: 0,
    right: 0,
    textAlign: "center",
    zIndex: 3,
  },
  materiasAprobadas: {
    fontSize: 13,
    color: "#444",
    marginTop: 2,
    textAlign: "center",
  },
  leyendaWrap: {
    marginLeft: 12,
    flex: 1,
  },
  leyendaTitle: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#1976D2",
    marginBottom: 4,
    letterSpacing: 0.5,
  },
  leyendaItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  leyendaDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 7,
  },
  leyendaText: {
    fontSize: 13,
    color: "#444",
  },
  cursoHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  cursoDot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    marginRight: 8,
  },
  cursoTitle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
    letterSpacing: 0.5,
  },
  cursoContent: {
    marginTop: 10,
  },
  cursoIndicadores: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 18,
  },
  cursoIndicadorWrap: {
    alignItems: "center",
    marginRight: 8,
    minWidth: INDICATOR_SIZE + 8,
  },
  cursoIndicadorCircle: {
    width: INDICATOR_SIZE,
    height: INDICATOR_SIZE,
    borderRadius: INDICATOR_SIZE / 2,
    borderWidth: 6,
    borderColor: "#2ECC40",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 4,
    backgroundColor: "#fff",
  },
  cursoIndicadorPorc: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#2ECC40",
  },
  cursoIndicadorLabel: {
    fontSize: 13,
    color: "#444",
    fontWeight: "bold",
    textAlign: "center",
  },
  cursoIndicadorSub: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
  },
  cursoRecordatorios: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#F6F8FB",
    borderRadius: 10,
    padding: 8,
    minWidth: 90,
    maxWidth: 120,
  },
  cursoRecordatorioTitle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#1976D2",
    marginBottom: 2,
    textAlign: "right",
  },
  cursoRecordatorioItem: {
    fontSize: 11,
    color: "#444",
    marginBottom: 2,
    textAlign: "right",
  },
  cursoRecordatorioFecha: {
    color: "#1976D2",
    fontWeight: "bold",
  },
});
