import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';

// Define the structure of one post
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// Request method type
type Method = 'fetch' | 'axios';

// API endpoint
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=10';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [method, setMethod] = useState<Method>('fetch');

  const loadPosts = async (selectedMethod: Method) => {
    setLoading(true);
    setError(null);
    setMethod(selectedMethod);

    try {
      let data: Post[];

      if (selectedMethod === 'fetch') {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status} `);
        }

        data = await response.json();
      }
      else {
        const response = await axios.get<Post[]>(API_URL);
        data = response.data;
      }
      setPosts(data);
    } catch (err) {
      setError(
        'Unable to load posts. Check your internet connection and try again.',
      );
      console.log('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Load data when the screen opens
  useEffect(() => {
    loadPosts('fetch');
  }, []);

  // Render each post
  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.card}>
      <Text style={styles.postId}>Post ID: {item.id}</Text>

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>REST API Demo</Text>

      <Text style={styles.subtitle}>
        Fetch API and Axios in React Native
      </Text>

      {/* Buttons to select the request method */}
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={[
            styles.button,
            method === 'fetch' && styles.activeButton,
          ]}
          onPress={() => loadPosts('fetch')}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Fetch API</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            method === 'axios' && styles.activeButton,
          ]}
          onPress={() => loadPosts('axios')}
          disabled={loading}
        >
          <Text style={styles.buttonText}>Axios</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#2563eb" />

          <Text style={styles.status}>Loading posts...</Text>
        </View>
      ) : error ? (
        <View style={styles.center}>
          <Text style={styles.error}>{error}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => loadPosts(method)}
          >
            <Text style={styles.buttonText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 16,
  },

  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e293b',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#64748b',
    marginTop: 6,
    marginBottom: 16,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 16,
  },

  button: {
    backgroundColor: '#64748b',
    paddingVertical: 12,
    paddingHorizontal: 22,
    borderRadius: 8,
  },

  activeButton: {
    backgroundColor: '#2563eb',
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },

  status: {
    color: '#334155',
    fontSize: 16,
  },

  error: {
    color: '#dc2626',
    textAlign: 'center',
  },

  list: {
    paddingBottom: 20,
  },

  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 10,
    elevation: 2,
  },

  postId: {
    color: '#2563eb',
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  title: {
    color: '#1e293b',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
    textTransform: 'capitalize',
  },

  body: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 21,
  },
});

export default App;