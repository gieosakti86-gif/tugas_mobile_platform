import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview:
      'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk dan pikiranku jauh lebih tenang.',
    moodImage: { uri: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=200&q=80' },
    accentColor: '#f59e0b',
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview:
      'Menyelesaikan modul praktikum dan berdiskusi dengan teman. Banyak insight baru yang membuat semangat kerja bertambah.',
    moodImage: { uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80' },
    accentColor: '#3b82f6',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview:
      'Menikmati senja sambil membaca buku favorit. Warna langit berubah lembut dan membuat hati terasa lebih damai.',
    moodImage: { uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=200&q=80' },
    accentColor: '#10b981',
  },
  {
    id: 4,
    title: 'Belajar Mandiri',
    date: '2025-10-03',
    preview:
      'Aku menyiapkan catatan untuk ujian dan mengulang materi sesuai jadwal. Saya merasa lebih siap dan fokus hari ini.',
    moodImage: { uri: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=200&q=80' },
    accentColor: '#8b5cf6',
  },
  {
    id: 5,
    title: 'Rileks Setelah Hujan',
    date: '2025-10-02',
    preview:
      'Setelah hujan sore, langit terlihat lebih cerah. Saya menulis refleksi dan menikmati waktu untuk sendiri sambil tenang.',
    moodImage: { uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80' },
    accentColor: '#f472b6',
  },
];

export default function DiaryListScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' }}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Halo, Aisyah</Text>
            <Text style={styles.subtitle}>Catatan harianku</Text>
          </View>
        </View>
        <Text style={styles.count}>{diaryEntries.length} entries</Text>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.headerTitle}>Buku Harian</Text>

        {diaryEntries.map((entry) => (
          <DiaryCard
            key={entry.id}
            title={entry.title}
            date={entry.date}
            preview={entry.preview}
            moodImage={entry.moodImage}
            accentColor={entry.accentColor}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 12,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  greeting: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 12,
    color: '#6b7280',
  },
  count: {
    fontSize: 12,
    color: '#475569',
    backgroundColor: '#e2e8f0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 16,
    paddingTop: 12,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
});
