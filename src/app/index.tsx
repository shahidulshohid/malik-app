import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function OnboardingScreen() {
  const handleEmailLogin = () => {
    // Navigate to email login screen
  };

  const handleGoogleLogin = () => {
    // Handle Google authentication
  };

  const handleAppleLogin = () => {
    // Handle Apple authentication
  };

  const handleSignUp = () => {
    // Navigate to sign up screen
  };

  const handleTerms = () => {
    // Open Terms of Service
  };

  const handlePrivacy = () => {
    // Open Privacy Policy
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top / Hero Section */}
      <View style={styles.topSection}>
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/splash-icon.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>
          Find a connection{'\n'}that feels right.
        </Text>

        <Text style={styles.subtitle}>
          AI-powered matchmaking built around{'\n'}who you really are.
        </Text>
      </View>

      {/* Bottom / Actions Section */}
      <View style={styles.bottomSection}>
        {/* Log In via Email Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={handleEmailLogin}
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
              <Text style={styles.primaryButtonText}>Log In via Email</Text>
            </LinearGradient>
          </LinearGradient>
        </TouchableOpacity>

        {/* OR Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>OR</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Buttons (Google & Apple) */}
        <View style={styles.socialRow}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleGoogleLogin}
            style={styles.socialButton}>
            <FontAwesome name="google" size={18} color="#18181B" style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            onPress={handleAppleLogin}
            style={styles.socialButton}>
            <Ionicons name="logo-apple" size={20} color="#18181B" style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Sign up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupPrompt}>Don't have an account? </Text>
          <Pressable onPress={handleSignUp}>
            <Text style={styles.signupLink}>Sign up</Text>
          </Pressable>
        </View>

        {/* Terms and Privacy */}
        <View style={styles.legalContainer}>
          <Text style={styles.legalText}>
            By signing in, you agree to our{'\n'}
            <Text onPress={handleTerms} style={styles.legalLink}>
              Terms of Service
            </Text>
            {' '}and{' '}
            <Text onPress={handlePrivacy} style={styles.legalLink}>
              Privacy Policy
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  topSection: {
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 28,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 14,
    elevation: 8,
  },
  logo: {
    width: 96,
    height: 96,
    borderRadius: 22,
  },
  title: {
    fontFamily: 'Rubik_600SemiBold',
    fontSize: 24,
    color: '#1A1A1A',
    textAlign: 'center',
    lineHeight: 31,
    letterSpacing: 0,
  },
  subtitle: {
    fontFamily: 'Rubik_400Regular',
    fontSize: 14,
    color: 'rgba(26, 26, 26, 0.56)',
    textAlign: 'center',
    lineHeight: 19.6,
    letterSpacing: 0,
    marginTop: 10,
    paddingHorizontal: 12,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
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
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#00000066',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#00000066',
    letterSpacing: 0.8,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 14,
  },
  socialButton: {
    flex: 1,
    height: 50,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: '#EFE6D2',
    backgroundColor: '#FFFDF9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialIcon: {
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#18181B',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    marginBottom: 18,
  },
  signupPrompt: {
    fontSize: 14,
    fontWeight: '600',
    color: '#27272A',
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D97706',
  },
  legalContainer: {
    alignItems: 'center',
  },
  legalText: {
    fontSize: 11,
    color: '#71717A',
    textAlign: 'center',
    lineHeight: 16,
  },
  legalLink: {
    color: '#D97706',
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
