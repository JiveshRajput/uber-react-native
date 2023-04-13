import React from 'react';
import { StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import store from './store/store';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import EatScreen from './screens/EatScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './screens/MapScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={'#000'} hidden={false} />
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={tw`flex-1`} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
            <Stack.Navigator initialRouteName='Splash' >
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Eat" component={EatScreen} options={{ headerShown: false }} />
              <Stack.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
              {/* <HomeScreen /> */}
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider >
  );
}


export default App;
