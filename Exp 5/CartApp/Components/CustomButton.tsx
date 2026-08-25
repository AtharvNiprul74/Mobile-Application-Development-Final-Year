import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
} from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
}

const CustomButton = ({
    title,
    onPress,
}: CustomButtonProps) => {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#222',
        paddingVertical: 9,
        paddingHorizontal: 14,
        borderRadius: 9,
        alignItems: 'center',
    },

    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CustomButton;