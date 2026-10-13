import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from 'react-native';

import DiaryCard from '../components/DiaryCard';
import DiaryDetailModal from '../components/DiaryDetailModal';

import {
  COLORS,
  SPACE,
  TYPO,
  BREAKPOINTS,
} from '../styles/tokens';


// ========================================
// DATA DIARY
// ========================================

const DATA = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Bangun lebih pagi…',
    body:
      'Hari ini aku bangun lebih pagi dan berjalan kaki selama 20 menit. Udara terasa sejuk dan suasana pagi sangat tenang.',
    moodUri: 'https://picsum.photos/seed/happy/200',
    heroUri: 'https://picsum.photos/seed/happyhero/800/450',
  },

  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul…',
    body:
      'Hari ini cukup produktif. Saya menyelesaikan modul praktikum dan berdiskusi dengan tim mengenai pengembangan aplikasi.',
    moodUri: 'https://picsum.photos/seed/focus/200',
    heroUri: 'https://picsum.photos/seed/focushero/800/450',
  },

  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Membaca buku…',
    body:
      'Sore ini saya menikmati waktu di taman sambil membaca buku. Suasana senja terasa tenang dan menyenangkan.',
    moodUri: 'https://picsum.photos/seed/calm/200',
    heroUri: 'https://picsum.photos/seed/calmhero/800/450',
  },
];


// ========================================
// KOMPONEN UTAMA
// ========================================

export default function DiaryListScreen() {

  // Mendapatkan lebar layar secara otomatis
  const { width } = useWindowDimensions();

  // Jika lebar layar >= 600 px, gunakan 2 kolom
  const twoCols = width >= BREAKPOINTS.tablet;

  // Menyimpan diary yang sedang dipilih
  const [selected, setSelected] = useState(null);


  // ========================================
  // RENDER SETIAP ITEM DIARY
  // ========================================

  const renderItem = ({ item }) => (
    <View
      style={[
        styles.itemWrap,
        twoCols && styles.itemWrap2,
      ]}
    >
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        variant={twoCols ? 'grid' : 'list'}
        onPress={() => setSelected(item)}
      />
    </View>
  );


  // ========================================
  // KEY UNTUK PERUBAHAN JUMLAH KOLOM
  // ========================================

  const keyForCols = useMemo(
    () => (twoCols ? 'grid2' : 'list1'),
    [twoCols]
  );


  // ========================================
  // TAMPILAN
  // ========================================

  return (
    <View style={styles.container}>

      <Text style={styles.header}>
        Buku Harian
      </Text>

      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}

        columnWrapperStyle={
          twoCols
            ? { gap: SPACE.m }
            : undefined
        }

        contentContainerStyle={{
          padding: SPACE.l,
          gap: SPACE.m,
          paddingTop: SPACE.m,
        }}

        ListEmptyComponent={
          <Text style={styles.empty}>
            Belum ada entri.
          </Text>
        }
      />


      {/* MODAL DETAIL DIARY */}

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />

    </View>
  );
}


// ========================================
// STYLE
// ========================================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  header: {
    fontSize: TYPO.h1,
    fontWeight: '700',
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
    color: COLORS.text,
  },

  itemWrap: {
    flex: 1,
  },

  itemWrap2: {
    flex: 1 / 2,
  },

  empty: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 40,
  },

});