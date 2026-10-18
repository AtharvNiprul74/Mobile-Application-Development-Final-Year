import React, { useContext, useEffect } from "react";
import {
    View,
    Text,
    FlatList,
    Button,
    StyleSheet,
} from "react-native";
import { cartContext } from "../Context/CartProvider";

export default function CartScreen() {
    const context = useContext(cartContext);

    if (!context) {
        throw new Error("CartScreen must be inside CartProvider");
    }

    const { cartItems, removeItem } = context;

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    useEffect(() => {
        console.log("Cart total:", total);
    }, [total]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Your Shopping Cart</Text>
                <Text style={styles.subtitle}>
                    {cartItems.length} item(s) in your cart
                </Text>
            </View>

            <FlatList
                data={cartItems}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                contentContainerStyle={styles.list}
                ListEmptyComponent={
                    <Text style={styles.empty}>Nothing here yet—add a product!</Text>
                }
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <View style={styles.productInfo}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>₹{item.price}</Text>
                        </View>

                        <View style={styles.removeButton}>
                            <Button
                                title="Remove"
                                color="#B3261E"
                                onPress={() => removeItem(item.id)}
                            />
                        </View>
                    </View>
                )}
            />

            <View style={styles.totalPanel}>
                <Text style={styles.totalLabel}>Cart Total</Text>
                <Text style={styles.total}>₹{total}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F7F5FA",
        padding: 16,
    },
    header: {
        backgroundColor: "#4B367C",
        padding: 18,
        borderRadius: 12,
        marginBottom: 16,
    },
    heading: {
        fontSize: 23,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    subtitle: {
        color: "#E6DFF5",
        marginTop: 6,
    },
    list: {
        paddingBottom: 12,
        gap: 12,
    },
    card: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        elevation: 2,
    },
    productInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#292333",
    },
    price: {
        marginTop: 6,
        color: "#4B367C",
        fontSize: 16,
    },
    removeButton: {
        marginLeft: 8,
    },
    empty: {
        textAlign: "center",
        marginTop: 24,
        color: "#777777",
    },
    totalPanel: {
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 18,
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 2,
    },
    totalLabel: {
        fontSize: 18,
        fontWeight: "600",
        color: "#292333",
    },
    total: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#4B367C",
    },
});