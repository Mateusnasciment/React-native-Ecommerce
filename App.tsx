import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar as Bar, ScrollView } from 'react-native';
import Background from './src/components/Background';
import bgDetail from './img/detail.png';
import Header from './src/components/Header';
import CardBanner from './src/components/CardBanner';
import Categories from './src/components/Categories';
import CardProduct from './src/components/CardProduct';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Background bgImage={bgDetail} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 50 }}
        style={styles.body}
      >
        <Header />
        <CardBanner />
        <Categories />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {[...Array(5)].map((_, key) => (
            <CardProduct key={key} />
          ))}
        </View>
      </ScrollView>
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
