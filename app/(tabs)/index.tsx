import { ActionItem } from '@/components/ActionItem';
import { FloatingHelpButton } from '@/components/FloatingHelpButton';
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');

// =====================
// PERSONALIZA AQUÍ TUS IMÁGENES PRINCIPALES
// =====================
const LOGO = require('@/assets/images/icon.png'); // Logo institucional
const BANNER = require('@/assets/images/banner-uce.jpg'); // Banner principal
const ASSISTANT = require('@/assets/images/icon-help.png'); // Asistente virtual
const USER_NAME = 'Sebastian Carrera';

// =====================
// ACCIONES FRECUENTES: Íconos fieles a la imagen original
// =====================
// Puedes cambiar iconType a 'FontAwesome' si quieres usar esa librería
const ACTIONS = [
  { iconName: 'description', iconType: 'MaterialIcons' as const, label: 'Matrícula' },
  { iconName: 'directions-bus', iconType: 'MaterialIcons' as const, label: 'Transporte' },
  { iconName: 'settings', iconType: 'MaterialIcons' as const, label: 'Procesos' },
  { iconName: 'star', iconType: 'MaterialIcons' as const, label: 'Oportunidades' },
  { iconName: 'place', iconType: 'MaterialIcons' as const, label: 'Croquis UCE' },
  { iconName: 'event', iconType: 'MaterialIcons' as const, label: 'Actividades' },
  { iconName: 'sticky-note', iconType: 'FontAwesome' as const, label: 'Apuntes' },
  { iconName: 'help-outline', iconType: 'MaterialIcons' as const, label: 'Ayuda' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, position: 'relative' }}>
        {/* Encabezado curvo con logo y dark mode */}
        <View style={styles.headerContainer}>
          <View style={styles.headerBg} />
          <View style={styles.headerContent}>
            <TouchableOpacity style={styles.darkModeBtn} activeOpacity={0.7}>
              <Text style={styles.darkModeText}>Dark Mode</Text>
              <Text style={styles.moonIcon}>🌙</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Bienvenida y usuario */}
          <Image source={LOGO} style={styles.logo} resizeMode="contain" />
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeTitle}>Bienvenido al Sistema{"\n"}Académico</Text>
            <View style={styles.userRow}>
              <Text style={styles.userIcon}>👤</Text>
              <Text style={styles.userName}>{USER_NAME}</Text>
            </View>
          </View>
          {/* Banner principal */}
          <View style={styles.bannerContainer}>
            <Image source={BANNER} style={styles.bannerImg} resizeMode="cover" />
          </View>
          {/* Acciones frecuentes */}
          <View style={styles.actionsSection}>
            <Text style={styles.actionsTitle}>ACCIONES MAS FRECUENTES</Text>
            <View style={styles.actionsGrid}>
              {ACTIONS.map((item, idx) => (
                <ActionItem
                  key={item.label}
                  iconName={item.iconName}
                  iconType={item.iconType}
                  label={item.label}
                  onPress={() => {}}
                />
              ))}
            </View>
          </View>
        </ScrollView>
        <FloatingHelpButton
          onPress={() => {}}
          text="¿Necesitas Ayuda?"
          imageSource={ASSISTANT}
          bottom={80}
        />
      </View>
    </SafeAreaView>
  );
}

const HEADER_HEIGHT = width * 0.32;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F6F8FB',
  },
  headerContainer: {
    height: HEADER_HEIGHT,
    width: '100%',
    position: 'relative',
    backgroundColor: 'transparent',
    marginBottom: 8,
  },
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#1976D2',
    borderBottomRightRadius: width * 0.25,
    borderBottomLeftRadius: width * 0.25,
    borderBottomWidth: 6,
    borderBottomColor: '#D32F2F',
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.18,
    shadowRadius: 12,
    elevation: 10,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 2,
    marginTop: 8,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 4,
  },
  darkModeBtn: {
    position: 'absolute',
    right: 24,
    top: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.13)',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  darkModeText: {
    color: '#fff',
    fontSize: 13,
    marginRight: 4,
    fontWeight: '600',
  },
  moonIcon: {
    fontSize: 18,
    color: '#fff',
  },
  scrollContent: {
    paddingBottom: 120,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 6,
  },
  welcomeTitle: {
    color: '#222B45',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
    letterSpacing: 0.2,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  userIcon: {
    fontSize: 18,
    marginRight: 6,
  },
  userName: {
    fontSize: 16,
    color: '#222B45',
    fontWeight: '600',
  },
  bannerContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#E0E0E0',
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.13,
    shadowRadius: 8,
  },
  bannerImg: {
    width: '100%',
    height: width * 0.32,
    resizeMode: 'cover',
  },
  actionsSection: {
    marginTop: 8,
    paddingHorizontal: 12,
  },
  actionsTitle: {
    fontSize: 14,
    color: '#222B45',
    fontWeight: '700',
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 2,
    paddingBottom: 8,
  },
});
