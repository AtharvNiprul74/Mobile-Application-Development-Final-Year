import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import CustomButton from './CustomButton';

interface CustomCardProps {
    name: string;
    price: number;
    emoji: string;
    quantity: number;
    onAdd: () => void;
    onIncrease: () => void;
    onDecrease: () => void;
}

const CustomCard = ({
    name,
    price,
    emoji,
    quantity,
    onAdd,
    onIncrease,
    onDecrease,
}: CustomCardProps) => {

    return (
        <View style={styles.card}>

            <View style={styles.productInfo}>

                <Text style={styles.emoji}>
                    {emoji}
                </Text>

                <View>
                    <Text style={styles.name}>
                        {name}
                    </Text>

                    <Text style={styles.price}>
                        ₹{price}
                    </Text>
                </View>

            </View>

            {quantity === 0 ? (

                <CustomButton
                    title="+ ADD"
                    onPress={onAdd}
                />

            ) : (

                <View style={styles.quantityContainer}>

                    <CustomButton
                        title="−"
                        onPress={onDecrease}
                    />

                    <Text style={styles.quantity}>
                        {quantity}
                    </Text>

                    <CustomButton
                        title="+"
                        onPress={onIncrease}
                    />

                </View>

            )}

        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 15,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        elevation: 3,
    },

    productInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },

    emoji: {
        fontSize: 35,
        marginRight: 12,
    },

    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    price: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },

    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },

    quantity: {
        fontSize: 17,
        fontWeight: 'bold',
        minWidth: 20,
        textAlign: 'center',
    },
});

export default CustomCard;