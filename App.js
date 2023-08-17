import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import StackNavigator from './StackNavigator';
import { FitnessContext } from './Context';

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator/>

    </FitnessContext>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 32 : 0
  },
});
