import React, { useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';
import EntryForm from '../components/EntryForm';
import SearchBar from '../components/SearchBar';
import { COLORS, SPACE, TYPO, BREAKPOINTS } from '../styles/tokens';

const MOODS = [
  { id: 'happy', label: 'Senang', image: require('../../assets/moods/happy.png') },
  { id: 'calm', label: 'Tenang', image: require('../../assets/moods/calm.png') },
  { id: 'focused', label: 'Fokus', image: require('../../assets/moods/focused.png') },
];

const INITIAL_ENTRIES = [
  {
    id: '1',
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Bangun lebih pagi dan menikmati suasana yang sejuk.',
    body:
      'Hari ini aku bangun lebih pagi dan berjalan kaki selama 20 menit. Udara terasa sejuk dan suasana pagi sangat tenang.',
    moodImage: MOODS[0].image,
  },
  {
    id: '2',
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul dan berdiskusi bersama tim.',
    body:
      'Hari ini cukup produktif. Saya menyelesaikan modul praktikum dan berdiskusi dengan tim mengenai pengembangan aplikasi.',
    moodImage: MOODS[2].image,
  },
  {
    id: '3',
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Membaca buku di taman saat senja.',
    body:
      'Sore ini saya menikmati waktu di taman sambil membaca buku. Suasana senja terasa tenang dan menyenangkan.',
    moodImage: MOODS[1].image,
  },
];

function getLocalDate() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${now.getFullYear()}-${month}-${day}`;
}

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [entries, setEntries] = useState(INITIAL_ENTRIES);
  const [query, setQuery] = useState('');
  const [likedIds, setLikedIds] = useState([]);
  const [selected, setSelected] = useState(null);
  const nextEntryId = useRef(1);

  const visibleEntries = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    if (!normalizedQuery) return entries;
    return entries.filter((entry) =>
      `${entry.title} ${entry.body} ${entry.date}`
        .toLocaleLowerCase()
        .includes(normalizedQuery)
    );
  }, [entries, query]);

  const addEntry = ({ title, body, moodId }) => {
    const mood = MOODS.find((item) => item.id === moodId);
    if (!mood) {
      throw new Error(`Suasana diary tidak dikenal: ${moodId}`);
    }

    const newEntry = {
      id: `new-${nextEntryId.current}`,
      title,
      body,
      preview: body,
      date: getLocalDate(),
      moodImage: mood.image,
    };
    nextEntryId.current += 1;
    setEntries((currentEntries) => [newEntry, ...currentEntries]);
  };

  const toggleLike = (entryId) => {
    setLikedIds((currentIds) =>
      currentIds.includes(entryId)
        ? currentIds.filter((id) => id !== entryId)
        : [...currentIds, entryId]
    );
  };

  const renderItem = ({ item }) => (
    <View style={[styles.itemWrap, twoCols && styles.itemWrap2]}>
      <DiaryCard
        entry={item}
        isLiked={likedIds.includes(item.id)}
        onLike={toggleLike}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  const keyForCols = useMemo(() => (twoCols ? 'grid2' : 'list1'), [twoCols]);

  return (
    <View style={styles.container}>
      <FlatList
        key={keyForCols}
        data={visibleEntries}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? styles.columnWrapper : undefined}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.headerContent}>
            <Text style={styles.header}>Buku Harian</Text>
            <Text style={styles.subtitle}>Catat momen dan suasana hatimu.</Text>
            <SearchBar onChange={setQuery} />
            <EntryForm moods={MOODS} onSubmit={addEntry} />
            <Text style={styles.listHeading}>Entri diary</Text>
          </View>
        }
        ListEmptyComponent={
          <Text style={styles.empty}>Tidak ada entri yang cocok.</Text>
        }
      />
      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  listContent: {
    padding: SPACE.l,
    paddingTop: SPACE.m,
    paddingBottom: SPACE.xl,
    gap: SPACE.m,
  },
  headerContent: { gap: SPACE.s, marginBottom: SPACE.s },
  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    color: COLORS.text,
  },
  subtitle: {
    marginTop: -SPACE.s,
    marginBottom: SPACE.s,
    color: COLORS.muted,
    fontSize: TYPO.body,
  },
  listHeading: {
    marginTop: SPACE.s,
    color: COLORS.text,
    fontSize: TYPO.title,
    fontWeight: '700',
  },
  itemWrap: { marginBottom: SPACE.m },
  itemWrap2: { flex: 1 },
  columnWrapper: { gap: SPACE.m },
  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: SPACE.xl,
  },
});
