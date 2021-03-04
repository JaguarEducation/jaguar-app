import React from 'react';
import { View, Text } from 'react-native'
import { useTheme } from '@react-navigation/native';

const LessonScreen = () => {
    const { colors } = useTheme();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.text }}>Lección</Text>
        </View>
    );
}

export default LessonScreen; 