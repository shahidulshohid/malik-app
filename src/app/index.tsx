import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  Image,
  Pressable,
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
      <StatusBar style="dark" />

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
            colors={['#F5C22B', '#E5A110', '#D18800']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Log In via Email</Text>
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
    width: 104,
    height: 104,
    borderRadius: 22,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#18181B',
    textAlign: 'center',
    lineHeight: 33,
    letterSpacing: -0.3,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#71717A',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 10,
    paddingHorizontal: 12,
  },
  bottomSection: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    width: '100%',
  },
  primaryButtonWrapper: {
    borderRadius: 30,
    shadowColor: '#D18800',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.28,
    shadowRadius: 10,
    elevation: 5,
  },
  primaryButton: {
    height: 52,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E4E4E7',
  },
  dividerText: {
    marginHorizontal: 12,
    fontSize: 12,
    fontWeight: '600',
    color: '#A1A1AA',
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
