import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Dimensions, View, StatusBar as Bar } from 'react-native';
import Background from './src/components/Background';
import bgDetail from './img/detail.png';
import Header from './src/components/Header';
import CardBanner from './src/components/CardBanner';

const { width, height } = Dimensions.get('window');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Background bgImage={bgDetail} />
      <View style={styles.body}>
        <Header />
        <CardBanner />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242C3B',
  },
  body: {
    marginTop: Bar.currentHeight,
  },
});
