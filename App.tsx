import React from 'react';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import RootRoutes from './src/routes';
import {StatusBar} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar translucent />
      <RootRoutes />
    </SafeAreaProvider>
  );
}

export default App;
