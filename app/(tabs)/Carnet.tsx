import { FloatingHelpButton } from "@/components/FloatingHelpButton";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const LOGO = require("@/assets/images/icon.png");
const ASSISTANT = require("@/assets/images/icon-help.png");
const PHOTO_PLACEHOLDER = require("@/assets/images/perfil.jpeg"); // Usa un logo como placeholder
const QR_PLACEHOLDER = require("@/assets/images/qr.png"); // Usa un logo como placeholder de QR

export default function CarnetScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Encabezado azul con logo y título */}
        <View style={styles.headerContainer}>
          <View style={styles.headerBg} />
          <View style={styles.headerContent}></View>
        </View>
        <Text style={styles.headerTitle}>CARNET ESTUDIANTIL DIGITAL</Text>
        <Image source={LOGO} style={styles.logo} resizeMode="contain" />
        {/* Bloque gris facultad */}
        <View style={styles.grayBlock}>
          <Text style={styles.grayBlockText}>
            FACULTAD DE INGENIERÍA Y CIENCIAS APLICADAS
          </Text>
        </View>
        {/* Foto y datos */}
        <View style={styles.photoSection}>
          <Image
            source={PHOTO_PLACEHOLDER}
            style={styles.photo}
            resizeMode="cover"
          />
          <Text style={styles.role}>ESTUDIANTE</Text>
          <Text style={styles.career}>SISTEMAS DE INFORMACIÓN</Text>
        </View>
        {/* Nombre */}
        <View style={styles.grayBlockName}>
          <Text style={styles.grayBlockNameText}>
            Sebastian André Carrera Chabla
          </Text>
        </View>
        {/* Cédula/Pasaporte */}
        <View style={styles.grayBlockRow}>
          <Text style={styles.grayBlockRowLabel}>C.I./PAS:</Text>
          <Text style={styles.grayBlockRowValue}>0706999075</Text>
        </View>
        {/* QR */}
        <View style={styles.qrSection}>
          <View style={styles.qrContainer}>
            <Image
              source={QR_PLACEHOLDER}
              style={styles.qrImage}
              resizeMode="contain"
            />
            <Image source={LOGO} style={styles.qrLogo} resizeMode="contain" />
          </View>
        </View>
      </ScrollView>
      {/* Botón flotante ayuda */}
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
const PHOTO_SIZE = width * 0.36;
const QR_SIZE = width * 0.36;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F8FB",
  },
  scrollContent: {
    paddingBottom: 120,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    zIndex: 2,
    marginTop: 8,
  },
  headerContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 8,
    position: "relative",
    height: HEADER_HEIGHT + 40,
    justifyContent: "flex-end",
  },
  headerBg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: HEADER_HEIGHT + 40,
    backgroundColor: "#1976D2",
    borderBottomRightRadius: width * 0.18,
    borderBottomLeftRadius: width * 0.18,
    zIndex: 1,
  },
  headerTitle: {
    color: "#666",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
    marginTop: 18,
    zIndex: 2,
    textAlign: "center",
  },
  logo: {
    width: 74,
    height: 74,
    borderRadius: 37,
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
    marginTop: 8,
    zIndex: 2,
  },
  grayBlock: {
    width: "100%",
    backgroundColor: "#888",
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  grayBlockText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    letterSpacing: 0.5,
  },
  photoSection: {
    alignItems: "center",
    marginTop: 18,
    marginBottom: 8,
  },
  photo: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#bbb",
    backgroundColor: "#eee",
    marginBottom: 10,
  },
  role: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#222",
    marginTop: 2,
    textAlign: "center",
  },
  career: {
    fontSize: 14,
    color: "#222",
    marginTop: 2,
    marginBottom: 2,
    textAlign: "center",
  },
  grayBlockName: {
    width: "100%",
    backgroundColor: "#888",
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 8,
  },
  grayBlockNameText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  grayBlockRow: {
    width: "100%",
    backgroundColor: "#888",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 28,
    marginTop: 2,
  },
  grayBlockRowLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  grayBlockRowValue: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
  qrSection: {
    alignItems: "center",
    marginTop: 18,
    marginBottom: 18,
  },
  qrContainer: {
    width: QR_SIZE,
    height: QR_SIZE,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
  },
  qrImage: {
    width: QR_SIZE * 0.92,
    height: QR_SIZE * 0.92,
    borderRadius: 12,
  },
  qrLogo: {
    position: "absolute",
    width: QR_SIZE * 0.28,
    height: QR_SIZE * 0.28,
    borderRadius: QR_SIZE * 0.14,
    top: "36%",
    left: "36%",
    borderWidth: 2,
    borderColor: "#fff",
    backgroundColor: "#fff",
  },
});
