import LoginScreen from '@/Screen/Login/Login';
import Onboarding from '@/Screen/Onboarding/Onboarding';
import SingupScreen from '@/Screen/SignUp/SingUp';
import OTPScreen from '@/Screen/OTP/OTP';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const NavigationScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="onboarding">
        <Stack.Screen name="onboarding" component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SingupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="otp" component={OTPScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationScreen;
