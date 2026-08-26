import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import CustomHeader from './Components/CustomHeader';
import CustomInput from './Components/CustomInput';
import CustomCard from './Components/CustomCard';

interface Product {
  id: number;
  name: string;
  price: number;
  emoji: string;
  quantity: number;
}

function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 1499,
      emoji: '🎧',
      quantity: 0,
    },

    {
      id: 2,
      name: 'Mechanical Keyboard',
      price: 2499,
      emoji: '⌨️',
      quantity: 0,
    },

    {
      id: 3,
      name: 'Gaming Mouse',
      price: 899,
      emoji: '🖱️',
      quantity: 0,
    },

    {
      id: 4,
      name: 'USB-C Hub',
      price: 799,
      emoji: '🔌',
      quantity: 0,
    },

    {
      id: 5,
      name: 'Smart Watch',
      price: 1999,
      emoji: '⌚',
      quantity: 0,
    },
  ]);

  const [search, setSearch] = useState('');

  const increaseQuantity = (id: number) => {

    setProducts(
      products.map(product =>
        product.id === id
          ? {
            ...product,
            quantity: product.quantity + 1,
          }
          : product
      )
    );
  };

  const decreaseQuantity = (id: number) => {

    setProducts(
      products.map(product =>
        product.id === id
          ? {
            ...product,
            quantity: Math.max(
              0,
              product.quantity - 1
            ),
          }
          : product
      )
    );
  };

  const addToCart = (id: number) => {
    increaseQuantity(id);
  };

  const filteredProducts = products.filter(product =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const cartCount = products.reduce(
    (total, product) =>
      total + product.quantity,
    0
  );

  const cartTotal = products.reduce(
    (total, product) =>
      total +
      product.price * product.quantity,
    0
  );

  return (
    <SafeAreaView style={styles.container}>

      <ScrollView>

        <CustomHeader
          title="QuickCart"
          subtitle="Simple shopping made easy"
        />

        <View style={styles.summary}>

          <View>
            <Text style={styles.summaryLabel}>
              Cart Items
            </Text>

            <Text style={styles.summaryValue}>
              {cartCount}
            </Text>
          </View>

          <View>
            <Text style={styles.summaryLabel}>
              Total
            </Text>

            <Text style={styles.summaryValue}>
              ₹{cartTotal}
            </Text>
          </View>

        </View>

        <CustomInput
          placeholder="🔍 Search products..."
          value={search}
          onChangeText={setSearch}
        />

        <Text style={styles.sectionTitle}>
          Products
        </Text>

        {filteredProducts.map(product => (

          <CustomCard
            key={product.id}
            name={product.name}
            price={product.price}
            emoji={product.emoji}
            quantity={product.quantity}
            onAdd={() =>
              addToCart(product.id)
            }
            onIncrease={() =>
              increaseQuantity(product.id)
            }
            onDecrease={() =>
              decreaseQuantity(product.id)
            }
          />

        ))}

        {filteredProducts.length === 0 && (

          <Text style={styles.noResult}>
            No products found
          </Text>

        )}

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },

  summary: {
    backgroundColor: '#222',
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  summaryLabel: {
    color: '#ccc',
    fontSize: 14,
  },

  summaryValue: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  noResult: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#777',
  },

});

export default App;