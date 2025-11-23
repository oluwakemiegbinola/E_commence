import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useSellers } from '../../hooks/useSellers';
import { useProducts } from '../../hooks/useProducts';
import SellerCarousel from '../../components/SellerCarousel';
import ProductCard from '../../components/ProductCard';

export default function HomeScreen() {
  const { sellers, isLoading: loadingSellers, error: errorSellers } = useSellers();
  const { products, isLoading: loadingProducts, error: errorProducts } = useProducts();

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.sectionTitle}>Top Sellers</Text>
      {loadingSellers && <Text>Loading sellers…</Text>}
      {errorSellers && <Text style={styles.errorText}>{errorSellers}</Text>}
      {sellers && sellers.length > 0 && <SellerCarousel sellers={sellers} />}

      <Text style={styles.sectionTitle}>Featured Products</Text>
      {loadingProducts && <Text>Loading products…</Text>}
      {errorProducts && <Text style={styles.errorText}>{errorProducts}</Text>}

      <View style={styles.productList}>
        {products?.map((item) => (
          <ProductCard key={item._id} product={item} />
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  errorText: {
    color: 'red'
  }
});
