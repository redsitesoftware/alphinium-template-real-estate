import React, { useMemo, useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors, featuredProperty, properties, timeSlots } from '../data/propertyData';

export default function InspectionScreen({ route }) {
  const property = useMemo(() => route.params?.property || featuredProperty || properties[0], [route.params]);
  const [selectedSlot, setSelectedSlot] = useState(timeSlots[0]);
  const [sent, setSent] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.screen} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Request an inspection</Text>
        <Text style={styles.subtitle}>{property.address} • {property.suburb}</Text>

        <View style={styles.formCard}>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor={colors.textMuted} />
          <TextInput style={styles.input} placeholder="Email" placeholderTextColor={colors.textMuted} keyboardType="email-address" />
          <TextInput style={styles.input} placeholder="Phone" placeholderTextColor={colors.textMuted} keyboardType="phone-pad" />

          <Text style={styles.slotLabel}>Select a time slot</Text>
          <View style={styles.slotGroup}>
            {timeSlots.map((slot) => (
              <Pressable key={slot} style={[styles.slotPill, selectedSlot === slot && styles.slotPillActive]} onPress={() => setSelectedSlot(slot)}>
                <Text style={[styles.slotText, selectedSlot === slot && styles.slotTextActive]}>{slot}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.primaryButton} onPress={() => setSent(true)}>
            <Text style={styles.primaryButtonText}>Request Inspection</Text>
          </Pressable>
        </View>

        {sent ? (
          <View style={styles.successCard}>
            <Text style={styles.successTitle}>Inspection requested</Text>
            <Text style={styles.successText}>We’ve reserved {selectedSlot} pending confirmation from the Nova Properties team.</Text>
          </View>
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 18 },
  title: { color: colors.text, fontSize: 30, lineHeight: 36, fontWeight: '900' },
  subtitle: { color: colors.textMuted, fontSize: 15 },
  formCard: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, borderRadius: 24, padding: 18, gap: 12 },
  input: { backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 13, color: colors.text, fontSize: 15 },
  slotLabel: { color: colors.text, fontSize: 16, fontWeight: '800', marginTop: 6 },
  slotGroup: { gap: 10 },
  slotPill: { backgroundColor: colors.surfaceAlt, borderWidth: 1, borderColor: colors.border, borderRadius: 16, paddingHorizontal: 14, paddingVertical: 12 },
  slotPillActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  slotText: { color: colors.primary, fontWeight: '700' },
  slotTextActive: { color: colors.surface },
  primaryButton: { marginTop: 8, backgroundColor: colors.accent, paddingVertical: 16, borderRadius: 16, alignItems: 'center' },
  primaryButtonText: { color: colors.surface, fontWeight: '800', fontSize: 15 },
  successCard: { backgroundColor: '#E9FBF5', borderWidth: 1, borderColor: '#B5EAD7', borderRadius: 24, padding: 18, gap: 8 },
  successTitle: { color: colors.success, fontSize: 20, fontWeight: '800' },
  successText: { color: colors.text, fontSize: 14, lineHeight: 22 },
});
