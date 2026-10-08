import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({
  title,
  date,
  preview,
  moodImage,
  accentColor = '#fbbf24',
}) {
  return (
    <View
      style={[
        styles.card,
        {
          borderColor: accentColor,
          backgroundColor: `${accentColor}22`,
        },
      ]}
    >
      <Image source={moodImage} style={styles.mood} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1.5,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 18,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 4,
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
    lineHeight: 20,
    color: '#374151',
  },
});
