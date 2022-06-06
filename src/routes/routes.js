import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import RegisterUser from '../screens/RegisterUser';
import LoginUser from '../screens/LoginUser';

const Stack = createStackNavigator();

// import { Container } from './styles';
const navigatorOptions = {
    headerShown: false,
    cardStyle: { backgroundColor: 'transparent' },
    cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
        opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        }),
        },
        overlayStyle: {
        opacity: progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.5],
            extrapolate: 'clamp',
        }),
        },

    }),
}

const Routes = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Login' screenOptions={navigatorOptions}>
              <Stack.Screen name='Login' component={LoginUser}/>
              <Stack.Screen name='Register' component={RegisterUser}/>
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default Routes;