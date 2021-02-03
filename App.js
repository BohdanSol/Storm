import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// AuthStack
import Onboarding from './screens/AuthStack/Onboarding';
import Login from './screens/AuthStack/Login';
import Register from './screens/AuthStack/Register';
import ForgotPassword from './screens/AuthStack/ForgotPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Stack.Navigator>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}
export default App;
