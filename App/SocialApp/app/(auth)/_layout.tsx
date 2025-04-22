import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types/navigation';
import Slider from './slider';
import Login from './login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="slider">
      <Stack.Screen 
        name="slider" 
        component={Slider} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  );
}