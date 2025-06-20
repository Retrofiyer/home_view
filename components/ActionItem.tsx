import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ActionItemProps {
  iconName?: string;
  iconType?: 'MaterialIcons' | 'FontAwesome';
  imageSource?: any;
  label: string;
  onPress?: () => void;
  backgroundColor?: string;
}

export const ActionItem: React.FC<ActionItemProps> = ({ iconName, iconType = 'MaterialIcons', imageSource, label, onPress, backgroundColor }) => {
  let IconComponent = MaterialIcons;
  if (iconType === 'FontAwesome') IconComponent = FontAwesome;

  return (
    <TouchableOpacity style={[styles.container, backgroundColor && { backgroundColor }]} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.iconWrapper}>
        {imageSource ? (
          <Image source={imageSource} style={styles.imgIcon} resizeMode="contain" />
        ) : (
          <IconComponent name={iconName as any} size={32} color={'#2D3A4A'} />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    minWidth: 70,
    minHeight: 80,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  iconWrapper: {
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgIcon: {
    width: 32,
    height: 32,
  },
  label: {
    fontSize: 13,
    textAlign: 'center',
    color: '#2D3A4A',
    fontWeight: Platform.OS === 'android' ? 'bold' : '600',
  },
}); 