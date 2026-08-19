import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"

function FruitsList() {
    const fruitsList = [
        { id: 1, name: 'Pineapple' },
        { id: 2, name: 'Cherry' },
        { id: 3, name: 'Mango' },
        { id: 4, name: 'Pear' },
        { id: 5, name: 'Dragon Fruit' },
        { id: 6, name: 'Banana' },
        { id: 7, name: 'Lychee' },
        { id: 8, name: 'Apple' },
        { id: 9, name: 'Papaya' },
        { id: 10, name: 'Kiwi' },
        { id: 11, name: 'Watermelon' },
        { id: 12, name: 'Plum' },
        { id: 13, name: 'Orange' },
        { id: 14, name: 'Guava' },
        { id: 15, name: 'Pomegranate' },
        { id: 16, name: 'Strawberry' },
        { id: 17, name: 'Coconut' },
        { id: 18, name: 'Peach' },
        { id: 19, name: 'Grapes' },
        { id: 20, name: 'Muskmelon' },
    ];
    return (
        <>
            <SafeAreaView style={styles.container}>
                <View style={styles.card}>
                    <Text style={{ fontSize: 30, padding: 10, borderWidth: 2, borderBottomColor: 'black', textAlign: 'center', width: '100%' }}>Fruit Basket</Text>
                    <FlatList
                        data={fruitsList}
                        keyExtractor={(item) => item.toString()}
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