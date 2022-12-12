import { Image, StyleSheet, Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');

type TProps = {
  bgImage: typeof Image;
};

export default function Background({ bgImage }: TProps) {
  return (
    <View style={styles.boxBgDetail}>
      <Image source={bgImage} style={styles.bgImage} />
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
