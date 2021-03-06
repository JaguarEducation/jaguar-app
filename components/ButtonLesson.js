import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ButtonLesson = (props) => {
    const { colors } = useTheme();
    return (
        <View style={styles.lessonButton}>
            <View style={styles.circle}>
                {props.icon}
            </View>
            <Text style={{ color: colors.text }}>{props.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    circle: {
      height: 70,
      width: 70,
      backgroundColor: "#f4b723",
      borderRadius: 50,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    lessonButton: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: 10,
    },
  });

export default ButtonLesson; 