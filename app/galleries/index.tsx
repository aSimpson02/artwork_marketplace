// app/galleries/index.tsx

import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GalleryCard from "@/components/GalleryCard";

export default function GalleriesScreen() {
  const [galleries, setGalleries] = useState<any[]>([]);
  const [filteredGalleries, setFilteredGalleries] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    const loadGalleries = async () => {
      const data = await AsyncStorage.getItem("galleries");
      if (data) {
        const parsed = JSON.parse(data);
        setGalleries(parsed);
        setFilteredGalleries(parsed);
      }
    };
    loadGalleries();
  }, []);

  useEffect(() => {
    const filtered = galleries.filter((gallery) =>
      gallery.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGalleries(filtered);
  }, [searchTerm, galleries]);

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 py-6">
      <Text className="text-2xl font-bold text-black dark:text-white mb-4">Your Galleries</Text>

      <TextInput
        placeholder="Search galleries..."
        placeholderTextColor="#999"
        value={searchTerm}
        onChangeText={setSearchTerm}
        className="bg-gray-100 dark:bg-zinc-800 text-black dark:text-white px-4 py-2 rounded-lg mb-4"
      />

      {filteredGalleries.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => router.push(`/galleries/${item.id}`)}
        >
          <GalleryCard {...item} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
