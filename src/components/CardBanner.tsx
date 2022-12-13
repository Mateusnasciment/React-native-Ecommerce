import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

export default function CardBanner() {
  return (
    <View
      style={{
        height: 252,
      }}
    >
      <ImageBackground
        source={require('../../img/slider.png')}
        style={{ width: '100%', height: 250, opacity: 0.98 }}
        resizeMode="contain"
      >
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 180,
          }}
        >
          <Image
            source={require('../../img/bike.png')}
            style={{
              width: '100%',
              height: 160,
              resizeMode: 'contain',
              opacity: 1,
            }}
          />
        </View>
        <View style={{ paddingHorizontal: 20 }}>
          <Text
            allowFontScaling={false}
            style={{ color: '#fff', fontWeight: 'bold', fontSize: 26 }}
          >
            30% Off
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({});
