import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { COLORS, SPACE, RADIUS, TYPO } from '../styles/tokens';

export default function DiaryCard({
  entry,
  isLiked,
  onPress,
  onLike,
  variant = 'list',
}) {
  return (
    <View style={[styles.card, variant === 'grid' && styles.cardGrid]}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#e5e7eb' }}
        style={({ pressed }) => [styles.entry, pressed && styles.pressed]}
        accessible
        accessibilityRole="button"
        accessibilityLabel={`Entri ${entry.title} tanggal ${entry.date}`}
      >
        <Image source={entry.moodImage} style={styles.mood} />
        <View style={styles.content}>
          <Text style={styles.title} numberOfLines={1}>{entry.title}</Text>
          <Text style={styles.date}>{entry.date}</Text>
          <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
            {entry.preview}
          </Text>
        </View>
      </Pressable>
      <View style={styles.actions}>
        <Pressable
          onPress={() => onLike(entry.id)}
          style={styles.likeButton}
          accessibilityRole="button"
          accessibilityLabel={isLiked ? `Batalkan suka ${entry.title}` : `Sukai ${entry.title}`}
          accessibilityState={{ selected: isLiked }}
        >
          <Text style={[styles.likeIcon, isLiked && styles.likedIcon]}>
            {isLiked ? '♥' : '♡'}
          </Text>
          <Text style={[styles.likeText, isLiked && styles.likedText]}>
            {isLiked ? 'Disukai' : 'Suka'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: SPACE.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },
  cardGrid: { flex: 1 },
  entry: { flexDirection: 'row', gap: SPACE.m },
  pressed: { opacity: 0.88 },
  mood: {
    width: 64,
    height: 64,
    borderRadius: RADIUS.avatar,
    backgroundColor: '#eef2ff',
  },
  content: { flex: 1 },
  actions: { alignItems: 'flex-end' },
  title: { fontSize: TYPO.title, fontWeight: '700', color: COLORS.text },
  date: { fontSize: TYPO.caption, color: COLORS.muted, marginBottom: 6 },
  preview: { fontSize: TYPO.body, color: COLORS.text },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE.xs,
    marginTop: SPACE.xs,
    paddingVertical: SPACE.xs,
    paddingRight: SPACE.s,
  },
  likeIcon: { color: COLORS.muted, fontSize: 18 },
  likedIcon: { color: '#e11d48' },
  likeText: { color: COLORS.muted, fontSize: TYPO.caption, fontWeight: '600' },
  likedText: { color: '#be123c' },
});
