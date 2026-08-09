import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

function FruitsList() {
    const fruitsList = [
        { idx: 1, name: "Apple" },
        { idx: 2, name: "Mango" },
        { idx: 3, name: "Banana" },
        { idx: 4, name: "Pinapple" },
        { idx: 5, name: "JackFruit" },
        { idx: 6, name: "papaya" },
        { idx: 7, name: "Cheery" },
        { idx: 8, name: "Kiwi" }
    ]
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Text style={{ fontSize: 30, padding: 10, borderWidth: 2, borderBottomColor: 'black', textAlign: 'center', width: '100%' }}>Fruit Basket</Text>
                    <FlatList
                        data={fruitsList}
                        keyExtractor={(item) => item.idx.toString()}
                        renderItem={({ item, index }) => (
                            <View style={styles.row}>
                                <Text style={styles.cell}>{item.name}</Text>
                            </View>
                        )}
                    />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    card: {
        marginInline: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: '#ccc',
        paddingVertical: 14,
    },
    cell: {
        fontSize: 17,
        width: '100%',
        textAlign: 'center'
    }
});

export default FruitsList;