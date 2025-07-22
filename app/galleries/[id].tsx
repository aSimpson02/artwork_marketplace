// app/galleries/[id].tsx
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Gallery {
  id: string;
  title: string;
  image: string;
  category?: string;
  description?: string;
  artist?: string;
}

export default function GalleryDetailScreen() {
  const { id } = useLocalSearchParams(); 
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const router = useRouter();

  useEffect(() => {
    const loadGallery = async () => {
      const json = await AsyncStorage.getItem("galleries");
      if (!json) return;

      const allGalleries: Gallery[] = JSON.parse(json);
      const found = allGalleries.find((g) => g.id === id);

      if (found) setGallery(found);
    };

    loadGallery();
  }, [id]);

  if (!gallery) {
    return (
      <View className="flex-1 items-center justify-center bg-white dark:bg-black">
        <Text className="text-lg text-black dark:text-white">Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView className="flex-1 bg-white dark:bg-black px-4 py-6">
      <Text className="text-3xl font-bold text-black dark:text-white mb-2">
        {gallery.title}
      </Text>
      {gallery.image ? (
        <Image
          source={{ uri: gallery.image }}
          className="w-full h-64 rounded-xl mb-4"
          resizeMode="cover"
        />
      ) : null}
      {gallery.artist ? (
        <Text className="text-gray-500 dark:text-gray-300 mb-1">By {gallery.artist}</Text>
      ) : null}
      {gallery.category ? (
        <Text className="text-sm text-gray-400 dark:text-gray-500 mb-4">{gallery.category}</Text>
      ) : null}
      {gallery.description ? (
        <Text className="text-base text-black dark:text-white">{gallery.description}</Text>
      ) : (
        <Text className="text-base italic text-gray-400 dark:text-gray-500">
          No description provided.
        </Text>
      )}
    </ScrollView>
  );
}
