import React, { useMemo } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, featuredProperty, properties } from '../data/propertyData';

export default function PropertyDetailScreen({ navigation, route }) {
  const property = useMemo(() => route.params?.property || featuredProperty || properties[0], [route.params]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} contentContainerStyle={styles.galleryRow}>
          {property.gallery.map((image) => (
            <Image key={image} source={{ uri: image }} style={styles.galleryImage} />
          ))}
        </ScrollView>

        <Text style={styles.badge}>{property.badge}</Text>
        <Text style={styles.title}>{property.address}</Text>
        <Text style={styles.meta}>{property.suburb} • {property.price}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statCard}><Text style={styles.statValue}>{property.beds}</Text><Text style={styles.statLabel}>Beds</Text></View>
          <View style={styles.statCard}><Text style={styles.statValue}>{property.baths}</Text><Text style={styles.statLabel}>Baths</Text></View>
          <View style={styles.statCard}><Text style={styles.statValue}>{property.cars}</Text><Text style={styles.statLabel}>Cars</Text></View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{property.description}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Property Features</Text>
          {property.features.map((feature) => (
            <Text key={feature} style={styles.feature}>• {feature}</Text>
          ))}
        </View>

        <Pressable style={styles.primaryButton} onPress={() => navigation.navigate('Inspection', { property })}>
          <Text style={styles.primaryButtonText}>Book Inspection</Text>
        </Pressable>

        <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Enquiry', { property })}>
          <Text style={styles.secondaryButtonText}>✉️ Enquire About This Property</Text>
        </Pressable>

        <View style={styles.agentCard}>
          <View style={styles.agentAvatar}><Text style={styles.agentAvatarText}>{property.agent.name.split(' ').map((part) => part[0]).join('')}</Text></View>
          <View>
            <Text style={styles.agentName}>{property.agent.name}</Text>
            <Text style={styles.agentTitle}>{property.agent.title}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 18 },
  galleryRow: { gap: 12 },
  galleryImage: { width: 320, height: 240, borderRadius: 28 },
  badge: { color: colors.accent, fontSize: 12, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 1 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  meta: { color: colors.textMuted, fontSize: 15 },
  statsRow: { flexDirection: 'row', gap: 10 },
  statCard: { flex: 1, backgroundColor: colors.surfaceAlt, borderRadius: 18, borderWidth: 1, borderColor: colors.border, padding: 14, alignItems: 'center' },
  statValue: { color: colors.primary, fontSize: 20, fontWeight: '800' },
  statLabel: { color: colors.textMuted, marginTop: 4, fontSize: 12 },
  section: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 24, padding: 18, gap: 10 },
  sectionTitle: { color: colors.text, fontSize: 22, fontWeight: '800' },
  description: { color: colors.textMuted, fontSize: 15, lineHeight: 24 },
  feature: { color: colors.text, fontSize: 15, lineHeight: 24 },
  primaryButton: { backgroundColor: colors.primary, paddingVertical: 16, borderRadius: 18, alignItems: 'center' },
  primaryButtonText: { color: colors.surface, fontWeight: '800', fontSize: 15 },
  secondaryButton: { backgroundColor: colors.surfaceAlt, paddingVertical: 16, borderRadius: 18, alignItems: 'center', borderWidth: 1, borderColor: colors.border },
  secondaryButtonText: { color: colors.text, fontWeight: '700', fontSize: 15 },
  agentCard: { flexDirection: 'row', alignItems: 'center', gap: 14, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 24, padding: 18 },
  agentAvatar: { width: 52, height: 52, borderRadius: 26, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
  agentAvatarText: { color: colors.surface, fontWeight: '800', fontSize: 18 },
  agentName: { color: colors.text, fontSize: 18, fontWeight: '800' },
  agentTitle: { color: colors.textMuted, fontSize: 14, marginTop: 4 },
});
