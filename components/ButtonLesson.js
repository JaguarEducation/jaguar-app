import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ButtonLesson = (props) => {
    const { colors } = useTheme();
    return (
        <TouchableOpacity onPress={props.onPress}>
        <View style={styles.lessonButton}>
            <View style={styles.circle}>
                {props.icon}
            </View>
            <Text style={{ color: colors.text, fontWeight: "700", fontSize: 14, marginTop: 10 }}>{props.text}</Text>
        </View>
        </TouchableOpacity>
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