import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface CustomInputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

const CustomInput = ({
    placeholder,
    value,
    onChangeText,
}: CustomInputProps) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 12,
        padding: 13,
        fontSize: 16,
        backgroundColor: '#fff',
        marginBottom: 15,
    },
});

export default CustomInput;