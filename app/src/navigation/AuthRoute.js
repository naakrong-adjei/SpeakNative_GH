import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroScreen from '../screens/auth/IntroScreen';
import EmailAuth from '../screens/auth/EmailAuth';

const Stack = createNativeStackNavigator();


export default function AuthRoute() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="Email" component={EmailAuth} />
    </Stack.Navigator>
  );
}