import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../data/propertyData';

export default function EnquiryScreen({ route, navigation }) {
  const property = route.params?.property;
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.includes('@')) e.email = 'Enter a valid email';
    if (!form.message.trim()) e.message = 'Please write a message';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.successContainer}>
          <Text style={styles.successEmoji}>✉️</Text>
          <Text style={styles.successTitle}>Enquiry sent!</Text>
          <Text style={styles.successText}>
            Thanks {form.name} — the agent will be in touch at {form.email} within 1 business day.
          </Text>
          {property ? (
            <Text style={styles.successProperty}>{property.address}</Text>
          ) : null}

          <View style={styles.callout}>
            <Text style={styles.calloutTitle}>alphinium-forms addon</Text>
            <Text style={styles.calloutText}>
              Route property enquiries into ChatInstance /widget/leads and trigger automated follow-up
              sequences with agent-to-lead matching.
            </Text>
          </View>

          <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
            <Text style={styles.backButtonText}>← Back to property</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Enquire about this property</Text>
        {property ? (
          <View style={styles.propertyChip}>
            <Text style={styles.propertyChipText}>{property.address} · {property.suburb}</Text>
          </View>
        ) : null}

        <View style={styles.formCard}>
          <View style={styles.field}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Your full name"
              placeholderTextColor={colors.textMuted}
              value={form.name}
              onChangeText={(v) => update('name', v)}
            />
            {errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="name@example.com"
              placeholderTextColor={colors.textMuted}
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={(v) => update('email', v)}
            />
            {errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : null}
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Phone (optional)</Text>
            <TextInput
              style={styles.input}
              placeholder="+61 400 000 000"
              placeholderTextColor={colors.textMuted}
              keyboardType="phone-pad"
              value={form.phone}
              onChangeText={(v) => update('phone', v)}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Message</Text>
            <TextInput
              style={[styles.input, styles.textArea, errors.message && styles.inputError]}
              placeholder="I'm interested in this property and would like to know…"
              placeholderTextColor={colors.textMuted}
              multiline
              numberOfLines={5}
              value={form.message}
              onChangeText={(v) => update('message', v)}
            />
            {errors.message ? <Text style={styles.errorText}>{errors.message}</Text> : null}
          </View>

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Send Enquiry</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40, gap: 16 },
  heading: { fontSize: 26, fontWeight: '900', color: colors.text },
  propertyChip: { backgroundColor: colors.surfaceAlt, borderRadius: 12, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 14, paddingVertical: 8, alignSelf: 'flex-start' },
  propertyChipText: { color: colors.textMuted, fontSize: 13, fontWeight: '600' },
  formCard: { backgroundColor: colors.surface, borderRadius: 24, borderWidth: 1, borderColor: colors.border, padding: 20, gap: 14 },
  field: { gap: 6 },
  label: { color: colors.text, fontWeight: '700', fontSize: 14 },
  input: { backgroundColor: colors.surfaceAlt, borderRadius: 14, borderWidth: 1, borderColor: colors.border, paddingHorizontal: 16, paddingVertical: 12, color: colors.text, fontSize: 15 },
  textArea: { height: 120, textAlignVertical: 'top' },
  inputError: { borderColor: '#EF4444' },
  errorText: { color: '#EF4444', fontSize: 12 },
  submitButton: { backgroundColor: colors.primary, paddingVertical: 16, borderRadius: 16, alignItems: 'center', marginTop: 4 },
  submitButtonText: { color: colors.surface, fontWeight: '800', fontSize: 15 },
  successContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 32, gap: 14 },
  successEmoji: { fontSize: 52 },
  successTitle: { fontSize: 26, fontWeight: '900', color: colors.text },
  successText: { color: colors.textMuted, textAlign: 'center', lineHeight: 22, fontSize: 15 },
  successProperty: { color: colors.primary, fontWeight: '700', fontSize: 14 },
  callout: { backgroundColor: colors.surfaceAlt, borderRadius: 16, borderWidth: 1, borderColor: colors.border, padding: 16, width: '100%' },
  calloutTitle: { fontWeight: '800', color: colors.text, fontSize: 13, marginBottom: 4 },
  calloutText: { color: colors.textMuted, fontSize: 12, lineHeight: 18 },
  backButton: { paddingHorizontal: 20, paddingVertical: 12, borderRadius: 14, backgroundColor: colors.surfaceAlt, marginTop: 8 },
  backButtonText: { color: colors.text, fontWeight: '700' },
});
