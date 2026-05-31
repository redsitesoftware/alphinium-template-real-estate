import React, { useMemo, useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, featuredProperty, filters, properties } from '../data/propertyData';

export default function HomeScreen({ navigation }) {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Buy');

  const recentListings = useMemo(() => {
    return properties.filter((property) => {
      const matchesFilter =
        activeFilter === 'New' ? property.badge === 'New' : activeFilter === 'Buy' ? property.badge === 'For Sale' : property.badge === 'For Rent';
      const haystack = `${property.address} ${property.suburb}`.toLowerCase();
      return matchesFilter && (!query.trim() || haystack.includes(query.trim().toLowerCase()));
    });
  }, [activeFilter, query]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.brand}>Nova Properties</Text>
        <Text style={styles.subtitle}>Premium homes, city apartments, and executive leasing opportunities across Brisbane.</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Search suburb or postcode"
          placeholderTextColor={colors.textMuted}
          value={query}
          onChangeText={setQuery}
        />

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
          {filters.map((filter) => (
            <Pressable key={filter} style={[styles.filterPill, activeFilter === filter && styles.filterPillActive]} onPress={() => setActiveFilter(filter)}>
              <Text style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}>{filter}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <Pressable style={styles.heroCard} onPress={() => navigation.navigate('Property Detail', { property: featuredProperty })}>
          <Image source={{ uri: featuredProperty.image }} style={styles.heroImage} />
          <View style={styles.heroBody}>
            <Text style={styles.heroBadge}>{featuredProperty.badge}</Text>
            <Text style={styles.heroTitle}>{featuredProperty.address}</Text>
            <Text style={styles.heroMeta}>{featuredProperty.suburb} • {featuredProperty.price}</Text>
          </View>
        </Pressable>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent listings</Text>
          <Pressable onPress={() => navigation.navigate('Properties')}>
            <Text style={styles.sectionAction}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.grid}>
          {recentListings.slice(0, 4).map((property) => (
            <Pressable key={property.id} style={styles.gridCard} onPress={() => navigation.navigate('Property Detail', { property })}>
              <Image source={{ uri: property.image }} style={styles.gridImage} />
              <Text style={styles.gridBadge}>{property.badge}</Text>
              <Text style={styles.gridTitle}>{property.address}</Text>
              <Text style={styles.gridMeta}>{property.suburb} • {property.price}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 18 },
  brand: { color: colors.primary, fontSize: 32, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  searchInput: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 18, paddingHorizontal: 16, paddingVertical: 14, color: colors.text, fontSize: 15 },
  filterRow: { gap: 10, paddingRight: 20 },
  filterPill: { backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, paddingVertical: 10, borderRadius: 999 },
  filterPillActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  filterText: { color: colors.primary, fontWeight: '700' },
  filterTextActive: { color: colors.surface },
  heroCard: { backgroundColor: colors.surface, borderRadius: 28, overflow: 'hidden', borderWidth: 1, borderColor: colors.border },
  heroImage: { width: '100%', height: 240 },
  heroBody: { padding: 20 },
  heroBadge: { color: colors.accent, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  heroTitle: { color: colors.text, fontSize: 28, lineHeight: 34, fontWeight: '900', marginTop: 8 },
  heroMeta: { color: colors.textMuted, marginTop: 10, fontSize: 14 },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  sectionTitle: { color: colors.text, fontSize: 20, fontWeight: '800' },
  sectionAction: { color: colors.accent, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 14 },
  gridCard: { width: '47%', backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 22, overflow: 'hidden' },
  gridImage: { width: '100%', height: 120 },
  gridBadge: { color: colors.accent, fontSize: 11, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1, marginHorizontal: 12, marginTop: 12 },
  gridTitle: { color: colors.text, fontSize: 16, fontWeight: '800', marginHorizontal: 12, marginTop: 8, minHeight: 40 },
  gridMeta: { color: colors.textMuted, fontSize: 13, marginHorizontal: 12, marginTop: 8, marginBottom: 14 },
});
