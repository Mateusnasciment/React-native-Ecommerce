import React from 'react';
import { View, StyleSheet } from 'react-native';
import ButtonIcon from './ButtonIcon';

export default function Categories() {
  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
});
