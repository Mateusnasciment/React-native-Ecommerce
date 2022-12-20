import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import bgCard from '../assets/img/vectors/cardBigBgStroke.png';

export default function CardProduct() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgCard}
        style={{ flex: 1, width: 165, height: 241, opacity: 0.95 }}
        resizeMode="contain"
      >
        <View
          style={{
            justifyContent: 'space-between',
            height: '100%',
            paddingVertical: 20,
            paddingHorizontal: 15,
          }}
        >
          <View
            style={{
              width: '100%',
              alignItems: 'flex-end',
            }}
          >
            <TouchableOpacity style={{ width: 30, alignItems: 'center' }}>
              <Image
                source={require('../assets/img/icons/heart.png')}
                style={{ resizeMode: 'contain' }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image
              source={require('../../src/assets/img/products/bike.png')}
              style={{ width: 150, height: 100, resizeMode: 'contain' }}
            />
          </View>
          <View>
            <Text allowFontScaling={false} style={{ color: '#999' }}>
              Road Bike
            </Text>
            <Text
              allowFontScaling={false}
              style={{
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase',
              }}
            >
              Peugeot - LR01
            </Text>
            <Text allowFontScaling={false} style={{ color: '#999' }}>
              $ 1,999,99
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 168,
    height: 241,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
