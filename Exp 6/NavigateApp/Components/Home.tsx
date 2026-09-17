import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

function Home() {

    return (
        <View style={styles.container}>

            <Text style={styles.emoji}>
                Shop Here
            </Text>

            <Text style={styles.title}>
                Hello!
            </Text>

            <Text style={styles.subtitle}>
                Welcome to QuickCart
            </Text>

            <Text style={styles.message}>
                Enjoy shopping and find everything
                you need in one place!
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },

    emoji: {
        fontSize: 60,
        marginBottom: 15,
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#222',
    },

    subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#444',
        marginTop: 5,
    },

    message: {
        fontSize: 16,
        color: '#777',
        textAlign: 'center',
        marginTop: 15,
        lineHeight: 24,
    },

});

export default Home;
