import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import JokesList from './components/JokeList';
import styles from './styles'

export default function App() {
  return (
    <View style={styles.container}>
     <JokesList />
      <StatusBar style="auto" />
    </View>
  );
}

