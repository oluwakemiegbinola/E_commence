import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

export default function ProductCard({ product }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <Image
        source={{ uri: product.image }}
        style={{ width: '100%', height: 150, borderRadius: 10 }}
        resizeMode="cover"
      />

      <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 8 }}>
        {product.name}
      </Text>

      <Text style={{ marginTop: 5, fontSize: 14, color: '#888' }}>
        {product.rating} stars • {product.numReviews} reviews
      </Text>

      <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
        ₦{product.price}
      </Text>
    </TouchableOpacity>
  );
}
