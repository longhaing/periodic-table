import React, {memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PeriodicTable from '../screens/periodic-table';

const Stack = createNativeStackNavigator();

const RootRoutes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PeriodicTable">
          <Stack.Screen
            name="PeriodicTable"
            component={PeriodicTable}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default memo(RootRoutes);
