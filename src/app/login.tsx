import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleBack = () => {
    router.back();
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password screen
  };

  const handleLogin = () => {
    // Process login authentication
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}>
            <View style={styles.topContent}>
              {/* Back Arrow */}
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={handleBack}
                style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#18181B" />
              </TouchableOpacity>

              {/* Header Section */}
              <Text style={styles.title}>Welcome back.</Text>
              <Text style={styles.subtitle}>Sign in to continue your journey.</Text>

              {/* Form Inputs */}
              <View style={styles.formContainer}>
                <TextInput
                  value={emailOrPhone}
                  onChangeText={setEmailOrPhone}
                  placeholder="Email or phone"
                  placeholderTextColor="#A1A1AA"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  style={styles.input}
                />

                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Password"
                  placeholderTextColor="#A1A1AA"
                  secureTextEntry
                  autoCapitalize="none"
                  style={styles.input}
                />

                {/* Forgot Password Link */}
                <Pressable
                  onPress={handleForgotPassword}
                  style={styles.forgotPasswordButton}>
                  <Text style={styles.forgotPasswordText}>Forget Password</Text>
                </Pressable>
              </View>
            </View>

            {/* Bottom Log In Button */}
            <View style={styles.bottomSection}>
              <TouchableOpacity
                activeOpacity={0.85}
                onPress={handleLogin}
                style={styles.primaryButtonWrapper}>
                <LinearGradient
                  colors={['#E39800', '#E0AC0B']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={styles.borderGradient}>
                  <LinearGradient
                    colors={['#F9E232', '#ECC220', '#D49B16']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.primaryButton}>
                    <View style={styles.buttonInnerHighlight} />
                    <Text style={styles.primaryButtonText}>Log In</Text>
                  </LinearGradient>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  flexContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  topContent: {
    paddingTop: 10,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  title: {
    fontFamily: 'Rubik_600SemiBold',
    fontSize: 26,
    color: '#18181B',
    lineHeight: 33,
    letterSpacing: -0.3,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 14,
    color: 'rgba(26, 26, 26, 0.56)',
    lineHeight: 20,
    marginBottom: 28,
  },
  formContainer: {
    gap: 16,
  },
  input: {
    height: 52,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: '#E4E4E7',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 18,
    fontFamily: 'Rubik_400Regular',
    fontSize: 15,
    color: '#18181B',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    paddingVertical: 4,
  },
  forgotPasswordText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 14,
    color: '#F45B5B',
  },
  bottomSection: {
    paddingTop: 24,
    width: '100%',
  },
  primaryButtonWrapper: {
    borderRadius: 18,
    shadowColor: '#D49B16',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
  borderGradient: {
    padding: 1.5,
    borderRadius: 18,
  },
  primaryButton: {
    height: 49,
    borderRadius: 16.5,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  buttonInnerHighlight: {
    position: 'absolute',
    top: 0,
    left: 20,
    right: 20,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 1,
  },
  primaryButtonText: {
    fontFamily: 'Rubik_600SemiBold',
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 22.4,
    letterSpacing: 0,
  },
});
