import React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, properties } from '../data/propertyData';

export default function PropertyListScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Curated property collection</Text>
        <Text style={styles.subtitle}>Eight premium listings across sale, lease, and newly launched opportunities.</Text>

        {properties.map((property) => (
          <Pressable key={property.id} style={styles.card} onPress={() => navigation.navigate('Property Detail', { property })}>
            <Image source={{ uri: property.image }} style={styles.image} />
            <View style={styles.body}>
              <View style={styles.badgeRow}>
                <Text style={styles.badge}>{property.badge}</Text>
                <Text style={styles.price}>{property.price}</Text>
              </View>
              <Text style={styles.cardTitle}>{property.address}</Text>
              <Text style={styles.meta}>{property.suburb}</Text>
              <Text style={styles.stats}> {property.beds}    {property.baths}    {property.cars}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 16 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  card: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 24, overflow: 'hidden' },
  image: { width: '100%', height: 200 },
  body: { padding: 18 },
  badgeRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { color: colors.accent, fontWeight: '700', textTransform: 'uppercase', fontSize: 12, letterSpacing: 1 },
  price: { color: colors.primary, fontWeight: '800', fontSize: 16 },
  cardTitle: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 10 },
  meta: { color: colors.textMuted, fontSize: 14, marginTop: 8 },
  stats: { color: colors.text, fontSize: 15, marginTop: 12, fontWeight: '700' },
});
