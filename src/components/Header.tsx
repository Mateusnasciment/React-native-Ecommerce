import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

type TProps = {
  title?: string;
};

export default function Header({ title = 'Choose Your Bike' }: TProps) {
  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.title}>
        {title}
      </Text>
      <View>
        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={require('../../img/icons/btn_search.png')}
            style={{ resizeMode: 'contain', width: 44, height: 44 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: { color: '#fff', fontWeight: '700', fontSize: 24 },
});
