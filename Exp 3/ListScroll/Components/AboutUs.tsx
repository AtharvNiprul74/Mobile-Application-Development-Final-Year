import { FlatList, ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function AboutUs() {
    const dkteInfo = {
        name: 'DKTE Society’s Textile and Engineering Institute',
        shortName: 'DKTE',
        location: 'Ichalkaranji, Maharashtra',
        established: '1982',

        about:
            'DKTE Society’s Textile and Engineering Institute is an autonomous engineering institute located in Ichalkaranji, Maharashtra. The institute provides education in engineering, technology, and related fields.',

        vision:
            'To become a globally recognized institute providing quality education, innovation, research, and entrepreneurship opportunities.',

        mission: [
            'Provide quality technical education.',
            'Promote innovation and research.',
            'Develop industry-ready professionals.',
            'Encourage entrepreneurship and leadership.',
            'Contribute to society through technology.',
        ],

        departments: [
            'Computer Science and Engineering',
            'Artificial Intelligence and Machine Learning',
            'Information Technology',
            'Electronics and Telecommunication Engineering',
            'Mechanical Engineering',
            'Civil Engineering',
            'Textile Engineering',
        ],

        facilities: [
            'Modern laboratories',
            'Central library',
            'Computer laboratories',
            'Hostel facilities',
            'Sports facilities',
            'Cafeteria',
            'Innovation and research facilities',
        ],
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <View style={styles.header}>
                    <Text style={styles.title}>{dkteInfo.shortName}</Text>
                    <Text style={styles.subtitle}>{dkteInfo.name}</Text>
                    <Text style={styles.location}>
                        {dkteInfo.location}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.heading}>About DKTE</Text>

                    <Text style={styles.text}>
                        {dkteInfo.about}
                    </Text>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Established</Text>
                        <Text style={styles.value}>
                            {dkteInfo.established}
                        </Text>
                    </View>

                    <View style={styles.infoRow}>
                        <Text style={styles.label}>Location</Text>
                        <Text style={styles.value}>
                            {dkteInfo.location}
                        </Text>
                    </View>
                </View>

                <View style={styles.card}>
                    <Text style={styles.heading}>Our Vision</Text>

                    <Text style={styles.text}>
                        {dkteInfo.vision}
                    </Text>
                </View>

                <View style={styles.card}>
                    <Text style={styles.heading}>Our Mission</Text>
                    <FlatList
                        data={dkteInfo.mission}
                        renderItem={(missions) => (
                            <>
                                <Text key={missions.index} style={styles.listItem}>• {missions.item}</Text>
                            </>
                        )}
                    />
                </View>

                <View style={styles.card}>
                    <Text style={styles.heading}>Departments</Text>
                    <FlatList
                        data={dkteInfo.departments}
                        renderItem={(depts) => (
                            <>
                                <Text key={depts.index + 1} style={styles.listItem}>{depts.item}</Text>
                            </>
                        )}
                    />
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        DKTE Society’s Textile and Engineering Institute
                    </Text>

                    <Text style={styles.footerSubtext}>
                        Ichalkaranji, Maharashtra
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    scrollContent: {
        padding: 16,
    },

    header: {
        backgroundColor: '#1e3a8a',
        padding: 25,
        borderRadius: 15,
        marginBottom: 15,
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },

    subtitle: {
        fontSize: 17,
        color: 'white',
        textAlign: 'center',
        marginTop: 8,
    },

    location: {
        color: 'white',
        marginTop: 10,
        fontSize: 15,
    },

    card: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 3,
    },

    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },

    text: {
        fontSize: 16,
        lineHeight: 25,
        color: '#444',
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },

    label: {
        fontWeight: 'bold',
        fontSize: 15,
    },

    value: {
        fontSize: 15,
        color: '#555',
    },

    listItem: {
        fontSize: 16,
        marginBottom: 10,
        lineHeight: 23,
        color: '#444',
    },

    footer: {
        alignItems: 'center',
        padding: 20,
        marginTop: 5,
    },

    footerText: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    footerSubtext: {
        marginTop: 5,
        color: '#666',
    },
});

export default AboutUs;