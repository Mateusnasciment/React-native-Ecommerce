import React from 'react';
import { View, StyleSheet } from 'react-native';


export default function Footer() {
  return (
    <View style={styles.footer}>
        <text>
            Footer
        </text>
        <text>
            Footer
        </text>
        <text>
            Footer
        </text>
    </View>
  );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#363E51",
        padding: 40,
        flex: 1,
        }
    },
);
