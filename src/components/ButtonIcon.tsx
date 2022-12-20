import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import road from '../assets/img/categories/road.png';
import mountain from '../assets/img/categories/mountain.png';
import helmet from '../assets/img/categories/helmet.png';
import battery from '../assets/img/categories/battery.png';
import all from '../assets/img/categories/All.png';

const icons: = {
  road,
  mountain,
  helmet,
  battery,
  all,
};

type TProps = {
  colors?: string[];
  width?: string | number;
  height?: string | number;
  textColor?: string;
  text?: string;
  icon?: keyof typeof icons;
};

export default function ButtonIcon(props: TProps) {
  const {
    colors = ['#353F54', '#222834'],
    width = 50,
    height = 50,
    textColor = '#ccc',
    text,
    icon,
  } = props;

  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      borderRadius: 10,
    },
    boxButton: {
      width: width,
      height: height,
      borderRadius: 10,
      overflow: 'hidden',
    },
    boxGradient: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: textColor,
      fontSize: 18,
      fontWeight: '700',
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxButton} activeOpacity={0.7}>
        <LinearGradient colors={colors} style={styles.boxGradient}>
          {text ? (
            <Text allowFontScaling={false} style={styles.text}>
              {text}
            </Text>
          ) : (
            <Image
              source={icons[all]}
              style={{ width: 27, height: 27, resizeMode: 'contain' }}
            />
          )}
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}
