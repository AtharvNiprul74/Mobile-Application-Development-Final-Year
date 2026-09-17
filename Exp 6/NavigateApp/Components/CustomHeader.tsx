import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomHeaderProps {
    title: string;
    subtitle: string;
}

const CustomHeader = ({
    title,
    subtitle,
}: CustomHeaderProps) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
    },

    subtitle: {
        fontSize: 15,
        color: '#666',
        marginTop: 4,
    },
});

export default CustomHeader;