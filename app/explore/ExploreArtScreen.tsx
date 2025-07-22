import { View, Text, ScrollView, TextInput } from 'react-native';
import ArtworkCard from '@/components/ArtworkCard';
import BottomNav from '@/components/common/BottomNav';
import ArtworkCard from "@/components/common/ArtworkCard";


const dummyArtworks = [
  {
    title: 'Abstract Dreams',
    artist: 'Sarah Chen',
    course: 'Fine Art · 3rd Year',
    price: '£450',
    category: 'Painting',
    likes: 12,
  },
];

export default function ExploreArtScreen() {
  return (
    <View className="flex-1 bg-white dark:bg-black">
      <ScrollView className="flex-1 px-4 pt-10">
        <Text className="text-2xl font-bold text-black dark:text-white mb-2">
          Explore Artworks
        </Text>

        <TextInput
          placeholder="Search artworks, artists, or courses..."
          placeholderTextColor="#888"
          className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-xl px-4 py-2 mb-4"
        />

        <View className="flex-row flex-wrap justify-between">
          {dummyArtworks.map((art, idx) => (
            <ArtworkCard key={idx} {...art} />
          ))}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}
