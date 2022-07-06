import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import {Provider, useDispatch} from 'react-redux'
import store from './store';
import { useFonts } from 'expo-font';
import Text from './components/Text/Text';
import Navigation from './navigation';


export default function App() {
  let [fontLoaded] = useFonts({
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf')
  })
  // const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();


  if (!fontLoaded) {
    return null;
  } else {
    return (
      <Provider store={store}>
       <SafeAreaView style={{flex: 1}}>
        <Navigation />
        <StatusBar />
      </SafeAreaView>
      </Provider>
    );
  }
}
