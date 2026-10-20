import React, { useState } from 'react';
import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

export default function SearchBar({ onChange }) {
  const [value, setValue] = useState('');

  const updateValue = (nextValue) => {
    setValue(nextValue);
    onChange(nextValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.searchIcon}>⌕</Text>
      <TextInput
        value={value}
        onChangeText={updateValue}
        placeholder="Cari judul atau isi diary..."
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        accessibilityLabel="Cari entri diary"
        returnKeyType="search"
      />
      {value.length > 0 && (
        <Pressable
          onPress={() => updateValue('')}
          accessibilityRole="button"
          accessibilityLabel="Hapus pencarian"
          hitSlop={8}
        >
          <Text style={styles.clear}>×</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE.s,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
    paddingHorizontal: SPACE.m,
  },
  searchIcon: { color: COLORS.muted, fontSize: 24, lineHeight: 28 },
  input: { flex: 1, color: COLORS.text, fontSize: TYPO.body, paddingVertical: SPACE.s },
  clear: { color: COLORS.muted, fontSize: 24, lineHeight: 28 },
});
