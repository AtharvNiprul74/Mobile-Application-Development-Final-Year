import React, { useContext, useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Button,
    ActivityIndicator,
    StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { cartContext, type Product } from "../Context/CartProvider";

const products: Product[] = [
    { id: 1, name: "T-Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1200 },
    { id: 3, name: "Watch", price: 800 },
];

export default function ProductListScreen() {
    const navigation = useNavigation<any>();
    const context = useContext(cartContext);

    if (!context) {
        throw new Error("Wrap your app with CartProvider");
    }

    const { addItem } = context;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#6C4AB6" />
                <Text style={styles.loadingText}>Getting your products ready...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.brand}>ShopEasy</Text>
                <Text style={styles.subtitle}>Find something you love</Text>
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
                renderItem={({ item, index }) => (
                    <View
                        style={[
                            styles.card,
                            { backgroundColor: index % 2 === 0 ? "#F3EEFF" : "#EEF7FF" },
                        ]}
                    >
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>{item.name}</Text>
                            <Text style={styles.price}>₹{item.price}</Text>
                            <Text style={styles.caption}>Available now</Text>
                        </View>

                        <View style={styles.addButton}>
                            <Button
                                title="Add to Cart"
                                color="#6C4AB6"
                                onPress={() => addItem(item)}
                            />
                        </View>
                    </View>
                )}
            />

            <View style={styles.cartButton}>
                <Button
                    title="View My Cart"
                    color="#6C4AB6"
                    onPress={() => navigation.navigate("Cart")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        padding: 16,
    },
    header: {
        backgroundColor: "#6C4AB6",
        padding: 20,
        borderRadius: 14,
        marginBottom: 18,
    },
    brand: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#FFFFFF",
    },
    subtitle: {
        marginTop: 5,
        color: "#EEE5FF",
        fontSize: 14,
    },
    list: {
        gap: 14,
        paddingBottom: 12,
    },
    card: {
        padding: 16,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    productInfo: {
        flex: 1,
    },
    productName: {
        fontSize: 19,
        fontWeight: "bold",
        color: "#25213A",
    },
    price: {
        fontSize: 17,
        marginTop: 6,
        color: "#6C4AB6",
        fontWeight: "600",
    },
    caption: {
        fontSize: 12,
        color: "#666078",
        marginTop: 4,
    },
    addButton: {
        marginLeft: 8,
    },
    cartButton: {
        marginTop: 10,
        paddingVertical: 4,
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loadingText: {
        marginTop: 10,
        color: "#6C4AB6",
    },
});