import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface FloatingHelpButtonProps {
  onPress?: () => void;
  text?: string;
  imageSource?: any;
  bottom?: number;
}

export const FloatingHelpButton: React.FC<FloatingHelpButtonProps> = ({ onPress, imageSource, bottom = 24 }) => {
  return (
    <View style={[styles.container, { bottom }]} pointerEvents="box-none">
      <TouchableOpacity style={styles.bubble} onPress={onPress} activeOpacity={0.85}>
        {imageSource && <Image source={imageSource} style={styles.image} resizeMode="contain" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 24,
    right: 16,
    zIndex: 9999,
    alignItems: 'flex-end',
  },
  bubble: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    color: '#2D3A4A',
    fontSize: 15,
    fontWeight: '600',
    marginRight: 8,
  },
  image: {
    width: 40,
    height: 40,
  },
});