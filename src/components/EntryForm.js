import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
import { COLORS, RADIUS, SPACE, TYPO } from '../styles/tokens';

export default function EntryForm({ moods, onSubmit }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [moodId, setMoodId] = useState(moods[0].id);
  const [error, setError] = useState('');

  const submit = () => {
    const trimmedTitle = title.trim();
    const trimmedBody = body.trim();
    if (!trimmedTitle || !trimmedBody) {
      setError('Judul dan cerita perlu diisi terlebih dahulu.');
      return;
    }

    onSubmit({ title: trimmedTitle, body: trimmedBody, moodId });
    setTitle('');
    setBody('');
    setError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Tulis entri baru</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Judul diary"
        placeholderTextColor={COLORS.muted}
        style={styles.input}
        accessibilityLabel="Judul diary baru"
        maxLength={80}
      />
      <TextInput
        value={body}
        onChangeText={setBody}
        placeholder="Ceritakan harimu..."
        placeholderTextColor={COLORS.muted}
        style={[styles.input, styles.bodyInput]}
        multiline
        textAlignVertical="top"
        accessibilityLabel="Cerita diary baru"
        maxLength={1000}
      />
      <Text style={styles.label}>Pilih suasana</Text>
      <View style={styles.moodOptions}>
        {moods.map((mood) => {
          const selected = moodId === mood.id;
          return (
            <Pressable
              key={mood.id}
              onPress={() => setMoodId(mood.id)}
              style={[styles.moodOption, selected && styles.moodSelected]}
              accessibilityRole="radio"
              accessibilityState={{ selected }}
              accessibilityLabel={`Suasana ${mood.label}`}
            >
              <Image source={mood.image} style={styles.moodImage} />
              <Text style={[styles.moodLabel, selected && styles.moodLabelSelected]}>
                {mood.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Pressable
        onPress={submit}
        style={({ pressed }) => [styles.submitButton, pressed && styles.submitPressed]}
        accessibilityRole="button"
      >
        <Text style={styles.submitText}>+ Tambahkan entri</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: SPACE.s,
    padding: SPACE.m,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.surface,
  },
  heading: { color: COLORS.text, fontSize: TYPO.title, fontWeight: '700' },
  input: {
    minHeight: 44,
    paddingHorizontal: SPACE.m,
    paddingVertical: SPACE.s,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    color: COLORS.text,
    fontSize: TYPO.body,
  },
  bodyInput: { minHeight: 76 },
  label: { color: COLORS.text, fontSize: TYPO.caption, fontWeight: '600' },
  moodOptions: { flexDirection: 'row', gap: SPACE.s },
  moodOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SPACE.xs,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingHorizontal: SPACE.s,
    paddingVertical: SPACE.xs,
  },
  moodSelected: { borderColor: COLORS.accent, backgroundColor: '#eff6ff' },
  moodImage: { width: 24, height: 24, borderRadius: 12 },
  moodLabel: { color: COLORS.muted, fontSize: TYPO.caption },
  moodLabelSelected: { color: COLORS.accent, fontWeight: '700' },
  error: { color: '#b91c1c', fontSize: TYPO.caption },
  submitButton: {
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: COLORS.accent,
    paddingHorizontal: SPACE.m,
  },
  submitPressed: { opacity: 0.85 },
  submitText: { color: '#fff', fontWeight: '700', fontSize: TYPO.body },
});
