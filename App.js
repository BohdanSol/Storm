import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';

// AuthStack
import Onboarding from './screens/AuthStack/Onboarding';
import Login from './screens/AuthStack/Login';
import Register from './screens/AuthStack/Register';
import ForgotPassword from './screens/AuthStack/ForgotPassword';

// DashboardStack
import Dashboard from './screens/Dashboard/Dashboard';
import Category from './screens/Dashboard/Category';
import Goods from './screens/Dashboard/Goods';

// SearchStack
import Search from './screens/Search/Search';

// Basket
import Basket from './screens/Basket/Basket';

// BottomTabIcons
import DashboardIcon from './assets/bottomNavIcons/dashboardIcon.svg';
import DashboardIconActive from './assets/bottomNavIcons/dashboardIconActive.svg';
import SearchIcon from './assets/bottomNavIcons/searchIcon.svg';
import SearchIconActive from './assets/bottomNavIcons/searchIconActive.svg';
import BasketIcon from './assets/bottomNavIcons/basketIcon.svg';
import BasketIconActive from './assets/bottomNavIcons/basketIconActive.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
function DashboardStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Goods" component={Goods} />
    </Stack.Navigator>
  );
}
function SearchStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Search'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
    >
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
}
function BasketStack() {
  return (
    <Stack.Navigator
      initialRouteName={'Basket'}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true
      }}
    >
      <Stack.Screen name="Basket" component={Basket} />
    </Stack.Navigator>
  );
}
function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Dashboard'}
      tabBarOptions={{
        tabStyle: {
          paddingBottom: 6,
          height: 74,
        },
        showLabel: false,
        style: {
          height: 74,
          backgroundColor: '#fff',
          elevation: 0,
          borderTopWidth: 0,
        }
      }}
      shifting={false}
    >
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          tabBarIcon: ({ focused, color }) => (focused ? <DashboardIconActive /> : <DashboardIcon />)
        }}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused, color }) => (focused ? <SearchIconActive /> : <SearchIcon />)
        }}
      />
      <Tab.Screen
        name="BasketStack"
        component={BasketStack}
        options={{
          tabBarIcon: ({ focused, color }) => (focused ? <BasketIconActive /> : <BasketIcon />)
        }}
      />
    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'AuthStack'}
        // initialRouteName={props.initialRouteName}
        screenOptions={{
          headerShown: false,
          gestureEnabled: false
        }}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="MainStack" component={BottomTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
