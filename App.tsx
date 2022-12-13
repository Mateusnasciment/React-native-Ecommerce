import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar as Bar } from 'react-native';
import Background from './src/components/Background';
import bgDetail from './img/detail.png';
import Header from './src/components/Header';
import CardBanner from './src/components/CardBanner';
import ButtonIcon from './src/components/ButtonIcon';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Background bgImage={bgDetail} />
      <View style={styles.body}>
        <Header />
        <CardBanner />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            height: 100,
          }}
        >
          <View style={{ marginTop: 20 }}>
            <ButtonIcon text="All" />
          </View>
          <View style={{ marginTop: -5 }}>
            <ButtonIcon icon="battery" />
          </View>
          <View style={{ marginTop: -25 }}>
            <ButtonIcon icon="road" />
          </View>
          <View style={{ marginTop: -50 }}>
            <ButtonIcon colors={['#363E5199', '#191E2699']} icon="mountain" />
          </View>
          <View style={{ marginTop: -75 }}>
            <ButtonIcon colors={['#363E5199', '#191E2699']} icon="helmet" />
          </View>
          {/* <ButtonIcon colors={['#34C8E8', '#4E4AF2']} /> */}
        </View>
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
