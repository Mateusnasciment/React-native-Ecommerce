import { Image, StyleSheet, Dimensions, View, ImageSourcePropType } from 'react-native';

const { width, height } = Dimensions.get('window');

type TProps = {
  bgImage:ImageSourcePropType;
};

export default function Background({ bgImage }: TProps) {
  return (
    <View style={styles.boxBgDetail}>
  <Image
      source={bgImage}
      style={{
      resizeMode: "contain",
      width: "100%",
      height: "100%",
    }}
  />
</View>
  );
}

const styles = StyleSheet.create({
  boxBgDetail: {
    width: width,
    height: height,
    position: 'absolute',
  },
  bgImage: {
    width: width,
    height: height,
    resizeMode: 'contain',
    marginTop: 100,
  },
});
