import { FloatingHelpButton } from '@/components/FloatingHelpButton';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const ASSISTANT = require('@/assets/images/icon-help.png');

export default function HorarioScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.text}>Horario</Text>
        </View>
        <FloatingHelpButton text="¿Necesitas Ayuda?" imageSource={ASSISTANT} onPress={() => {}} bottom={80} />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { fontSize: 22, fontWeight: 'bold' }
});