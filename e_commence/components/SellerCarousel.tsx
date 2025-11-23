import React from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;

export default function SellerCarousel({ sellers }) {
  return (
    <View style={{ height: 200, marginBottom: 20 }}>
      <Carousel
        width={width - 40}
        height={200}
        data={sellers}
        mode="parallax"
        scrollAnimationDuration={800}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#fff',
              borderRadius: 10,
              padding: 10,
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.seller.logo }}
              style={{ width: '100%', height: 150, borderRadius: 10 }}
              resizeMode="cover"
            />
            <Text style={{ marginTop: 5, fontSize: 16, fontWeight: '600' }}>
              {item.seller.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
