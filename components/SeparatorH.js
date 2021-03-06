import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const SeparatorH = (props) => {
    const { colors } = useTheme();
    return (
        <View style={styles.separator}>
        </View>
    );
}

const styles = StyleSheet.create({
  separator: {
    width: 300,
    height: 1,
    backgroundColor: "gray",
    margin: 15,
  },
  });

export default SeparatorH; 